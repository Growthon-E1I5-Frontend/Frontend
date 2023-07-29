import styled from 'styled-components';
import Accordion from './Accordion';
import AttachImage from './AttachImage';

const Container = styled.div`
  display: flex;
`;

const LinkTitleInput = styled.input`
  width: 257px;
  height: 40px;
  background-color: #f3f3f3;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 12px;
`;

const LinkInput = styled(LinkTitleInput)`
  width: 305px;
`;

export default function LinkTab() {
  return (
    <Accordion title="링크">
      <div>
        <h4>대표 이미지</h4>
        <Container>
          <AttachImage width={40} height={40} IconWidth={28} IconHeight={28} />
          <LinkTitleInput placeholder="링크 제목" />
        </Container>
        <LinkInput type="url" placeholder="연결할 링크 주소" />
      </div>
    </Accordion>
  );
}
