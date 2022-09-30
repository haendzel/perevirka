import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";
import Button from "react-bootstrap/Button";

export const StyledMenuListItem = styled.button`
  display: block;
  border: none;
  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  max-width: 230px;
  height: 40px;
  padding: 8px;
  min-width: 230px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary};
  }

  &.is-active {
    background-color: ${theme.gray};
    position: relative;
    &:after {
      display: block;
      content: url("data:image/svg+xml,%3Csvg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.34304 9.68395L5.44815 8.79901L8.5554 5.69176H0.75V4.39915H8.5554L5.44815 1.29688L6.34304 0.40696L10.9815 5.04545L6.34304 9.68395Z' fill='%23000010'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  text-align: left;
  border-radius: 0 !important;
  border: none;
  background: transparent;
  color: ${theme.black};
  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  padding: 8px;

  &:hover {
    background-color: ${theme.darkgray};
    color: ${theme.secondary};
    position: relative;
    &:after {
      display: block;
      content: url("data:image/svg+xml,%3Csvg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.34304 9.68395L5.44815 8.79901L8.5554 5.69176H0.75V4.39915H8.5554L5.44815 1.29688L6.34304 0.40696L10.9815 5.04545L6.34304 9.68395Z' fill='%23FE6C2D'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    div {
      a {
        border-color: ${theme.secondary};
        color: ${theme.secondary};
        span {
          color: ${theme.secondary};
        }
      }
    }
  }

  &.is-active,
  &.active,
  &:active,
  &:focus {
    outline: none;
    border: none;
    background-color: ${theme.gray};
    box-shadow: none;
    position: relative;
    color: ${theme.black};

    span {
      color: ${theme.black};
    }
    &:after {
      display: block;
      content: url("data:image/svg+xml,%3Csvg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.34304 9.68395L5.44815 8.79901L8.5554 5.69176H0.75V4.39915H8.5554L5.44815 1.29688L6.34304 0.40696L10.9815 5.04545L6.34304 9.68395Z' fill='%23000010'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      background-color: ${theme.darkgray};
      color: ${theme.secondary} !important;
      position: relative;
      &:after {
        display: block;
        content: url("data:image/svg+xml,%3Csvg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.34304 9.68395L5.44815 8.79901L8.5554 5.69176H0.75V4.39915H8.5554L5.44815 1.29688L6.34304 0.40696L10.9815 5.04545L6.34304 9.68395Z' fill='%23FE6C2D'/%3E%3C/svg%3E%0A");
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }

      div {
        a {
          border-color: ${theme.secondary};
          color: ${theme.secondary} !important;

          span {
            color: ${theme.secondary} !important;
          }
        }
      }
    }
  }
`;
