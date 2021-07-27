import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';


export const Menu = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 15px;
  color: gray;
  width: 100%;
  margin: auto;
  background-color: #f2f2f2;
  top: 0;
  box-sizing: content-box;
  align-items: center;
`;

export const MenuItem = styled.div`
  padding-inline: 10px;
  margin-inline: 20px;
  cursor: pointer;
  &:hover {
    color: black;
  }

  &.active {
    color: black;
    padding-bottom: 3px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: fit-content;
  }
`;
