import styled from 'styled-components';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  marginTop: number;
  marginBottom: number;
  type: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<ButtonProps>`
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? '#cccdd0' : '#7163e8')};
  display: flex;
  width: 361px;
  padding: 12px 0px;
  justify-content: center;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const SubmitButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default SubmitButton;
