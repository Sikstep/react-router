import styled from 'styled-components';

export const NavWarper = styled.div`
margin-left: 10px;
  font-size: 20px;
  
  & > a {
    text-decoration: none;
    color: #1e3786;
  }
  
  & > a.active {
    text-decoration: underline;
    font-weight: bold;
    color: #03eaff;
  }
  
  & > a:hover {
    color: steelblue; /*Цвет ссылки*/
  }
`