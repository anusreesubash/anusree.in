import styled from 'styled-components';

export const Job = styled.div`
  align-items: center;
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "16px 24px" } ;
`;

export const Company = styled.p`
  
`;

export const Position = styled.p`
  padding: 5px;
  fontWeight: 600;
`;

export const Description = styled.p`
  
`;

export const Duration = styled.p`
  color: gray;
  padding: 5px;
`;
