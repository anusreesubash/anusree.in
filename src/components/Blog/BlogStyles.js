import styled from 'styled-components';


export const Card = styled.div`
  margin-inline: 25px;
  height: 8em;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 1em;
  /*margin: 2em;*/
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  text-align: left;

  p {
    font-size: 0.75em;
    margin-top: 0.5em;
    line-height: 2em;
  }
`;

export const Div1 = styled.div`
  color: gray;
  padding-right: 20px;
  text-align: end;
  font-size: smaller;
  width: 50%;
`;

export const Div2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  a {
    color: gray;
    font-size: medium;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`;
