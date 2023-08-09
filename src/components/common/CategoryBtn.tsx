import styled from 'styled-components';

interface ICategoryBtn {
  onClick?: () => void;
  backgroundColor: string;
  text: string;
  textColor: string;
}

const Button = styled.button<ICategoryBtn>`
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  text-align: start;
`;

export default function CategoryBtn({
  onClick,
  backgroundColor,
  text,
  textColor,
}: ICategoryBtn) {
  return (
    <Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      text={text}
      textColor={textColor}
    >
      {text}
    </Button>
  );
}
