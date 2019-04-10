import styled from 'styled-components'
import * as colors from 'constants/colors'

export const AccountBtnWrapper = styled.header`
  margin-right: 8px;
  display: flex;
  align-items: center;
  min-width: 80px;
  text-align: left;

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-toggle {
    padding: 0 16px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-weight: 600;
    border: 1px solid #dfe3e9;
    color: ${colors.NAVY};
    outline: none;
    box-shadow: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    span {
      color: ${colors.BLUE};
    }

    i {
      margin-left: 40px;
    }

    &:hover {
      color: ${colors.BLUE};
      background: transparent;
      border-color: ${colors.BLUE};
      
      i {
        color: ${colors.BLUE};
      }
    }
  }

  .dropdown-content {
    border-right: 1px solid #f0f0f0;
    border-left: 1px solid #f0f0f0;
    position: absolute;
    top: 44px;
    right: 0;
    width: 160px;
    z-index: 9;
    display: inline-block;
    box-shadow: 1px 1px rgba(210, 210, 210, 0.3);
    background: #fff;

    ul {
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
      }
    }
  }

  a {
    font-weight: 600;
    color: ${colors.NAVY};
    padding: 4px 16px;
    line-height: 32px;
    display: block;
    width: 100%;
    transition: all 0.3s ease-in-out;
    text-align: left;
    outline: none !important;
    cursor: pointer;
    position: relative;
    opacity: 0.84;

    &:hover {
      color: ${colors.BLUE};
      background-color: #f1f4f8;
      opacity: 1;
    }
  }
`
