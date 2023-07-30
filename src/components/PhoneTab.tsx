import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Accordion from './common/Accordion';
import AttachImage from './common/AttachImage';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';
import Input from './common/Input';

interface IPhoneTabForm {
  country: string;
  phone: number;
}

const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function PhoneTab() {
  const {
    uploadImage,
    compressedImage,
    handleUploadImage,
    handleCompressImage,
  } = useImageUploader();
  const {
    register,
    formState: { errors },
  } = useForm<IPhoneTabForm>({ mode: 'onChange' });

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <Accordion title="전화번호">
      <CountryWrapper>
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
          {...register('country', { required: true })}
          placeholder="국가번호"
          width={257}
          backgroundColor="#F3F3F3"
          border={errors.country?.message ? '1px solid #E86363' : 'none'}
        />
      </CountryWrapper>
      <Input
        {...register('phone', {
          required: true,
          pattern: { value: /^[0-9]+$/, message: 'Numbers Only' },
        })}
        placeholder="전화번호"
        width={305}
        backgroundColor="#F3F3F3"
        border={errors.phone?.message ? '1px solid #E86363' : 'none'}
      />
    </Accordion>
  );
}
