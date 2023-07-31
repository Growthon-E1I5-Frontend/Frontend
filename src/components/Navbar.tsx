import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Preview from './PreviewBtn';
import { ReactComponent as PageIcon } from '../assets/page.svg';
import { ReactComponent as ThemeIcon } from '../assets/theme.svg';
import { ReactComponent as AnalyticsIcon } from '../assets/analytics.svg';
import { ReactComponent as SettingIcon } from '../assets/setting.svg';

const Page = styled(PageIcon)`
  path {
    width: 20px;
    height: 20px;
  }
  &:hover {
    path {
      fill: #7163e8;
    }
  }
`;

const Theme = styled(ThemeIcon)`
  path {
    width: 14px;
    height: 20px;
  }
  &:hover {
    path {
      fill: #7163e8;
    }
  }
`;

const Analytics = styled(AnalyticsIcon)`
  path {
    width: 18px;
    height: 19px;
  }
  &:hover {
    path {
      fill: #7163e8;
    }
  }
`;

const Footer = styled.footer`
  font-family: 'Noto Sans KR', sans-serif;
  width: 393px;
  height: 60px;
  top: 792px;
  border-top: 1px solid;
  border-top-color: #f3f3f3;
  background: #ffffff;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  position: relative;
  top: 20px;
  color: #9d9d9d;
  font-size: 10px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #7163e8;
  }
`;

const StyledNav = styled(NavLink)`
  display: flex;
  flex-direction: column;
  color: #9d9d9d;
  font-size: 10px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  &.svg.hover {
    fill: #7163e8;
  }
  &:hover,
  &.active {
    color: #7163e8;
  }
`;

function Navbar() {
  return (
    <Footer>
      <Preview />
      <ul>
        <List>
          <StyledNav to="/page">
            <Page />
            <span>페이지</span>
          </StyledNav>
          <StyledNav to="/theme">
            <Theme />
            <span>테마</span>
          </StyledNav>
          <StyledSpan>미리보기</StyledSpan>
          <StyledNav to="/analytics">
            <Analytics />
            분석
          </StyledNav>
          <StyledNav to="/setting">
            <SettingIcon style={{ width: '18px', height: '20px' }} />
            설정
          </StyledNav>
        </List>
      </ul>
    </Footer>
  );
}

export default Navbar;
