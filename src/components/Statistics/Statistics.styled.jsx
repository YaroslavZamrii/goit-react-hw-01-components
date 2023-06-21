import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  background-color: #ffffffbd;
  padding: 10px 0 10px 0;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  border-radius: 0 0 10px 10px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  height: 50px;
  padding-top: 5px;
  :nth-of-type(1) {
    background-color: #ff0000ab;
  }

  :nth-of-type(2) {
    background-color: #0000ffa1;
  }

  :nth-of-type(3) {
    background-color: #008000ba;
  }

  :nth-of-type(4) {
    background-color: #ffa500ad;
  }

  :nth-of-type(5) {
    background-color: #800080bd;
  }
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const Percentage = styled.span`
  font-size: 16px;
`;
