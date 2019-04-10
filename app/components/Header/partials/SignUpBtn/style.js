import styled from 'styled-components'
import * as colors from 'constants/colors'

export const SignUpBtnWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-right: 16px;

  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-toggle {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    color: #fff;
    background: ${colors.BLUE};
    font-weight: 600;
    border: 1px solid ${colors.BLUE};
    outline: none;
    box-shadow: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    i {
      margin-left: 24px;
      color: #FFF;
    }
    
    &.open i {
      transform: rotate(-180deg);
    }
    
    &:hover {
      color: ${colors.BLUE};
      background: transparent;
      
      i {
        color: ${colors.BLUE};
      }
    }
  }
  
  .dropdown-content {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    z-index: 9;
    display: inline-block;
    box-shadow: inset 0 -1px 0 0 #dfe3e9;
    background: #fff;
    
    ul {
      padding: 0;
      margin: 0;
      
      li {
        list-style-type: none;
        
        a {
          font-weight: 600;
          color: ${colors.NAVY};
          padding: 4px 16px;
          line-height: 32px;
          display: block;
          width: 100%;
          
          &:hover {
            color: ${colors.BLUE};
            background-color: #f1f4f8;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 959px) {
    margin: 0;
    
    .dropdown {
      display: block;
      width: 100%;
    }
    
    .dropdown-toggle {
      display: flex;
      width: 100%;
      height: auto;
      line-height: 21px;
      padding: 16px 0;
      color: ${colors.NAVY};
      background: transparent;
      border: none;
      justify-content: space-between;
      outline-color: transparent;
      
      i {
        transform: rotate(-180deg);
        margin-left: 24px;
        color: ${colors.NAVY} !important;
        font-size: 25px;
        top: -2px;
      }
      
      &.open i {
        transform: rotate(0deg);
      }
      
      &:hover {
        color: ${colors.NAVY};
        background: transparent;
      }
    }
    
    .dropdown-content {
      position: relative;
      top: 0;
      width: 100%;
      display: block;
      box-shadow: none;
      padding-left: 24px;
      
      ul {
        padding: 0;
        margin: 0;
        
        li {
          list-style-type: none;
          
          a {
            // padding: 12px 0;
            
            &:hover {
              color: ${colors.BLUE};
              background-color: transparent;
            }
          }
        }
      }
    }
  }
`
