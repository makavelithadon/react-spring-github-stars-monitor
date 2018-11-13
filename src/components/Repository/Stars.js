import React from "react";
import { Spring, config } from "react-spring";
import styled, { withTheme } from "styled-components";
import { Consumer } from "./Provider";
import StarIcon from './../StarIcon';

const StyledItems = styled.span`
  &.count {
    font-size: 1.5rem;
    padding-right: 7px;
  }
`;

const StyledStars = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  ${StyledItems} {
    margin: 6px 0 0;
  }
`;


const Stars = ({ children, theme }) => (
  <Consumer>
    {({ stars }) => (
      <Spring
        from={{ count: 0 }}
        to={{ count: parseInt(stars) }}
        config={{ ...config.gentle, clamp: true, delay: 850 }}
      >
        {props => (
          <StyledStars {...props}>
            <StyledItems className={'count'}>{parseInt(props.count, 10)}</StyledItems>
            <StyledItems className={'icon'}><StarIcon fill={theme.colors.black} /></StyledItems>
          </StyledStars>
        )}
      </Spring>
    )}
  </Consumer>
);

export default withTheme(Stars);
