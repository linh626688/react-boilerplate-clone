import styled from 'styled-components';
import * as colors from 'constants/colors';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  .build-logs {
    position: fixed;
    bottom: 15px;
    right: 20px;
    background: ${colors.BLUE};
    color: #fff;
    font-size: 12px;
    padding: 10px 20px;
    border-radius: 20px;
    pointer-events: none;
  }
`;

export const Main = styled.div.attrs({ className: 'clearfix' })`
  position: relative;
  padding: 48px 0;
  min-height: calc(100vh - 522px);
  width: 100%;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 48px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(#f2f3f3, #fcfdfd);
  }

  &.full-width {
    padding-top: 0;
    min-height: auto;
    &:before {
      display: none;
    }
  }

  &.main-after-log-in {
    min-height: calc(100vh - 137px);
  }
`;
