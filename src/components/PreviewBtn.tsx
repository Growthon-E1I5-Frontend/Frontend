// import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PreviewIcon } from '../assets/preview.svg';
import Preview from './Preview';

const Button = styled.button`
  /* display: inline-block;
  style={{ textAlign: 'center' }} */
  text-align: center;
  &:focus {
    border: none;
    outline: none;
  }
`;

function PreviewBtn() {
  // const [isOpen, setIsOpen] = useState(false);

  const goPreview = () => {
    // setIsOpen(true);
  };

  return (
    <div>
      <Button type="button" onClick={goPreview}>
        <PreviewIcon />
      </Button>
      <Preview />
    </div>
  );
}

export default PreviewBtn;
