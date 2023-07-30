import { useEffect } from 'react';
import styled from 'styled-components';
import useImageUploader from '../hooks/useImageUploader';
import Accordion from './Accordion';
import ImageCropper from './ImageCropper';
import AttachImage from './common/AttachImage';
import Input from './common/Input';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function AddressTab() {
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
    <Accordion title="주소">
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
          width={257}
          backgroundColor="#f3f3f3"
          border="none"
          placeholder="주소"
        />
      </Wrapper>
      <Input
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
        placeholder="상세주소"
      />
      <Input
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
        placeholder="우편번호"
      />
    </Accordion>
  );
}
