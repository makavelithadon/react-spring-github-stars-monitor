import React from "react";
import { Spring, animated, config } from "react-spring";
import styled from "styled-components";
import { Consumer } from "./Provider";

const StyledBackdrop = styled(animated.div).attrs({
  style: ({ o }) => ({
    opacity: o.interpolate(o => o),
    display: o.interpolate(o => (o > 0 ? "block" : "none"))
  })
})`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Backdrop = () => (
  <Consumer>
    {({ open }) => (
      <Spring from={{ o: 0 }} to={{ o: Number(open) }} config={config.gentle} native>
        {props => <StyledBackdrop {...props} />}
      </Spring>
    )}
  </Consumer>
);

export default Backdrop;
