import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions';
import Logo from '../../assets/logo.png';
import { Title, Content, LogoSection, FormLogin } from './styles';

const PASSWORD_REQUIREMENT = 5;
const pattern = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  redirect() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    const { addUser } = this.props;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <Content>
        <Title>
          <LogoSection>
            <img src={ Logo } alt="Login" />
            <h1>Gigawallet</h1>
          </LogoSection>
          <FormLogin>
            <input
              type="email"
              onChange={ this.handleEmail }
              placeholder="E-mail"
            />
            <input
              type="password"
              onChange={ this.handlePassword }
              placeholder="Senha"
            />
            <button
              id="login-button"
              type="button"
              disabled={
                password.length <= PASSWORD_REQUIREMENT || !pattern.test(email)
              }
              onClick={ () => {
                addUser(email);
                this.redirect();
              } }
            >
              Entrar
            </button>
            <span style={{"font-size": "0.75rem", "color": "red", "marginTop": "0.313rem"} }>* Entrar com e-mail e senha ficticia de 8 caracteres</span>
          </FormLogin>
        </Title>
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (value) => dispatch(login(value)),
});

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
