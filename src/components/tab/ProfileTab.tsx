import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Input from '../../styles/Input';
import Icon from '../../assets/profile_icon.svg';
import Down from '../../assets/downArrow.svg';
import Close from '../../assets/upArrow.svg';
import ProfileChange from '../../assets/profile_change.svg';
import useFileUpload from '../../hooks/useFileUpload';

interface IProfileTab {
  isOpen: boolean;
}

interface IProfileForm {
  name: string;
  description: string;
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

const ProfileInfo = styled.form<IProfileTab>`
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
  object-fit: cover;
`;

const Change = styled.img`
  cursor: pointer;
`;

export default function ProfileTab() {
  const { register, handleSubmit } = useForm<IProfileForm>();
  const [isOpen, setIsOpen] = useState(true);
  const { imgData, previewImg, handleFileChange } = useFileUpload();

  const handleDropDown = () => setIsOpen((curr) => !curr);

  const onValid = ({ name, description }: IProfileForm) => {
    // 서버에 이미지, 닉네임, 나를 설명하는 한줄 저장하는 로직
    console.log(imgData);
    console.log(name);
    console.log(description);
  };

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
      <ProfileInfo isOpen={isOpen} onBlur={handleSubmit(onValid)}>
        <ProfileImg>
          <label htmlFor="profile">
            {previewImg ? (
              <ImgPreview src={previewImg} alt="preview" />
            ) : (
              <Change src={ProfileChange} alt="ProfileIcon" />
            )}
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            id="profile"
            accept="image/*"
            style={{ display: 'none' }}
          />
        </ProfileImg>
        <Input
          {...register('name')}
          width={337}
          border="none"
          backgroundColor="#F3F3F3"
          placeholder="닉네임을 적어주세요"
        />
        <Input
          {...register('description')}
          width={337}
          border="none"
          backgroundColor="#F3F3F3"
          placeholder="한줄로 나를 표현하기"
        />
      </ProfileInfo>
    </Profile>
  );
}
