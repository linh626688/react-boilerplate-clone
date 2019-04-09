/**
 *
 * Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { ContainerWrapper } from './style';

class Container extends React.Component {
  render() {
    return <ContainerWrapper>{this.props.children}</ContainerWrapper>;
  }
}

Container.propTypes = {};

export default Container;
