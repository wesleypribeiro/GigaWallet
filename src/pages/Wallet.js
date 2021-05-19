import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';
import EditExpense from '../components/NewExpense/EditExpense';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    const { editing } = this.props;
    return (
      <div>
        <Header />
        { editing ? <EditExpense /> : <NewExpense /> }
        <Expenses />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
});

export default connect(mapStateToProps)(Wallet);
