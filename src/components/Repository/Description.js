import React from "react";
import { Spring, animated, config } from "react-spring";
import styled from "styled-components";
import { Consumer } from "./Provider";

const StyledDescription = styled(animated.p).attrs({
  style: ({
    o
  }) => ({
    opacity: o.interpolate(o => o)
  })
})`
  font-size: 1.3rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

const Modal = ({ children }) => (
  <Consumer>
    {({ description }) => (
      <Spring
        from={{ o: 0 }}
        to={{ o: 1 }}
        config={{
          ...config.gentle,
          delay: 500
        }}
        native
      >
        {props => <StyledDescription {...props}>{description}</StyledDescription>}
      </Spring>
    )}
  </Consumer>
);

export default Modal;
