import { useForm } from 'react-hook-form';
import Accordion from './common/Accordion';
import Input from './common/Input';

interface IEmailTab {
  email: string;
}

export default function EmailTab() {
  const {
    register,
    formState: { errors },
  } = useForm<IEmailTab>({ mode: 'onChange' });

  return (
    <Accordion title="이메일">
      <Input
        {...register('email', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]+$/,
            message: 'Invalidate Email',
          },
        })}
        placeholder="example@email.com"
        width={305}
        backgroundColor="#F3F3F3"
        border={errors.email?.message ? '1px solid #E86363' : 'none'}
      />
    </Accordion>
  );
}
