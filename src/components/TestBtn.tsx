import styled from 'styled-components';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  onClick: () => void;
}

const SelectButton = styled.button`
  background-color: #7163e8;
  width: 329px;
  height: 48px;
  top: 234px;
  left: 32px;
  padding: 12px 144px 12px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 10px;
`;

const TestBtn: React.FC<ButtonProps> = ({
  onClick,
  name,
  ...props
}: ButtonProps) => {
  return (
    <SelectButton onClick={onClick} {...props}>
      <Text>{name}</Text>
    </SelectButton>
  );
};

export default TestBtn;
