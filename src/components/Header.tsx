import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileSwitchIcon from '../assets/profile_switch.svg';
import LandingLogo from '../assets/landingLogo.svg';
import Logo from '../assets/preview_text.svg';
import Preview from './Preview';
import { IHandlePreview } from '../types/IHandlePreview';

const StickyTop = styled.header`
  font-size: 16px;
  letter-spacing: -0.02em;
  width: 393px;
  height: 60px;
  position: fixed;
  top: 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.p`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 15px;
`;

const PreviewBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
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

const SocialBtn = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  height: 40px;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans';
  font-weight: 600;
  letter-spacing: -1px;
  color: #ffffff;
  background-color: #7163e8;
`;

const ProfileSwitch = styled.button`
  &:focus {
    border: none;
    outline: none;
  }
`;

function Header({ onClick, isShow }: IHandlePreview) {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      {isShow && <Preview $isShow={isShow} />}
      <StickyTop>
        <Wrapper>
          {isLanding ? (
            <img src={LandingLogo} alt="logo" />
          ) : (
            <img src={Logo} alt="logo" />
          )}
          {!isLanding && <HeaderLink>wity.im/user</HeaderLink>}
        </Wrapper>
        <Wrapper>
          {isLanding ? (
            <SocialBtn>30초 안에 시작하기</SocialBtn>
          ) : (
            <>
              <PreviewBtn onClick={onClick}>미리보기</PreviewBtn>
              <ProfileSwitch>
                <img src={ProfileSwitchIcon} alt="profile" />
              </ProfileSwitch>
            </>
          )}
        </Wrapper>
      </StickyTop>
    </>
  );
}

export default Header;
