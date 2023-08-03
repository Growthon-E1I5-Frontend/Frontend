import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Accordion from '../common/Accordion';
import Input from '../common/Input';
import DeleteTab from '../common/DeleteTab';

interface ITextTab {
  text: string;
}

const Container = styled.div`
  position: relative;
`;

export default function TextTab() {
  const { register } = useForm<ITextTab>();

  return (
    <Accordion title="텍스트">
      <Container>
        <Input
          {...register('text')}
          placeholder="표시할 텍스트를 입력해주세요"
          width={305}
          backgroundColor="#f3f3f3"
          border="none"
        />
      </Container>
      <DeleteTab id="textTab" />
    </Accordion>
  );
}
