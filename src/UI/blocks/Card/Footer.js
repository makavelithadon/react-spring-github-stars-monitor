import styled from "styled-components";

const Footer = styled.footer`
  padding: ${({ theme }) => `${theme.blocks.card.padding}px`};
  // border-top: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`}
`;

export default Footer;
