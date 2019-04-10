import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Hidden from '@material-ui/core/Hidden';
import messages from './message';
import { AccountBtnWrapper } from './style';

/* eslint-disable react/prefer-stateless-function */
class AccountBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    if (!this.state.dropdownOpen) {
      document.addEventListener('click', this.handleClickOutside, false);
    } else {
      document.removeEventListener('click', this.handleClickOutside, false);
    }

    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  handleClickOutside = e => {
    this.toggle();
  };

  logout = e => {
    e.preventDefault();

    const localeSelected = window.localStorage.getItem('localeSelected');
    window.localStorage.clear();
    window.localStorage.setItem('localeSelected', localeSelected);

    window.sessionStorage.clear();
    this.props.history.push('/');
  };

  render() {
    return (
      <AccountBtnWrapper className={`Account ${this.props.className}`}>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={this.toggle}>
            <Hidden smDown>
              <FormattedMessage {...messages.account} />
              <i className="kn-icon-arrow-down-thin" />
            </Hidden>
            <Hidden mdUp>
              <span className="kn-icon-human" />
            </Hidden>
          </div>
          {this.state.dropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <NavLink to="/account">
                    <FormattedMessage {...messages.accountSettings} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/maintenance">
                    <FormattedMessage {...messages.changePassword} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/logout">
                    <FormattedMessage {...messages.logOut} />
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </AccountBtnWrapper>
    );
  }
}

export default withRouter(AccountBtn);
