import React from "react";
import { Spring, animated, config } from "react-spring";
import styled from "styled-components";
import { Consumer } from "./Provider";

const StyledModal = styled(animated.div).attrs({
  style: ({ o, y, h }) => ({
    opacity: o.interpolate(o => o),
    display: o.interpolate(o => (o > 0 ? "block" : "none")),
    transform: y.interpolate(y => `translateY(${y}px)`),
    height: h.interpolate(h => h),
    overflow: h.interpolate(h => h >= 218 ? 'visible' : 'hidden')
  })
})`
  min-width: 320px;
  max-width: 600px;
  height: auto;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ children }) => (
  <Consumer>
    {({ open }) => (
      <Spring
        from={{ o: 0, y: 100, h: 4 }}
        to={{ o: Number(open), y: 0, h: 218 }}
        config={key => {
          return {
            ...config.gentle,
            duration: key === 'y' ? 350 : 0,
            delay: key === 'h' ? 575 : 0,
            clamp: true
          }
        }}
        native
      >
        {props => <StyledModal {...props}>{children}</StyledModal>}
      </Spring>
    )}
  </Consumer>
);

export default Modal;
