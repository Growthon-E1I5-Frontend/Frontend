import { useForm } from 'react-hook-form';
import Accordion from './common/Accordion';
import Input from '../styles/Input';

interface ITextTab {
  text: string;
}

export default function TextTab() {
  const { register } = useForm<ITextTab>();

  return (
    <Accordion title="텍스트">
      <Input
        {...register('text')}
        placeholder="표시할 텍스트를 입력해주세요"
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
      />
    </Accordion>
  );
}
