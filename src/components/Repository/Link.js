import React from "react";
import { Spring, animated, config } from "react-spring";
import styled from "styled-components";
import { Consumer } from "./Provider";

const StyledLink = styled(animated.a).attrs({
  style: ({
    o
  }) => ({
    opacity: o.interpolate(o => o)
  })
})`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Modal = ({ children }) => (
  <Consumer>
    {({ link }) => {
      return <Spring
        from={{ o: 0 }}
        to={{ o: 1 }}
        config={{
          ...config.gentle,
          delay: 750
        }}
        native
      >
        {props => <StyledLink href={link} target={'_blank'} {...props}>{link}</StyledLink>}
      </Spring>
    }}
  </Consumer>
);

export default Modal;
