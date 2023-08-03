/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import Accordion from '../common/Accordion';
import Input from '../../styles/Input';
import Add from '../../assets/plus.svg';
import DeleteTab from '../common/DeleteTab';

interface IAdvantageTab {
  id: string;
  text: string;
}

const InputWrapper = styled.form`
  position: relative;
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

const AdvantageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`;

const Advantage = styled.div`
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

const DeleteAdvantageBtn = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

export default function AdvantageTab() {
  const { register, handleSubmit, reset } = useForm<IAdvantageTab>();
  const [advantage, setAdvantage] = useState<string[]>([]);

  const onValid = ({ text }: IAdvantageTab) => {
    setAdvantage((data) => [...data, text]);
    reset();
  };

  const onDelete = (index: number) => {
    setAdvantage((prev) => prev.filter((_, i) => i !== index));
  };

  console.log(advantage);

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
      <AdvantageWrapper>
        {advantage.map((item, index) => (
          <Advantage key={index}>
            <span>{item}</span>
            <DeleteAdvantageBtn onClick={() => onDelete(index)}>
              <AiOutlineClose />
            </DeleteAdvantageBtn>
          </Advantage>
        ))}
      </AdvantageWrapper>
      <DeleteTab id="advantageTab" />
    </Accordion>
  );
}
