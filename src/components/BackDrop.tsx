import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

const BackDrop: React.FC<BackdropProps> = ({ onClose }) => {
  // if (!isOpen) return null;

  return createPortal(
    <StyledBackDrop onClick={onClose} />,
    document.getElementById('backdrop-root') as HTMLElement
  );
};

export default BackDrop;
