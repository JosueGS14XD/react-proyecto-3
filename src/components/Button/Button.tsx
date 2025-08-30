import styled from "styled-components";

type StyledProps = {
  blue?: boolean;
};

const StyledButton = styled.button<StyledProps>`
  background-color: ${({ blue }) => (blue ? "blue" : "gray")};
`;

const Button = ({ children, blue }: ButtonProps) => {
  return <StyledButton blue={blue}>{children}</StyledButton>;
};

export default Button;
