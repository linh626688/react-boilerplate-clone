import styled from 'styled-components'
import * as colors from 'constants/colors'

export const LoginBtnWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-right: 16px;
  a {
    display: inline-block;
    height: 36px;
    padding: 0 16px;
    line-height: 36px;
    font-weight: 600;
    border: 1px solid #dfe3e9;
    color: ${colors.NAVY};
    &:hover {
      color: ${colors.BLUE};
      border-color: ${colors.BLUE};
    }
  }
  @media screen and (max-width: 959px) {
    display: flex;
    align-items: center;
    margin-right: 16px;
    a {
      display: inine-block;
      height: auto;
      line-height: 21px;
      padding: 16px 0;
      border: none;
      color: ${colors.NAVY};
      &:hover {
        color: ${colors.BLUE};
      }
    }
  }
`
