import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 700;
  font-size: 24px;

  :hover {
    color: #003d93;
  }

  color: ${props => {
    if (props.active) {
      return '#79aaff';
    }
  }};
`;

export const StyledNav = styled.nav`
  padding: 15px 20px;
  margin-bottom: 20px;

  border-bottom: 1px solid black;
`;
