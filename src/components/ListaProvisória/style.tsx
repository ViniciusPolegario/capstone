import styled from "styled-components";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  background-color: var(--color-black);
  width: 100%;
  max-width: 600px;
  height: 200px;
  overflow: auto;
  margin: 0 auto;
  font-size: var(--font-list-mobile);
  border-radius: 3px;

  li {
    color: white;
    width: 100%;
    list-style: none;
  }

  div {
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    margin: 10px 0;
  }

  @keyframes heightDown {
    from {
      height: 430px;
    }
    to {
      height: 200px;
    }
  }

  animation: heightDown 0.5s forwards;

  @media (min-width: 768px) {
    @keyframes heightUP {
      from {
        height: 170px;
      }
      to {
        height: 430px;
      }
    }

    animation: heightUP 0.5s forwards;
  }
`;

export const ModalContainer = styled.div`
  width: 80%;
  background-color: var(--light-gray);
  border: none;
  height: 60%;
  margin: auto;
  margin-top: 35%;
  outline: none;
  transition: 0.5s;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: var(--color-black);
  }

  header span {
    color: var(--color-green);
    font-size: 20px;
    font-weight: bold;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    padding: 20px;
    max-height: 90%;
  }

  .body img {
    align-self: center;
    width: 138px;
    height: 138px;
    border-radius: 50%;
    border: solid 3px var(--color-black);
  }

  .body span {
    font-size: 20px;
    font-weight: bold;
  }

  .body button {
    background: var(--color-red);
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-family: var(--title-font);
    font-size: var(--font-button-green-mobile);
    color: var(--btnColor-primary);
    transition: color 150ms ease-in-out;
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    align-self: center;
  }
`;

export const SettingsIconStyled = styled(SettingsIcon)`
  font-size: medium;
  color: var(--btnColor-primary);
  cursor: pointer;
`;

export const CloseIconStyled = styled(CloseIcon)`
  font-size: medium;
  cursor: pointer;
  color: var(--btnColor-primary);
`;
