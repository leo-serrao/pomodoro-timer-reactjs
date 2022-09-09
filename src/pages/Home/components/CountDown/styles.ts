import styled from "styled-components";

export const CountDownContainer = styled.div`
  font-family: "Roboto Mono", sans-serif;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  width: 100%;

  display: flex;
  gap: 2rem;

  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
    font-weight: bold;
  }
`;

export const Separator = styled.div`
  padding: 1.5rem;
  margin-left: -0.5rem;
  color: ${(props) => props.theme["green-500"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
