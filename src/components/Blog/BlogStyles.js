import styled from 'styled-components';


export const Card = styled.div`
  padding-top: 50px;
  margin-top: 100px;
  margin-inline: 25px;
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-img);
  height: 12em;
  width: 10em;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 1em;
  /*margin: 2em;*/
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 2em -1em black;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  text-decoration: none;
  text-align: left;

  p {
    font-size: 0.75em;
    margin-top: 0.5em;
    line-height: 2em;
  }

  a {
    color: gray;
  }
`;
