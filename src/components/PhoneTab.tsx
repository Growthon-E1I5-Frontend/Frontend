import { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import AttachImage from './AttachImage';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';
import Input from './common/Input';

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
          placeholder="국가번호"
          width={257}
          backgroundColor="#F3F3F3"
          border="none"
        />
      </CountryWrapper>
      <Input
        placeholder="전화번호"
        width={305}
        backgroundColor="#F3F3F3"
        border="none"
      />
    </Accordion>
  );
}
