import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 220px 1fr;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  max-width: 1300px;
  margin: auto;
  padding: 1rem;
  height: 100%;
  overflow: hidden;
`;

export const Navbar = styled.nav`
  background-color: white;
  border-radius: 8px 0 0 8px;
  color: black;
  padding-top: 1.3rem;
  box-shadow: 4px 0 8px -5px rgb(0 0 0 / 14%);
  z-index: 10;

  .containerLogo {
    display: flex;
    align-items: center;
    width: 100%;

    svg {
      background: ${props => props.theme.colors.backgroundPrimary};
      background: linear-gradient(180deg, rgba(11,41,151,1) 0%, rgba(42,33,165,1) 35%, rgba(101,17,194,1) 100%);
      fill: white;
      width: 28px;
      height: 28px;
      padding: .3rem .45rem .3rem .3rem;
      border-radius: 15px 15px 6px 15px;
      margin-left: auto;
      margin-right: .5rem;
    }

    .logoName {
      margin-right: auto;
      font-weight: 700;

      span {
        color: ${props => props.theme.colors.backgroundPrimary};
      }
    }
  }

  .navbarTitle {
    margin: 2.5rem 0 1.2rem 1.5rem;
    font-size: .8rem;
    font-weight: 600;
  }

  .linkMenu {
    display: flex;
    align-items: center;
    padding: .6rem .8rem;
    margin-left: 1.5rem;
    border-radius: 12px 0 0 12px;
    text-decoration: none;
    color: gray;
    background-color: transparent;
    font-size: .7rem;
    font-weight: 700;
    transition: all .3s ease-in-out;
    position: relative;

    svg {
      margin-right: .8rem;
      width: 16px;
      height: 16px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 100%;
      border-radius: 15px;
      background-color: ${props => props.theme.colors.backgroundPrimary};
      opacity: 0;
    }

    &.active {
      color: ${props => props.theme.colors.backgroundSecondary};
      background-color: ${props => props.theme.colors.backgroundPrimaryAlt};

      &::after {
        opacity: 1;
      }
    }
  }
`;

export const Container = styled.div`
  color: black;
  padding: 1rem;
  background-color: ${props => props.theme.colors.colorWhite};
  border-radius: 0 8px 9px 0;
`;

export const PanelContainer = styled.div`
  background-color: white;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 4px 4px 8px -5px rgb(0 0 0 / 14%);

  p {
    margin: 0;
  }
`;

export const TitlePanel = styled.h4`
  margin: 0;
`;