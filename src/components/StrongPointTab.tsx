import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Accordion from './common/Accordion';
import Input from './common/Input';
import Add from '../assets/plus.svg';

interface IStrongPointTab {
  text: string;
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AddBtn = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  margin-left: 4px;
  cursor: pointer;
`;

export default function StrongPointTab() {
  const { register } = useForm<IStrongPointTab>();

  return (
    <Accordion title="장점">
      <InputWrapper>
        <Input
          {...register('text')}
          width={273}
          border="none"
          backgroundColor="#f3f3f3"
          placeholder="장점을 입력해주세요"
        />
        <AddBtn>
          <img src={Add} alt="add" />
        </AddBtn>
      </InputWrapper>
    </Accordion>
  );
}
