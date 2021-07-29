import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  min-width: max-content;
`;

export const Name = styled.div`
  font-size: 40px;
  padding: 30px;
  padding-top: 50px;
  text-align: center;
  font-weight: 400;
`;

export const Intro = styled.div`
  padding-block: 50px;
  text-align: center;
  width: 300px;
  margin: auto;
  font-size: 18px;
  line-height: 18px;
`;

export const Icon = styled.div`
  margin: auto;
  margin-top: 50px;

  img {
    border-radius: 50%;
  }
`;
