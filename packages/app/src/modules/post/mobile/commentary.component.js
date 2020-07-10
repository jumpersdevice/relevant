import React, { useState, useRef, memo } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { globalStyles } from 'app/styles/global';
import Pills from 'modules/ui/mobile/pills.component';
import { Divider, Box } from 'modules/styled/uni';
import {
  PanGestureHandler,
  NativeViewGestureHandler
} from 'react-native-gesture-handler';
import { registerGesture } from 'modules/navigation/navigation.actions';
import { DrawerGestureContext } from 'react-navigation-drawer';
import { TabViewContext } from 'modules/discover/mobile/discoverTabContext';
import Comment from './comment';

let styles;

Commentary.propTypes = {
  link: PropTypes.object,
  singlePost: PropTypes.bool,
  focusInput: PropTypes.func,
  commentary: PropTypes.array,
  preview: PropTypes.bool,
  avatarText: PropTypes.func,
  isReply: PropTypes.bool
};

function Commentary(props) {
  const {
    commentary,
    preview,
    isReply,
    link,
    singlePost,
    focusInput,
    avatarText
  } = props;

  const scrollToPage = p => scrollView.current.scrollToIndex({ index: p });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(10000);

  const scrollView = useRef();
  const panRef = useRef();
  const listRef = useRef();

  const gesture = useSelector(state => state.navigation.gesture);
  const dispatch = useDispatch();

  const onScrollEnd = e => {
    const { contentOffset } = e.nativeEvent;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(pageNum);
  };

  const handleGesture = e => {
    const { translationX, state } = e.nativeEvent;
    if (gesture !== listRef && state === 2) {
      dispatch(registerGesture(listRef));
    }

    if (state === 2) return;
    const offset = translationX;

    const leftEnd = scrollOffset - offset <= 0 && offset > 0;
    const rightEnd = scrollOffset - offset >= maxOffset;

    const shouldDisableScroll = leftEnd || rightEnd;
    const shouldEnableScroll = !shouldDisableScroll || state === 5;

    shouldDisableScroll && scrollEnabled && setScrollEnabled(false);
    shouldEnableScroll && !scrollEnabled && setScrollEnabled(true);
  };

  const pills = (
    <Box style={{ marginVertical: 16 }}>
      <Pills
        currentIndex={currentIndex}
        slides={commentary.map((c, i) => i + 1)}
        scrollToPage={scrollToPage}
      />
    </Box>
  );

  return (
    <Box style={{ marginBottom: !preview ? 16 : 0 }}>
      {isReply && !preview ? <Divider m={'0 2'} /> : null}
      <TabViewContext.Consumer>
        {tabView => (
          <DrawerGestureContext.Consumer>
            {drawer => {
              return (
                <PanGestureHandler
                  enabled={commentary.length > 1}
                  ref={panRef}
                  activeOffsetX={[-5, 5]}
                  onHandlerStateChange={handleGesture}
                  onGestureEvent={handleGesture}
                  simultaneousHandlers={[drawer, tabView, listRef].filter(h => h)}
                >
                  <NativeViewGestureHandler
                    enabled={commentary.length > 1 && scrollEnabled}
                    ref={listRef}
                    // shouldRecognizeSimultaneously
                    simultaneousHandlers={[drawer, tabView, panRef].filter(h => h)}
                  >
                    <FlatList
                      style={{ marginTop: !preview ? 16 : 0 }}
                      ref={scrollView}
                      shouldActivateOnStart={false}
                      scrollEnabled={commentary.length > 1 && scrollEnabled}
                      scrollEventThrottle={30}
                      scrollToOverflowEnabled={false}
                      alwaysBounceHorizontal={false}
                      bounces={false}
                      onScroll={e => {
                        const { x } = e.nativeEvent.contentOffset;
                        const length = e.nativeEvent.layoutMeasurement.width;
                        setScrollOffset(x);
                        setMaxOffset(length * (commentary.length - 1));
                      }}
                      keyExtractor={(item, index) => index.toString()}
                      horizontal={!preview}
                      data={commentary}
                      renderItem={({ item: post, index }) => (
                        <Comment
                          post={post}
                          index={index}
                          preview={preview}
                          singlePost={singlePost}
                          focusInput={focusInput}
                          link={link}
                          avatarText={avatarText}
                        />
                      )}
                      pagingEnabled
                      contentContainerStyle={[!preview ? styles.postScroll : null]}
                      showsHorizontalScrollIndicator={false}
                      onMomentumScrollEnd={onScrollEnd}
                    />
                  </NativeViewGestureHandler>
                </PanGestureHandler>
              );
            }}
          </DrawerGestureContext.Consumer>
        )}
      </TabViewContext.Consumer>
      {commentary.length > 1 ? pills : null}
    </Box>
  );
}

const localStyles = StyleSheet.create({
  postScroll: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginLeft: 0,
    marginRight: 0
  }
});

styles = { ...localStyles, ...globalStyles };

export default memo(Commentary);
