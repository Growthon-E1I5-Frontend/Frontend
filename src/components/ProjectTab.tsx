import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import AttachImage from './common/AttachImage';
import Accordion from './common/Accordion';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';
import Input from './common/Input';
import Checked from '../assets/check.svg';
import NonChecked from '../assets/nonCheck.svg';
import {
  InPrograssState,
  InProgressCheckboxWrapper,
  InProgressLabel,
  ProjectPeriod,
  ProjectTerm,
  ProjectTermInput,
  To,
} from './common/ProjectPeriod';

interface IProjectTabForm {
  title: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  role: string;
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImgPreview = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  margin: 0 10px 6px 10px;
`;

const Loading = styled.p`
  margin: 0 10px;
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0;
`;

export default function ProjectTab() {
  const {
    register,
    formState: { errors },
  } = useForm<IProjectTabForm>({ mode: 'onChange' });
  const {
    uploadImage,
    compressedImage,
    isCompressLoading,
    handleUploadImage,
    handleCompressImage,
  } = useImageUploader();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  const handleCheck = () => setIsChecked((prev) => !prev);

  return (
    <Accordion title="대표 프로젝트">
      <Title>대표 이미지</Title>
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
      <form>
        <Title>프로젝트 설명</Title>
        <Input
          {...register('title', {
            required: true,
          })}
          placeholder="프로젝트명"
          width={305}
          backgroundColor="#fff"
          border="1px solid #F3F3F3"
        />
        <ProjectPeriod>
          <ProjectTerm
            border={
              errors.startYear?.message || errors.startMonth?.message
                ? '#E86363'
                : '#7163e8'
            }
          >
            <ProjectTermInput
              {...register('startYear', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="YYYY."
            />
            <ProjectTermInput
              {...register('startMonth', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="MM"
            />
          </ProjectTerm>
          <To>~</To>
          <ProjectTerm
            border={
              errors.endYear?.message || errors.endMonth?.message
                ? '#E86363'
                : '#7163e8'
            }
          >
            <ProjectTermInput
              {...register('endYear', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="YYYY."
            />
            <ProjectTermInput
              {...register('endMonth', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Numbers Only',
                },
              })}
              placeholder="MM"
            />
          </ProjectTerm>
          <InProgressCheckboxWrapper>
            {isChecked ? (
              <InPrograssState
                src={Checked}
                alt="checked"
                onClick={handleCheck}
              />
            ) : (
              <InPrograssState
                src={NonChecked}
                alt="nonChecked"
                onClick={handleCheck}
              />
            )}
            <InProgressLabel>진행 중</InProgressLabel>
          </InProgressCheckboxWrapper>
        </ProjectPeriod>
        <Input
          placeholder="담당 역할"
          width={305}
          backgroundColor="#fff"
          border="1px solid #f3f3f3"
          {...register('role', { required: true })}
        />
      </form>
    </Accordion>
  );
}
