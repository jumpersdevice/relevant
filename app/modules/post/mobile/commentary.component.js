import React, { useState, useRef } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { globalStyles, fullWidth, mainPadding } from 'app/styles/global';
import Pills from 'modules/ui/mobile/pills.component';
import { Image, Divider, View, Box } from 'modules/styled/uni';
import {
  PanGestureHandler,
  NativeViewGestureHandler
} from 'react-native-gesture-handler';
import { registerGesture } from 'modules/navigation/navigation.actions';
import ButtonContainer from 'modules/post/mobile/postButtons.container';
import { DrawerGestureContext } from 'react-navigation-drawer';
import { TabViewContext } from 'modules/discover/mobile/discoverTabContext';
import CommentBody from 'modules/comment/commentBody';
import PostInfo from './postInfo.component';

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

export default function Commentary(props) {
  const auth = useSelector(state => state.auth);
  const users = useSelector(state => state.user.users);
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

  // eslint-disable-next-line
  const renderItem = ({ item, index }) => {
    const i = index;

    const post = { ...item };
    if (!post) return null;

    const user = users[post.user] || post.embeddedUser;
    const hideButtons = preview;

    return (
      <Box
        key={post._id + i}
        style={[
          styles.commentaryContainer,
          preview ? { width: 'auto', flex: 1 } : null,
          preview ? { marginHorizontal: 0, marginTop: 16 } : null
        ]}
      >
        {isReply && !preview ? <Divider /> : null}
        <Box style={[styles.commentary]}>
          <View flex={1} fdirection={'row'} m={`2 0 ${preview ? 0 : 2} 0`}>
            {isReply && !preview ? (
              <Image
                h={2}
                w={2}
                mt={1}
                mr={1}
                resizeMode={'contain'}
                source={require('app/public/img/reply.png')}
              />
            ) : null}
            <Box style={{ flex: 1 }}>
              <PostInfo
                big
                post={post}
                auth={auth}
                singlePost={singlePost}
                user={user}
                avatarText={avatarText}
                preview={preview}
              />
              <Box
                style={[
                  {
                    marginTop: preview && !post.link && !post.parentPost ? 0 : 8,
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: avatarText ? 6 * 8 : 0
                  }
                ]}
              >
                <CommentBody
                  community={'relevant'}
                  comment={post}
                  preview={preview}
                  inMainFeed={!singlePost && !preview}
                />
              </Box>
              {!hideButtons && (
                <Box m={'2 0'}>
                  <ButtonContainer
                    horizontal
                    post={post}
                    parentPost={post.parentPost ? post.parentPost : post}
                    comment={post}
                    link={link}
                    focusInput={focusInput}
                    singlePost={singlePost}
                  />
                </Box>
              )}
            </Box>
          </View>
        </Box>
      </Box>
    );
  };

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
        // changed={changed}
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
                      renderItem={renderItem}
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
  commentaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: fullWidth - mainPadding * 2,
    marginHorizontal: mainPadding
  },
  postScroll: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginLeft: 0,
    marginRight: 0
  },
  commentary: {
    flexGrow: 1,
    flexDirection: 'column'
  }
});

styles = { ...localStyles, ...globalStyles };
