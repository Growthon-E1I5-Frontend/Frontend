import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CiUser } from 'react-icons/ci';
import { PiPaintBrushBroadLight } from 'react-icons/pi';
import { BsGraphDown } from 'react-icons/bs';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';
import PreviewIcon from '../assets/preview.svg';
import Preview from './Preview';
import { IHandlePreview } from '../types/IHandlePreview';
import Exit from './Exit';

interface IPathname {
  $isActive?: boolean;
}

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 393px;
  padding: 12px;
  border-top: 1px solid;
  border-top-color: #f3f3f3;
  background: #ffffff;
  z-index: 5;
`;

const ListTab = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.li<IPathname>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$isActive ? '#7163e8' : '#9d9d9d')};
  &:hover {
    color: #7163e8;
  }
`;

const TabTitle = styled.span`
  font-size: 10px;
  margin-top: 10px;
  font-weight: 600;
`;

const PreviewTab = styled.img`
  width: fit-content;
  position: absolute;
  bottom: 30px;
  cursor: pointer;
`;

const PreviewTitle = styled.span`
  position: absolute;
  bottom: 10px;
  font-size: 10px;
  color: #9d9d9d;
  font-weight: 600;
  &:hover {
    color: #7163e8;
  }
`;

function Navbar({ onClick, isShow }: IHandlePreview) {
  const { pathname } = useLocation();

  return (
    <>
      {isShow && <Preview $isShow={isShow} />}
      <Navigation>
        <ListTab>
          <Link to="/page">
            <Tab $isActive={pathname === '/page'}>
              <CiUser size="20" />
              <TabTitle>페이지</TabTitle>
            </Tab>
          </Link>
          <Tab $isActive={pathname === '/theme'}>
            <PiPaintBrushBroadLight size="20" />
            <TabTitle>테마</TabTitle>
          </Tab>
          <Tab onClick={onClick}>
            {isShow ? (
              <Exit />
            ) : (
              <>
                <PreviewTab src={PreviewIcon} alt="preview-img" />
                <PreviewTitle>미리보기</PreviewTitle>
              </>
            )}
          </Tab>
          <Tab $isActive={pathname === '/analytics'}>
            <BsGraphDown size="20" />
            <TabTitle>분석</TabTitle>
          </Tab>
          <Tab $isActive={pathname === '/setting'}>
            <IoEllipsisHorizontalOutline size="20" />
            <TabTitle>설정</TabTitle>
          </Tab>
        </ListTab>
      </Navigation>
    </>
  );
}

export default Navbar;
