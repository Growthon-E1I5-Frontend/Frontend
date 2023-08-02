import { useFieldArray, useForm } from 'react-hook-form';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import Accordion from './common/Accordion';
import Input from '../styles/Input';

interface FormData {
  skills: { skill: string; percent: number }[];
}

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

const SkillInputs = styled.div`
  display: flex;
  align-items: center;
`;

const Space = styled.div`
  width: 7px;
`;

const RemoveBtn = styled.button`
  color: #cccdd0;
`;

const defaultSkillValue = { skill: '', percent: 0 };

export default function SkillTab() {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      skills: [defaultSkillValue],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data.skills);
  });

  return (
    <Accordion title="스킬">
      <TitleWrapper>
        <h4>스킬</h4>
        <AddForm type="button" onClick={() => append(defaultSkillValue)}>
          <AiOutlinePlus />
        </AddForm>
      </TitleWrapper>
      <form onBlur={onSubmit}>
        {fields.map((item, index) => (
          <SkillInputs key={item.id}>
            <Input
              width={97}
              backgroundColor="#f3f3f3"
              border="none"
              placeholder="스킬명"
              {...register(`skills.${index}.skill`, { required: true })}
              defaultValue={item.skill}
            />
            <Space />
            <Input
              width={165}
              backgroundColor="#fff"
              border="1px solid #f3f3f3"
              placeholder="숙련도 OO%, 그래프로 나타나요"
              {...register(`skills.${index}.percent`, { required: true })}
              defaultValue={item.percent}
            />
            <RemoveBtn type="button" onClick={() => remove(index)}>
              <AiOutlineClose size="15" />
            </RemoveBtn>
          </SkillInputs>
        ))}
      </form>
    </Accordion>
  );
}
