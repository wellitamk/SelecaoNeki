import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Rodape = styled.footer`
  position: fixed;
  bottom: 0;
  margin: 0px auto;
  width: 100%;
  background-color: black;
  align-items: center;
`;
export const Icon=styled.nav`
margin-left: 20px;
`;
export const IconLink=styled(Link)`
  color: #fff;
  size: 20;
  padding: -20px;
`;
export const Telefone=styled.p`
  display: flex;
  justify-content: flex-end;  
  color: #fff;
  margin-right: 20px;
  `;
export const IconContainer=styled.div`
  display: flex;
  justify-content: flex-start;
`; 