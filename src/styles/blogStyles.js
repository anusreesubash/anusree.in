import styled from 'styled-components'

export const Content = styled.p`
  align-items: center;
  text-align: center;
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: absolute;
  position: relative;
  overflow: hidden;
`

export const BlogTitle = styled.h2`
  font-family: 'sans-serif';
  font-weight: 400;
  font-size: ${(props) => props.main ? '40px' : '25px'};
  line-height: ${(props) => props.main ? '50px' : '40px'};
  width: max-content;
  margin: auto;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 20px 10px' : '0'};
  border-bottom: 1px solid;
`;

export const BlogSubtitle = styled.h2`
  font-weight: 100;
  font-size: ${(props) => props.main ? '25px' : '20px'};
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 20px 10px' : '0'};
  border-bottom: 1px solid;
`;

