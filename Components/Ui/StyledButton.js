import styled from "styled-components";
export const StyledButton = styled.button`
  background: ${(props) => (props.primary ? props.color : "white")};
  font-weight: bold;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;
