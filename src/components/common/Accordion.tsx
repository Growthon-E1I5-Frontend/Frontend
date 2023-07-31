import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Drag from '../../assets/drag.svg';
import Icon from '../../assets/toolIcon.svg';
import Open from '../../assets/downArrow.svg';
import Close from '../../assets/upArrow.svg';
import Options from './Options';

interface ITitle {
  title: string;
}

interface IStyledProps {
  isOpen: boolean;
}

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 361px;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ContentsSummary = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const ContentsTitleWrapper = styled.div``;

const ContentsTitle = styled.span`
  font-weight: 600;
`;

const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  outline: none;
  background-color: inherit;
`;

const ChildrenContents = styled.div<IStyledProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px 0 40px;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
`;

export default function Accordion({
  title,
  children,
}: ITitle & { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen((curr) => !curr);

  return (
    <Contents>
      <ContentsSummary>
        <ContentsTitleWrapper>
          <Img src={Drag} alt="drag" />
          <Img src={Icon} alt="icon" />
          <ContentsTitle>{title}</ContentsTitle>
        </ContentsTitleWrapper>
        <DropDownButton type="button" onClick={toggleOpen}>
          <Img src={isOpen ? Close : Open} alt="open" />
        </DropDownButton>
      </ContentsSummary>
      <ChildrenContents isOpen={isOpen}>
        {children}
        <Options />
      </ChildrenContents>
    </Contents>
  );
}
