import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
