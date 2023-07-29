/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import AttachImage from './AttachImage';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';

const Container = styled.div`
  display: flex;
`;

const LinkTitleInput = styled.input`
  width: 257px;
  height: 40px;
  background-color: #f3f3f3;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 12px;
`;

const LinkInput = styled(LinkTitleInput)`
  width: 305px;
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
        <LinkTitleInput placeholder="링크 제목" />
      </Container>
      <LinkInput type="url" placeholder="연결할 링크 주소" />
    </Accordion>
  );
}
