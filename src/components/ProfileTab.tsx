import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './common/Input';
import Icon from '../assets/profile_icon.svg';
import Down from '../assets/downArrow.svg';
import Close from '../assets/upArrow.svg';
import ProfileChange from '../assets/profile_change.svg';
import ImageCropper from './ImageCropper';
import useImageUploader from '../hooks/useImageUploader';

interface IProfileTab {
  isOpen: boolean;
}

const Profile = styled.div`
  width: 361px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px 12px;
  margin: 8px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileIcon = styled.img`
  margin-right: 10px;
`;

const Title = styled.span``;

const ProfileInfo = styled.div<IProfileTab>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ImgPreview = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;

const Change = styled.img`
  cursor: pointer;
`;

export default function ProfileTab() {
  const [isOpen, setIsOpen] = useState(true);

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

  const handleDropDown = () => setIsOpen((curr) => !curr);

  return (
    <Profile>
      <TitleWrapper>
        <div>
          <ProfileIcon src={Icon} alt="profile" />
          <Title>프로필</Title>
        </div>
        <button type="button" onClick={handleDropDown}>
          <img src={isOpen ? Close : Down} alt="dropdown" />
        </button>
      </TitleWrapper>
      <ProfileInfo isOpen={isOpen}>
        <ProfileImg>
          <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
            {compressedImage ? (
              <ImgPreview src={compressedImage} alt="compressedImg" />
            ) : (
              <Change src={ProfileChange} alt="ProfileIcon" />
            )}
          </ImageCropper>
        </ProfileImg>
        <Input
          width={337}
          border="none"
          backgroundColor="#F3F3F3"
          placeholder="닉네임을 적어주세요"
        />
        <Input
          width={337}
          border="none"
          backgroundColor="#F3F3F3"
          placeholder="한줄로 나를 표현하기"
        />
      </ProfileInfo>
    </Profile>
  );
}
