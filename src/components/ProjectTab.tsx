import styled from 'styled-components';
import AttachImage from './AttachImage';
import Accordion from './Accordion';

const Input = styled.input`
  width: 281px;
  height: 40px;
  background-color: #f3f3f3;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  &:last-child {
    background-color: #fff;
    border: 1px solid #f3f3f3;
  }
  &::placeholder {
    color: #9d9d9d;
  }
`;

const InProgress = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  width: 88px;
  height: 40px;
  padding: 8px 16px;
  outline: none;
  border: 1px solid #f3f3f3;
  border-radius: 8px;
  font-size: 12px;
  &::placeholder {
    height: 24px;
    color: #9d9d9d;
  }
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

const InProgressCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid #f3f3f3;
  border-radius: 50%;
  accent-color: #7163e8;
`;

const InProgressLabel = styled.label`
  font-size: 12px;
  color: #9d9d9d;
`;

export default function ProjectTab() {
  return (
    <Accordion title="대표 프로젝트">
      <div>
        <h4>대표 이미지</h4>
        <AttachImage width={96} height={96} />
      </div>
      <div>
        <h4>프로젝트 설명</h4>
        <Input placeholder="프로젝트명" />
        <InProgress>
          <DateInput placeholder="YYYYMM" />
          <To>~</To>
          <DateInput placeholder="YYYYMM" />
          <InProgressCheckboxWrapper>
            <InProgressCheckbox type="checkbox" id="inProgress" />
            <InProgressLabel htmlFor="inProgress">진행 중</InProgressLabel>
          </InProgressCheckboxWrapper>
        </InProgress>
        <Input placeholder="담당 역할" />
      </div>
    </Accordion>
  );
}
