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

const InProgress = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const ProjectTerm = styled.div`
  display: flex;
  width: 108px;
  border: 1px solid #f3f3f3;
  padding: 8px 16px;
  border-radius: 8px;
  &:focus-within {
    border: 1px solid #7163e8;
  }
`;

const InProgressInput = styled.input`
  width: 35px;
  outline: none;
  border: none;
  font-size: 12px;
`;

const BreakPoint = styled.span`
  padding-bottom: 5px;
  color: #9d9d9d;
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

const InPrograssState = styled.img`
  margin: 0 5px;
`;

const InProgressLabel = styled.span`
  font-size: 12px;
  color: #9d9d9d;
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
      <form>
        <h4>프로젝트 설명</h4>
        <Input
          {...register('title', {
            required: true,
          })}
          placeholder="프로젝트명"
          width={305}
          backgroundColor="#f3f3f3"
          border={errors.title?.message ? '1px solid #E86363' : 'none'}
        />
        <InProgress>
          <ProjectTerm>
            <InProgressInput {...register('startYear')} placeholder="YYYY" />
            <BreakPoint>.</BreakPoint>
            <InProgressInput {...register('startMonth')} placeholder="MM" />
          </ProjectTerm>
          <To>~</To>
          <ProjectTerm>
            <InProgressInput {...register('endYear')} placeholder="YYYY" />
            <BreakPoint>.</BreakPoint>
            <InProgressInput {...register('endMonth')} placeholder="MM" />
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
        </InProgress>
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
