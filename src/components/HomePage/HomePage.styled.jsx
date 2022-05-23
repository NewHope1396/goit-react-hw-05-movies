import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 32px;
  color: #003d93;
  margin: 15px;
`;

export const List = styled.ol`
  padding: 20px 15px;
  margin: 0;
  margin-left: 15px;
`;

export const ListItem = styled.li`
  padding: 5px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #79aaff;
  }
`;
