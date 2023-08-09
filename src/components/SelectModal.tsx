import styled, { keyframes } from 'styled-components';
import CategoryBtn from './common/CategoryBtn';

const PRIMARY = '#7163E8';

const EXTRA = '#F3F2FD';

const LIGHT_TEXT = '#FFF';

const DARK_TEXT = '#000';

interface IModal {
  onCloseModal: () => void;
  onAddTabs: (type: string, title: string) => void;
}

const popupAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Modal = styled.div`
  width: 393px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  animation: ${popupAnimation} 0.3s ease-in-out;
  padding: 30px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  z-index: 10;
`;

const Context = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const ContextTitle = styled.h1`
  margin-bottom: 10px;
`;

const AdditionalContext = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 15px 0;
`;

export default function SelectModal({ onCloseModal, onAddTabs }: IModal) {
  return (
    <Container>
      <Backdrop onClick={onCloseModal} />
      <Modal>
        <Context>
          <ContextTitle>어떤 탭을</ContextTitle>
          <ContextTitle>추가하고 싶으신가요?</ContextTitle>
        </Context>
        <div>
          <AdditionalContext>
            <span>⭐</span> 포트폴리오 구성 시 유용해요
          </AdditionalContext>
          <div>
            <CategoryBtn
              onClick={() => {
                onAddTabs('exp', '경험');
              }}
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              text="✍🏻 경력 (날짜 + 텍스트)"
            />
            <CategoryBtn
              onClick={() => {
                onAddTabs('skill', '스킬');
              }}
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              text="✍🏻 스킬 (막대 그래프 수치)"
            />
            <CategoryBtn
              onClick={() => {
                onAddTabs('project', '프로젝트');
              }}
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              text="✍🏻 프로젝트 (이미지 + 링크)"
            />
          </div>
        </div>
        <div>
          <AdditionalContext>
            <span>🌈</span> 그밖의 기능을 활용해보세요
          </AdditionalContext>
          <div>
            <CategoryBtn
              onClick={() => {
                onAddTabs('text', '텍스트');
              }}
              backgroundColor={EXTRA}
              textColor={DARK_TEXT}
              text="✍🏻 텍스트 (단순 제목 형태)"
            />
            <CategoryBtn
              onClick={() => {
                onAddTabs('link', '링크');
              }}
              backgroundColor={EXTRA}
              textColor={DARK_TEXT}
              text="🔗 링크 (URL로 이동 가능한 버튼)"
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
}
