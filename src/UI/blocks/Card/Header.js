import styled from "styled-components";

const Header = styled.header`
  padding: ${({ theme }) => `${theme.blocks.card.padding}px`};
  // border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
`;

export default Header;
