import styled from "styled-components"

export const FooterWrapper = styled.section`
	display: flex;
	background-color: #f2f2f2;
	color: gray;
	justify-content: center;
	width: 100%;
  position: fixed;
  bottom: 0;
  box-sizing: content-box;
  align-items: center;
  height: 5%;
  padding-block: 10px;
`;

export const LinkItem = styled.a`
  font-size: larger;
	padding-inline: 10px;
  margin-inline: 20px;
  cursor: pointer;
  color: gray;
`;
