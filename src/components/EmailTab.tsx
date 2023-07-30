import { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './common/Accordion';
import AttachImage from './common/AttachImage';
import useImageUploader from '../hooks/useImageUploader';
import ImageCropper from './ImageCropper';
import Input from './common/Input';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function EmailTab() {
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
    <Accordion title="이메일">
      <Wrapper>
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
          placeholder="example@email.com"
          width={257}
          backgroundColor="#F3F3F3"
          border="none"
        />
      </Wrapper>
    </Accordion>
  );
}
