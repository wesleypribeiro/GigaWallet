import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.png';
import { WalletHeader, HeaderLogo, UserInfo } from './styles';
import formatPrice from '../../utils/format';

class Header extends React.Component {
  refreshValue() {
    const { expenses } = this.props;

    const total = expenses
      .reduce((acc, current) => {
        return acc + current.value * current.exchangeRates[current.currency].ask;
      }, 0);
    return total;
  }

  render() {
    const { email } = this.props;

    return (
      <WalletHeader>
        <HeaderLogo>
          <img src={ Logo } alt="Logo" />
          <h1>Gigawallet</h1>
        </HeaderLogo>
        <UserInfo>
          {email}
          {' '}
          Despesa total:
          {' '}
          {formatPrice(this.refreshValue())}
          {' '}
          BRL
        </UserInfo>
      </WalletHeader>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
