import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Accordion from '../common/Accordion';
import AttachImage from '../common/AttachImage';
import Input from '../../styles/Input';
import DeleteTab from '../common/DeleteTab';
import useFileUpload from '../../hooks/useFileUpload';

interface ILinkTabForm {
  title: string;
  url: string;
}

const Container = styled.div`
  display: flex;
`;

export default function LinkTab() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkTabForm>({ mode: 'onChange' });
  const { imgData, previewImg, handleFileChange } = useFileUpload();

  const onValid = ({ title, url }: ILinkTabForm) => {
    console.log(imgData);
    console.log(title, url);
  };

  return (
    <Accordion title="링크">
      <form onBlur={handleSubmit(onValid)}>
        <Container>
          <label htmlFor="linkImg">
            {previewImg ? (
              <AttachImage
                width={40}
                height={40}
                imgSrc={previewImg as string}
                imgAlt="preview"
              />
            ) : (
              <AttachImage width={40} height={40} />
            )}
            <input
              onChange={handleFileChange}
              type="file"
              id="linkImg"
              accept="image/*"
              style={{ display: 'none' }}
            />
          </label>
          <Input
            {...register('title')}
            placeholder="링크 제목"
            width={257}
            backgroundColor="#f3f3f3"
            border="none"
          />
        </Container>
        <Input
          {...register('url', {
            pattern: {
              value: /^(https?:\/\/)?([\w-]+\.)+[\w]+(\/[\w-./?%&=]*)?$/,
              message: 'Wrong Pattern',
            },
          })}
          type="url"
          placeholder="연결할 링크 주소"
          width={305}
          backgroundColor="#f3f3f3"
          border={errors.url?.message ? '1px solid #E86363' : 'none'}
        />
      </form>
      <DeleteTab id="linkTab" />
    </Accordion>
  );
}
