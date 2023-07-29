/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect } from 'react';
import styled from 'styled-components';
import AttachImage from './AttachImage';
import Accordion from './Accordion';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImgPreview = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  margin: 0 10px;
`;

const Loading = styled.p`
  margin: 0 10px;
`;

const Input = styled.input`
  width: 281px;
  height: 40px;
  background-color: #f3f3f3;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  &:last-child {
    background-color: #fff;
    border: 1px solid #f3f3f3;
  }
  &::placeholder {
    color: #9d9d9d;
  }
`;

const InProgress = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled(Input)`
  width: 88px;
  border: 1px solid #f3f3f3;
  background-color: #fff;
  &::placeholder {
    height: 24px;
    color: #9d9d9d;
  }
`;

const To = styled.span`
  font-weight: 600;
  color: #9d9d9d;
  margin: 0 5px;
`;

const InProgressCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InProgressCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid #f3f3f3;
  border-radius: 50%;
  accent-color: #7163e8;
`;

const InProgressLabel = styled.label`
  font-size: 12px;
  color: #9d9d9d;
`;

export default function ProjectTab() {
  const {
    uploadImage,
    compressedImage,
    isCompressLoading,
    handleUploadImage,
    handleCompressImage,
  } = useImageUploader();

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <Accordion title="대표 프로젝트">
      <h4>대표 이미지</h4>
      <ImageWrapper>
        <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
          <AttachImage width={96} height={96} />
        </ImageCropper>
        {compressedImage ? (
          <ImgPreview src={compressedImage} alt="compressedImg" />
        ) : (
          <Loading className="cover">
            {isCompressLoading ? 'Loading...' : ''}
          </Loading>
        )}
      </ImageWrapper>
      <div>
        <h4>프로젝트 설명</h4>
        <Input placeholder="프로젝트명" />
        <InProgress>
          <DateInput placeholder="YYYY.MM" />
          <To>~</To>
          <DateInput placeholder="YYYY.MM" />
          <InProgressCheckboxWrapper>
            <InProgressCheckbox type="checkbox" id="inProgress" />
            <InProgressLabel htmlFor="inProgress">진행 중</InProgressLabel>
          </InProgressCheckboxWrapper>
        </InProgress>
        <Input placeholder="담당 역할" />
      </div>
    </Accordion>
  );
}
