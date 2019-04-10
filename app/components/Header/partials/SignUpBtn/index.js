import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import messages from './messages';
import { SignUpBtnWrapper } from './style';

/* eslint-disable react/prefer-stateless-function */
class SignUpBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = e => {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }

    this.setState(
      prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
      }),
      () => {
        if (this.state.dropdownOpen) {
          document.addEventListener('click', this.handleClickOutside, false);
        } else {
          document.removeEventListener('click', this.handleClickOutside, false);
        }
      },
    );

    this.props.toggleSignupMenu(e);
  };

  handleClickOutside = () => {
    this.toggle();
  };

  render() {
    return (
      <SignUpBtnWrapper>
        <div
          className="dropdown"
          ref={node => {
            this.node = node;
          }}
        >
          <button
            className={`dropdown-toggle ${
              this.state.dropdownOpen ? 'open' : ''
            }`}
            name="toggleSignupMenu"
            onClick={e => this.toggle(e)}
          >
            <FormattedMessage {...messages.signUpAs}>
              {(...content) => content}
            </FormattedMessage>
            <Hidden mdDown>
              <i className="kn-icon-arrow-down-thin" />
            </Hidden>
            <Hidden mdUp>
              <i className="kn-icon-sort-asc" />
            </Hidden>
          </button>
          {this.state.dropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li onClick={e => this.toggle(e)}>
                  <NavLink
                    to="/register"
                    onClick={() =>
                      window.sessionStorage.setItem('roleSelected', 'shipper')
                    }
                  >
                    <FormattedMessage {...messages.shipper} />
                  </NavLink>
                </li>
                <li onClick={e => this.toggle(e)}>
                  <NavLink
                    to="/register"
                    onClick={() =>
                      window.sessionStorage.setItem('roleSelected', 'carrier')
                    }
                  >
                    <FormattedMessage {...messages.carrier} />
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </SignUpBtnWrapper>
    );
  }
}

export default SignUpBtn;
