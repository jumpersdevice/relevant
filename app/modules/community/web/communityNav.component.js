import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { colors, layout } from 'app/styles/globalStyles';
import * as communityActions from 'modules/community/community.actions';
import styled, { css } from 'styled-components/primitives';
import ULink from 'modules/navigation/link.component';
import CommunityActive from 'modules/community/web/communityActive.component';
import get from 'lodash.get';

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: `${colors.black}`,
};

const StyledView = styled.View`
  margin-bottom: 1em;
  background: ${props => props.active ? 'hsl(0, 0%, 92%)' : 'transparent'};
`;

const StyledText = styled.Text`
  display: inline;
`;

const StyledImage = styled.Image`
  width: 30;
  height: 30;
  display: inline-block;
  margin-right: 1em;
`;

const StyledCommunityList = styled.View`
`;

const CommunityLink = ({ community }) => (
  <ULink
    style={linkStyle}
    key={community._id}
    to={'/' + community.slug + '/new'}
    onPress={() => {}}
  >
    <StyledImage source={{ uri: community.image }}/>
    <StyledText>{community.name}</StyledText>
  </ULink>
);


class Community extends Component {
  static propTypes = {
    actions: PropTypes.object,
    community: PropTypes.object,
  };

  componentDidMount() {
    this.props.actions.getCommunities();
  }

  renderCommunities() {
    const { actions } = this.props;
    const { communities, list } = this.props.community;
    return list.map(id => {
      const community = communities[id];
      const isActive = this.props.community.active === community.slug;
      // const active = currentCommunity === community.slug;
      // const className = active ? 'active' : null;
      return (
        <StyledView key={community._id} active={isActive} >
          {isActive ?
            <CommunityActive
              community={community}
              getCommunityMembers={get(actions, 'getCommunityMembers', null)}
            >
              <CommunityLink community={community} />
            </CommunityActive>
            : <CommunityLink community={community} />}
        </StyledView>
      );
    });
  }


  render() {
    return (
      <StyledCommunityList>
        {this.renderCommunities()}
      </StyledCommunityList>);
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  community: state.community,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...communityActions
    },
    dispatch
  )
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Community)
);
