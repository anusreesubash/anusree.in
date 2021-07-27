import styled from 'styled-components'

export const Section = styled.section`
  align-items: center;
  text-align: center;
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0px" } ;
  padding-bottom: 100px;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    flex-direction: column;
  }
`

export const SubSection = styled.section`
  align-items: center;
  text-align: center;
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "16px 24px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 12px 24px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: ${(props) => props.main ? '40px' : '28px'};
  line-height: ${(props) => props.main ? '50px' : '40px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 20px 10px' : '0'};
  border-bottom: ${(props) => props.main ? null : '1px solid'};
`;

export const SectionSubtitle = styled.h2`
  font-weight: 100;
  font-size: ${(props) => props.main ? '30px' : '25px'};
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '10px 20px 20px' : '0'};
  border-bottom: 1px solid;
`;

export const Title = styled.h2`
  font-weight: 200;
  font-size: 25px;
  width: max-content;
  max-width: 100%;
  margin-bottom: 10px;
  padding: ${(props) => props.main ? '26px 10px 5px' : '0'};
`;

