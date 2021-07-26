import styled from "styled-components"

export const FooterWrapper = styled.section`
	display: flex;
	padding-block: 15px;
	background-color: #f2f2f2;
	color: gray;
	justify-content: center;
	width: 100%;
  position: fixed;
  bottom: 0;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled.a`
  font-size: larger;
	padding-inline: 10px;
  margin-inline: 20px;
  cursor: pointer;
`;
