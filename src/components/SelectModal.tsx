import styled, { keyframes } from 'styled-components';
import CategoryBtn from './common/CategoryBtn';

type ComponentType =
  | 'exp'
  | 'skill'
  | 'advantage'
  | 'project'
  | 'text'
  | 'link';

const PRIMARY = '#7163E8';

const EXTRA = '#F3F2FD';

const LIGHT_TEXT = '#FFF';

const DARK_TEXT = '#000';

interface IModal {
  onClickOption: (component: ComponentType) => void;
  onCloseModal: () => void;
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

export default function SelectModal({ onClickOption, onCloseModal }: IModal) {
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
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('exp')}
              text="✍🏻 경력 (날짜 + 텍스트)"
            />
            <CategoryBtn
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('skill')}
              text="✍🏻 스킬 (막대 그래프 수치)"
            />
            <CategoryBtn
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('advantage')}
              text="✍🏻 장점 (텍스트)"
            />
            <CategoryBtn
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('project')}
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
              backgroundColor={EXTRA}
              textColor={DARK_TEXT}
              onClick={() => onClickOption('text')}
              text="✍🏻 텍스트 (단순 제목 형태)"
            />
            <CategoryBtn
              backgroundColor={EXTRA}
              textColor={DARK_TEXT}
              onClick={() => onClickOption('link')}
              text="🔗 링크 (URL로 이동 가능한 버튼)"
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
}
