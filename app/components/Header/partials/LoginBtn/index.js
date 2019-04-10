import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import messages from './messages';
import { LoginBtnWrapper } from './style';

/* eslint-disable react/prefer-stateless-function */
class LoginBtn extends React.Component {
  render() {
    const { isSignUp } = this.props;
    return (
      <LoginBtnWrapper className="login">
        <NavLink to={isSignUp ? '/signup' : '/login'} activeClassName="active">
          {isSignUp ? (
            <FormattedMessage {...messages.signUp} />
          ) : (
            <FormattedMessage {...messages.login} />
          )}
        </NavLink>
      </LoginBtnWrapper>
    );
  }
}

export default LoginBtn;
