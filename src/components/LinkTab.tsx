import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Accordion from './common/Accordion';
import AttachImage from './common/AttachImage';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';
import Input from '../styles/Input';

interface ILinkTabForm {
  title: string;
  url: string;
}

const Container = styled.div`
  display: flex;
`;

export default function LinkTab() {
  const {
    uploadImage,
    compressedImage,
    handleUploadImage,
    handleCompressImage,
  } = useImageUploader();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkTabForm>({ mode: 'onChange' });

  const onValid = ({ title, url }: ILinkTabForm) => {
    console.log(title, url);
  };

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <Accordion title="링크">
      <form onSubmit={handleSubmit(onValid)}>
        <Container>
          <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
            {compressedImage ? (
              <AttachImage
                width={40}
                height={40}
                imgSrc={compressedImage!}
                imgAlt="compressedImg"
              />
            ) : (
              <AttachImage width={40} height={40} />
            )}
          </ImageCropper>
          <Input
            {...register('title', { required: true })}
            placeholder="링크 제목"
            width={257}
            backgroundColor="#f3f3f3"
            border="none"
          />
        </Container>
        <Input
          {...register('url', {
            required: true,
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
    </Accordion>
  );
}
