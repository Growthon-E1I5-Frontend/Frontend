// import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import Accordion from '../common/Accordion';
import Input from '../../styles/Input';
import DeleteTab from '../common/DeleteTab';

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
`;

const AddForm = styled.button`
  font-size: 20px;
  color: #cccdd0;
`;

const SkillForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SkillInputs = styled.div`
  display: flex;
  align-items: center;
`;

const Space = styled.div`
  width: 7px;
`;

export default function SkillTab() {
  // const { register } = useForm<FormData>();

  return (
    <Accordion title="스킬">
      <TitleWrapper>
        <h4>스킬</h4>
        <AddForm type="button">
          <AiOutlinePlus />
        </AddForm>
      </TitleWrapper>
      <SkillForm>
        <SkillInputs>
          <Input
            width={97}
            backgroundColor="#f3f3f3"
            border="none"
            placeholder="스킬명"
          />
          <Space />
          <Input
            width={180}
            backgroundColor="#fff"
            border="1px solid #f3f3f3"
            placeholder="숙련도: 최대 100"
            // 숫자 외의 값이 들어갈 때 pattern의 message(에러 메시지)의 유무에 따라 border가 빨갛게 나오도록 설정했습니다.
            // {...register('percent', {
            //   required: true,
            //   pattern: {
            //     value: /^[0-9]+$/,
            //     message: 'Numbers Only',
            //   },
            // })}
          />
        </SkillInputs>
        <SkillInputs>
          <Input
            width={97}
            backgroundColor="#f3f3f3"
            border="none"
            placeholder="스킬명"
          />
          <Space />
          <Input
            width={180}
            backgroundColor="#fff"
            border="1px solid #f3f3f3"
            placeholder="숙련도: 최대 100"
            // {...register('percent', {
            //   required: true,
            //   pattern: {
            //     value: /^[0-9]+$/,
            //     message: 'Numbers Only',
            //   },
            // })}
          />
        </SkillInputs>
        <SkillInputs>
          <Input
            width={97}
            backgroundColor="#f3f3f3"
            border="none"
            placeholder="스킬명"
          />
          <Space />
          <Input
            width={180}
            backgroundColor="#fff"
            border="1px solid #f3f3f3"
            placeholder="숙련도: 최대 100"
            // {...register('percent', {
            //   required: true,
            //   pattern: {
            //     value: /^[0-9]+$/,
            //     message: 'Numbers Only',
            //   },
            // })}
          />
        </SkillInputs>
      </SkillForm>
      <DeleteTab id="skill" />
    </Accordion>
  );
}
