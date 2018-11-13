import styled from "styled-components";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Card = styled.div`
  position: relative;
  border-radius: 4px;
  // border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
`;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
