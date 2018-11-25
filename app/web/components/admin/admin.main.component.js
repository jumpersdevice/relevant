import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adminActions from '../../../actions/admin.actions';
import Wallet from '../wallet/wallet.component';
import Eth from '../ethTools/eth.context';
import AdminContract from './adminContract.component';

import { BondedTokenContainer } from 'bonded-token';

class AdminWallet extends Component {
  render() {
    return (
      <div>
        <BondedTokenContainer {...this.props}>
          <div className={'row pageContainer column'}>
            <Eth.Consumer>
              {wallet => <AdminContract wallet={wallet} { ...this.props } />}
            </Eth.Consumer>
            <Wallet user={this.props.user} />
          </div>
        </BondedTokenContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    drizzleStatus: state.drizzleStatus,
    RelevantCoin: state.contracts.RelevantCoin,
    accounts: state.accounts,
    accountBalances: state.accountBalances,
    drizzle: {
      transactions: state.transactions,
      web3: state.web3,
      transactionStack: state.transactionStack,
    }
  };
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    // ...authActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminWallet);
