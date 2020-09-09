import styled from "styled-components";

// Style components exporting Button component with style now you can import this button all-over the page
export const Button = styled.button`
  padding: 0.3rem;
  text-transform: capitalize;
  color: var(--mainYellow);
  font-size: 1rem;
  background: transparent;
  border: 0.05rem solid var(--mainYellow);
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: var(--mainYellow);
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
