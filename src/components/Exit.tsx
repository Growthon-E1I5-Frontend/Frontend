import { AiFillCloseCircle } from 'react-icons/ai';
import { styled } from 'styled-components';

const Close = styled.button`
  position: absolute;
  bottom: 20px;
  color: #7163e8;
`;

export default function Exit() {
  return (
    <Close>
      <AiFillCloseCircle size="52" />
    </Close>
  );
}
