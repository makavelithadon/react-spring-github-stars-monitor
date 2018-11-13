import React from "react";
import { Spring, animated, config } from "react-spring";
import styled from "styled-components";
import { Consumer } from "./Provider";

const StyledName = styled(animated.h1).attrs({
  style: ({
    o
  }) => ({
    opacity: o.interpolate(o => o)
  })
})`
  font-size: 2.8rem;
  margin: 0 0 14px 0;
  color: ${({ theme }) => theme.colors.black};
`;

const Modal = ({ children }) => (
  <Consumer>
    {({ name }) => (
      <Spring
        from={{ o: 0 }}
        to={{ o: 1 }}
        config={{
          ...config.gentle,
          delay: name ? 500 : 0
        }}
        native
      >
        {props => <StyledName {...props}>{name}</StyledName>}
      </Spring>
    )}
  </Consumer>
);

export default Modal;
