/**
 *
 * Layout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { FormattedMessage } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import classnames from 'classnames';
import messages from './messages';

import { LayoutWrapper, Main } from './style';

class Layout extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <Header />
        <Main
          className={classnames('main-content-wrapper', {
            'full-width': this.props.fullWidth,
            'main-after-log-in': '',
          })}
        >
          {this.props.fullWidth && this.props.children}
          {!this.props.fullWidth && (
            <Container>{this.props.children}</Container>
          )}
          {/* <div className="build-logs">Build: %BUILD_VERSION%</div> */}
        </Main>
        <Footer />
      </LayoutWrapper>
    );
  }
}

Layout.propTypes = {};

export default Layout;
