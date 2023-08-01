import styled from 'styled-components';
import { ReactComponent as ProfileSwitchIcon } from '../assets/profile_switch.svg';
import { ReactComponent as Logo } from '../assets/preview_text.svg';
import Preview from './Preview';
import { IHandlePreview } from '../types/IHandlePreview';

const StickyTop = styled.header`
  width: 100%;
  font-size: 16px;
  letter-spacing: -0.02em;
  width: 393px;
  height: 60px;
  position: fixed;
  top: 0;
  height: 51px;
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

const ProfileSwitch = styled.button`
  &:focus {
    border: none;
    outline: none;
  }
`;

function Header({ onClick, isShow }: IHandlePreview) {
  return (
    <>
      {isShow && <Preview $isShow={isShow} />}
      <StickyTop>
        <Wrapper>
          <Logo style={{ cursor: 'pointer' }} />
          <HeaderLink>wity.im/user</HeaderLink>
        </Wrapper>
        <Wrapper>
          <PreviewBtn onClick={onClick}>미리보기</PreviewBtn>
          <ProfileSwitch>
            <ProfileSwitchIcon />
          </ProfileSwitch>
        </Wrapper>
      </StickyTop>
    </>
  );
}

export default Header;
