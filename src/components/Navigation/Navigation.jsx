import { StyledLink, StyledNav } from './Navigation.styled';

export const Navigation = () => (
  <StyledNav>
    <StyledLink
      to="/"
      style={({ isActive }) => (isActive ? { color: '#5fbcff' } : undefined)}
    >
      Home
    </StyledLink>
    <StyledLink
      to="/movies"
      style={({ isActive }) => (isActive ? { color: '#5fbcff' } : undefined)}
    >
      Movies
    </StyledLink>
  </StyledNav>
);
