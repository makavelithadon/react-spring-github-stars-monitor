import React from "react";
import styled, { withTheme, keyframes } from "styled-components";
import { Spring, animated } from 'react-spring';
import { Consumer } from "./Provider";
import RefreshIcon from './../RefreshIcon';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const buttonSize = 50;

const StyledRefreshButton = styled(animated.button).attrs({
  style: ({
    o,
    y
  }) => ({
    opacity: o,
    bottom: y.interpolate(y => `${y}px`)
  })
})`
  position: absolute;
  left: 50%;
  margin-left: -${buttonSize/2}px;
  bottom: 0;
  border: none;
  outline: 0; outline-offset: 0;
  border-radius: 50%;
  padding: 12px;
  width: ${buttonSize}px; height: ${buttonSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.1);
  & * {
    margin-top: -3px;
  }
  &.loading {
    animation: ${rotate} .8s linear infinite;
  }
`;

const RefreshButton = ({ children, theme }) => (
  <Consumer>
    {({ refresh, isFetching }) => {
      return <Spring
        from={{ o: 0, y: -buttonSize }}
        to={{ o: 1, y: -buttonSize/2 }}
        config={{ tension: 400, friction: 40, clamp: true }}
        native
        delay={2000}
      >
        {props => (
          <StyledRefreshButton bgColor={isFetching ? theme.colors.lightGrey : theme.colors.link} {...props} onClick={() => refresh()} className={isFetching ? 'loading' : ''}>
            <RefreshIcon fill={theme.colors.white} />
          </StyledRefreshButton>
        )}
      </Spring>
    }}
  </Consumer>
);

export default withTheme(RefreshButton);
