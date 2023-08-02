/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import Accordion from './common/Accordion';
import Input from '../styles/Input';
import Add from '../assets/plus.svg';

interface IStrengthTab {
  id: string;
  text: string;
}

const InputWrapper = styled.form`
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

const StrengthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`;

const Strength = styled.div`
  display: flex;
  width: fit-content;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 1px solid #7163e8;
  background-color: #f3f2fd;
  color: #7163e8;
  border-radius: 8px;
`;

const Delete = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

export default function StrengthTab() {
  const { register, handleSubmit, reset } = useForm<IStrengthTab>();
  const [strength, setStrength] = useState<string[]>([]);

  const onValid = ({ text }: IStrengthTab) => {
    setStrength((data) => [...data, text]);
    reset();
  };

  const onDelete = () => {};

  return (
    <Accordion title="장점">
      <InputWrapper onSubmit={handleSubmit(onValid)}>
        <Input
          {...register('text', { required: true })}
          width={273}
          border="none"
          backgroundColor="#f3f3f3"
          placeholder="장점을 입력해주세요"
        />
        <AddBtn>
          <img src={Add} alt="add" />
        </AddBtn>
      </InputWrapper>
      <StrengthWrapper>
        {strength.map((item, index) => (
          <Strength key={index}>
            <span>{item}</span>
            <Delete onClick={onDelete}>
              <AiOutlineClose />
            </Delete>
          </Strength>
        ))}
      </StrengthWrapper>
    </Accordion>
  );
}
