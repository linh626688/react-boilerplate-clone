import styled from 'styled-components'
import * as colors from 'constants/colors'

export const Logo = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  
  img {
    max-height: 40px;
  }

  @media screen and (max-width: 959px) {
    height: 53px;
    img {
      max-height: 40px;
    }
  }

  @media screen and (max-width: 599px) {
    img {
      max-height: 26px;
    }
  }
  
  @media screen and (max-width: 959px) {
    position: relative;
    left: -29px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 959px) {
    z-index: 99;
    display: block;
    width: 318px;
    max-width: 100%;
    background: #fff;
    //height: calc(100vh - 53px);
    height: 100vh;
    position: absolute;
    //top: 53px;
    top: 0;
    left: -318px;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 40px 0 69px;       
    
    //& > ul > li {
    //  padding-left: 29px;
    //  
    //  &:first-child {
    //    padding-left: 0;
    //  }
    //}

    .language-switcher,
    .account-btn {
      display: none;
    }
    
    .mobile-header-right .account-btn {
      
    }
  }

  &.mobile-menu-show {
    transform: translateX(0);
  }
  
  @media screen and (max-width: 320px) {
    width: 270px;
    left: -270px;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;

  & > li {
    margin-right: 40px;

    & > a, .has-sub-menu {
      text-decoration: none;
      padding: 0 8px;
      text-decoration: none;
      color: ${colors.NAVY};
      font-weight: 600;
      position: relative;
      display: flex;
      height: 80px;
      align-items: center;

      &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 6px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease-in-out;
        background-color: ${colors.BLUE};
      }

      &:hover,
      &.active {
        color: ${colors.BLUE};

        &:after {
          width: 100%;
        }
      }
    }
  }
  
  @media screen and (max-width: 1279px) {
    & > li {
      margin-right: 16px;
    }
  }
  
  @media screen and (max-width: 959px) {
    display: block;

    & > li {
      margin: 0;
      display: block;

      & > a, .has-sub-menu {
        display: block;
        height: auto;
        padding: 16px 0;
        
        &:after {
          display: none;
        }
      }

      .has-sub-menu {
        padding: 0;

        button {
          padding: 16px 0;
          display: block;
          width: 100%;
          text-align: left;
        }
      }
    }
  }
`
export const HeaderWrapper = styled.header`
  z-index: 99;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background: #fff;
  transition: left 0.3s ease-in-out;
    
  .mobile-toggle-menu {
    display: none;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    font-size: 20px;
    padding: 0;
    outline: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: #002B55;

    &:hover {
      color: #002B55;
    }
  }

  .mobile-header-right {
    display: none;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);

    .language-switcher {
      min-width: 0;

      .dropdown-toggle {
        border: none;
        height: auto;
        line-height: auto;

        button {
          padding: 0;
        }

        i {
          display: none;
        }
      }
    }
    
    .account-btn {
      display: none;
    }
  }
  
  @media screen and (max-width: 959px) {
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;

    & + * {
      margin-top: 53px;
    }
    
    &.mobile-menu-expanded {
      left: 318px;
          
      &:before {
        content: '';
        width: 1000px;
        height: 100vh;
        top: 53px;
        position: absolute;      
        background: ${colors.NAVY};
        opacity: 0.9;
      }
      
      .mobile-toggle-menu {
        left: 18px;      
      }
    }
    
    .mobile-toggle-menu,
    .mobile-header-right {
      display: block;
    }
    
    .mobile-header-right {
      .account-btn {
        min-width: 0;
        margin-right: 20px;
        display: inline-block;
        
        .dropdown-toggle {
          padding: 0;
          border: 0;
          
          .kn-icon-human {
            color: #002B55;
            font-size: 18px;
            top: 3px;
          }        
        }
      }
    
      .language-switcher {
        display: inline-block;
      }
    }
    
    .mobile-menu-show {
      img {
        height: 55px;
        max-height: 55px;
      }
    }
  }
  
  @media screen and (max-width: 320px) {
     &.mobile-menu-expanded {
        left: 270px;
     }
  }
`
