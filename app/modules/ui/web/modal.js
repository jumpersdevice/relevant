import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { View, Image, Header, Touchable } from 'modules/styled/uni';
import { colors, sizing, layout } from 'app/styles';

if (process.env.BROWSER === true) {
  require('./modal.css');
}

const ModalParent = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.modalBackground};
  z-index: 200;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

const ModalScroll = styled.View`
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

const Modal = styled(View)`
  z-index: 5;
  justify-content: space-between;
  flex-direction: column;
  ${layout.modalShadow}
  margin: ${sizing(6)} 0;
`;

const CloseButton = styled(Image)`
  position: absolute;
  top: ${sizing(4)};
  right: ${sizing(4)};
  cursor: pointer;
  z-index: 10;
`;

export default class ModalComponent extends Component {
  static propTypes = {
    header: PropTypes.object,
    title: PropTypes.string,
    visible: PropTypes.bool,
    close: PropTypes.func,
    children: PropTypes.node,
    footer: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
  };

  render() {
    const { close, footer, children } = this.props;
    const header = this.props.header || this.props.title;
    if (!this.props.visible) return null;
    const footerEl = typeof footer === 'function' ? footer(this.props) : footer;
    return (
      <ModalParent>
        <ModalScroll>
          <Modal bg={colors.white} w={95} p={'4 4 6 4'}>
            <Touchable onPress={() => close()}>
              <CloseButton
                w={3}
                h={3}
                resizeMode={'contain'}
                source={require('app/public/img/x.png')}
              />
            </Touchable>
            {header ?
              <Header>{this.props.header || this.props.title}</Header>
              : null}
            <View mt={3}>{children}</View>
            <View mt={6}>{footerEl}</View>
          </Modal>
        </ModalScroll>
      </ModalParent>
    );
  }
}
