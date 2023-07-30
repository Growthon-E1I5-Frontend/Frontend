import styled from 'styled-components';

interface InputProps {
  width?: number;
  backgroundColor?: string;
  border?: string;
}

const Input = styled.input<InputProps>`
  width: ${(props) => props.width}px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  outline: none;
  border: ${(props) => props.border};
  border-radius: 8px;
  font-size: 12px;
  &::placeholder {
    color: #9d9d9d;
  }
`;

export default Input;
