import { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import AttachImage from './common/AttachImage';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';
import Input from './common/Input';

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

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <Accordion title="링크">
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
          placeholder="링크 제목"
          width={257}
          backgroundColor="#f3f3f3"
          border="none"
        />
      </Container>
      <Input
        type="url"
        placeholder="연결할 링크 주소"
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
      />
    </Accordion>
  );
}
