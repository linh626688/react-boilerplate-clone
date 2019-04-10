import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import LogoUrl from 'images/logo_MSS_En.png';
import { withStyles } from '@material-ui/core/styles';
import { HeaderWrapper, Logo } from './style';
import LoginBtn from './partials/LoginBtn';
import AccountBtn from './partials/AccountBtn';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState(
      prevState => ({
        showMobileMenu: !prevState.showMobileMenu,
      }),
      () => {
        if (this.state.showMobileMenu) {
          document.addEventListener('click', this.handleClickOutside, false);
          document.querySelector('#app').classList.add('mobile-menu-expanded');
        } else {
          document.removeEventListener('click', this.handleClickOutside, false);
          document
            .querySelector('#app')
            .classList.remove('mobile-menu-expanded');
        }
      },
    );
  };

  handleClickOutside = e => {
    if (
      e &&
      e.target &&
      (e.target.name === 'toggleSignupMenu' ||
        e.target.name === 'toggleSubmenu')
    ) {
      this.setState({
        showMobileMenu: true,
      });
    } else {
      this.setState({
        showMobileMenu: false,
      });

      document.removeEventListener('click', this.handleClickOutside, false);
      document.querySelector('#app').classList.remove('mobile-menu-expanded');
    }
  };

  render() {
    return (
      <HeaderWrapper
        className={this.state.showMobileMenu ? 'mobile-menu-expanded' : ''}
      >
        <button
          type="button"
          onClick={e => this.toggleMobileMenu(e)}
          className="mobile-toggle-menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Logo>
          <NavLink to="/">
            <img src={LogoUrl} alt="" />
          </NavLink>
        </Logo>

        <LoginBtn isSignUp={false} />
        <LoginBtn isSignUp />
        <AccountBtn className="account-btn" />
        <div className="mobile-header-right">
          {/* <AccountBtn className="account-btn" /> */}
          {/* <LanguageSwitcher className="language-switcher" /> */}
        </div>
      </HeaderWrapper>
    );
  }
}

export default withStyles(styles)(Header);
