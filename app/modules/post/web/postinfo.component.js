import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { ActivityIndicator } from 'react-native-web';
import ULink from 'modules/navigation/ULink.component';
import { Title, SecondaryText } from 'modules/styled/Text.component';
import { colors } from 'app/styles/globalStyles';
import { numbers } from 'app/utils';
import get from 'lodash.get';
import Tag from 'modules/tag/tag.component';

if (process.env.BROWSER === true) {
  require('./post.css');
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const View = styled.View`
  position: relative;
`;


const Image = styled.Image`
  height: 202;
  width: 368;
  margin-right: 1em;
  margin-bottom: 1em;
  background: black;
`;

const PostText = styled.View`
  flex-shrink: 1;
`;


const PostTitle = styled(Title)`
  /* max-width: 100%; */
  /* flex-shrink: 1 */
  /* flex-wrap: wrap; */
  /* flex: 1; */
`;

export default function PostInfo(props) {
  const { post, link, community, postUrl } = props;
  if (post.loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  const title = get(link, 'title') || get(post, 'title');
  if (!title) {
    return <View />;
  }

  let timestamp;
  if (post.postDate) {
    timestamp = ' • ' + numbers.timeSince(Date.parse(post.postDate)) + ' ago';
  }

  const imageUrl = link.image || null;

  const postContent = (
    <Wrapper>
      {imageUrl ?
        <View>
          <ULink external to={post.url} target="_blank">
            <Image source={{ uri: imageUrl }} />
          </ULink>
        </View>
        : <View />}
      <PostText>
        <ULink external to={post.url} external target="_blank">
          <PostTitle>{title}</PostTitle>
        </ULink>
        <SecondaryText>
          {get(post, 'embeddedUser.handle') ? `Posted by: @${get(post, 'embeddedUser.handle')} and HOW MANY OTHERS?` : null}
          {timestamp}
          <ULink external to={post.url} external target="_blank">
            <SecondaryText>{link.domain && ` • ${link.domain} ↗`}</SecondaryText>
          </ULink>
        </SecondaryText>
        { post.commentCount ?
          <ULink external to={postUrl} >
            <SecondaryText color={colors.blue}>
              {post.commentCount} Comments
            </SecondaryText>
          </ULink>
          : null}
        <SecondaryText>{
          post.tags.map(tag => <Tag name={tag} community={community} key={tag} />)}
        </SecondaryText>
      </PostText>

    </Wrapper>
  );

  if (post.url) {
    return (
      <View>
        {postContent}
      </View>
    );
  }
  return postContent;
}

PostInfo.propTypes = {
  link: PropTypes.object,
  post: PropTypes.object,
  community: PropTypes.string,
};
