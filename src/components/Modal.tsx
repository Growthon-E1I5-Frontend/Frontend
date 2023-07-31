import { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import BackDrop from './BackDrop';
import TestBtn from './TestBtn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
  height: 1017px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px, 24px, 0px, 0px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    setModalOpen(false);
    onClose();
  };

  const onClickBackDrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return ReactDOM.createPortal(
    isOpen ? (
      <>
        <ModalOverlay isOpen={modalOpen} onClick={onClickBackDrop}>
          <TestBtn name="selected tab" onClick={handleCloseModal}>
            {children}
          </TestBtn>
        </ModalOverlay>
        <BackDrop isOpen={modalOpen} onClose={handleCloseModal} />
      </>
    ) : null,
    document.getElementById('overlay-root') as HTMLElement
  );
};

export default Modal;
