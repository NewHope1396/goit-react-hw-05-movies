import styled from '@emotion/styled';

export const MovieContainer = styled.div`
  display: flex;
`;

export const GoBackButton = styled.button`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: #9c9d9d;
  height: 30px;
  cursor: pointer;
  :hover {
    background-color: #076dc183;
  }
`;

export const Description = styled.div`
  margin-left: 20px;
`;

export const ButtonImage = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url('https://cdn-icons-png.flaticon.com/128/725/725004.png');
  background-position: center;
  background-size: cover;
  margin-right: 5px;
`;
