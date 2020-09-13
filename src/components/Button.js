import styled from "styled-components";

export const Button = styled.button`
  padding: 0.3rem;
  text-transform: capitalize;
  color: ${props => props.cart ? "var(--mainDark)" : "var(--mainYellow)" };
  font-size: 1rem;
  background: ${props => props.cart ? "var(--mainYellow)" : "transparent" };
  border: 0.05rem solid var(--mainYellow);
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.cart ? "transparent" : "var(--mainYellow)" };
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--mainDark)" };
  }
  &:focus {
    outline: none;
  }
`;

// Style components exporting Button component with style now you can import this button all-over the page
// I made props called "cart" and then use it with cart button in the detail page just passing the name "cart" 
//inside the cart tag in the detail page