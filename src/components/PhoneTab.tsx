import { useForm } from 'react-hook-form';
import Accordion from './common/Accordion';
import Input from './common/Input';

interface IPhoneTabForm {
  country: string;
  phone: number;
}

export default function PhoneTab() {
  const {
    register,
    formState: { errors },
  } = useForm<IPhoneTabForm>({ mode: 'onChange' });

  return (
    <Accordion title="전화번호">
      <Input
        {...register('country', { required: true })}
        placeholder="국가번호 (+82)"
        width={305}
        backgroundColor="#F3F3F3"
        border={errors.country?.message ? '1px solid #E86363' : 'none'}
      />
      <Input
        {...register('phone', {
          required: true,
          pattern: { value: /^[0-9]+$/, message: 'Numbers Only' },
        })}
        placeholder="전화번호 (01012345678)"
        width={305}
        backgroundColor="#F3F3F3"
        border={errors.phone?.message ? '1px solid #E86363' : 'none'}
      />
    </Accordion>
  );
}
