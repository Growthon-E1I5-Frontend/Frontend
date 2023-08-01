import styled, { keyframes } from 'styled-components';
import CategoryBtn from './common/CategoryBtn';

type ComponentType =
  | 'experience'
  | 'skill'
  | 'strength'
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

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 111px);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Modal = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #fff;
  animation: ${popupAnimation} 0.3s ease-out;
  padding: 30px;
  z-index: 10;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
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
    <>
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
              onClick={() => onClickOption('experience')}
              text="경력"
            />
            <CategoryBtn
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('skill')}
              text="스킬"
            />
            <CategoryBtn
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('strength')}
              text="장점"
            />
            <CategoryBtn
              backgroundColor={PRIMARY}
              textColor={LIGHT_TEXT}
              onClick={() => onClickOption('project')}
              text="프로젝트"
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
              text="텍스트"
            />
            <CategoryBtn
              backgroundColor={EXTRA}
              textColor={DARK_TEXT}
              onClick={() => onClickOption('link')}
              text="링크"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
