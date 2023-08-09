import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Accordion from '../common/Accordion';
import Input from '../../styles/Input';
import {
  ProjectPeriod,
  ProjectTerm,
  ProjectTermInput,
  To,
  InProgressCheckboxWrapper,
  InPrograssState,
  InProgressLabel,
} from '../../styles/ProjectPeriod';
import Checked from '../../assets/check.svg';
import NonChecked from '../../assets/nonCheck.svg';
import Add from '../../assets/plus.svg';
import DeleteTab from '../common/DeleteTab';

interface IExperienceTabForm {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}

const Career = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const DetailTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0;
`;

const AddCareerBtn = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
`;

const Performance = styled.div``;

export default function ExperienceTab() {
  const {
    register,
    formState: { errors },
  } = useForm<IExperienceTabForm>({ mode: 'onChange' });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => setIsChecked((prev) => !prev);

  return (
    <Accordion title="경험">
      <Career>
        <Title>
          <DetailTitle>경력</DetailTitle>
          <AddCareerBtn type="button">
            <img src={Add} alt="add" />
          </AddCareerBtn>
        </Title>
        <Input
          width={305}
          border="1px solid #f3f3f3"
          placeholder="회사 / 프로젝트명"
        />
        <Input
          width={148}
          border="1px solid #f3f3f3"
          placeholder="부서명 / 직책"
          style={{ marginRight: '8px' }}
        />
        <Input width={148} border="1px solid #f3f3f3" placeholder="담당업무" />
        <ProjectPeriod>
          <ProjectTerm
            border={
              errors.startYear?.message || errors.startMonth?.message
                ? '#E86363'
                : '#7163e8'
            }
          >
            <ProjectTermInput
              {...register('startYear', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="YYYY."
            />
            <ProjectTermInput
              {...register('startMonth', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="MM"
            />
          </ProjectTerm>
          <To>~</To>
          <ProjectTerm
            border={
              errors.endYear?.message || errors.endMonth?.message
                ? '#E86363'
                : '#7163e8'
            }
          >
            <ProjectTermInput
              {...register('endYear', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="YYYY."
              disabled={!!isChecked}
            />
            <ProjectTermInput
              {...register('endMonth', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="MM"
              disabled={!!isChecked}
            />
          </ProjectTerm>
          <InProgressCheckboxWrapper>
            {isChecked ? (
              <InPrograssState
                src={Checked}
                alt="checked"
                onClick={handleCheck}
              />
            ) : (
              <InPrograssState
                src={NonChecked}
                alt="nonChecked"
                onClick={handleCheck}
              />
            )}
            <InProgressLabel>재직 중</InProgressLabel>
          </InProgressCheckboxWrapper>
        </ProjectPeriod>
      </Career>
      <Performance>
        <Title>
          <DetailTitle>성과</DetailTitle>
          <AddCareerBtn>
            <img src={Add} alt="add" />
          </AddCareerBtn>
        </Title>
        <Input
          width={305}
          border="1px solid #f3f3f3"
          placeholder="프로젝트 / 성과"
        />
        <Input
          width={305}
          border="1px solid #f3f3f3"
          placeholder="관련 경험, 성과 등을 요약하여 입력해주세요."
        />
      </Performance>
      <DeleteTab id="exp" />
    </Accordion>
  );
}
