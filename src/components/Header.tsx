import styled from 'styled-components';
import { ReactComponent as ProfileSwitchIcon } from '../assets/profile_switch.svg';
import { ReactComponent as Logo } from '../assets/wity_color_text_logo 1.svg';

const StickyTop = styled.header`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  letter-spacing: -0.02em;
  width: 393px;
  height: 60px;
  top: 51px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const HeaderLink = styled.p`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

const PreviewBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96px;
  height: 36px;
  border-radius: 24px;
  font-weight: 600;
  color: #7163e8;
  background-color: #f3f2fd;
  &:focus {
    border: none;
    outline: none;
  }
`;

const ProfileSwitch = styled.button`
  &:focus {
    border: none;
    outline: none;
  }
`;

function Header() {
  return (
    <StickyTop>
      <Logo style={{ cursor: 'pointer' }} />
      <HeaderLink>wity.im/</HeaderLink>
      <HeaderLink>wityvity</HeaderLink>
      <PreviewBtn>미리보기</PreviewBtn>
      <ProfileSwitch>
        <ProfileSwitchIcon />
      </ProfileSwitch>
    </StickyTop>
  );
}

export default Header;
