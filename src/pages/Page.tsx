/* eslint-disable react/jsx-no-bind */
// import { useState } from 'react';
// import Modal from '../components/Modal';
import Preview from '../components/Preview';

function Page() {
  // const [isOpen, setIsOpen] = useState(false);

  // function handleOpenModal() {
  //   setIsOpen(true);
  // }

  // function handleCloseModal() {
  //   setIsOpen(false);
  // }

  return (
    <div>
      <h1>포트폴리오 페이지</h1>
      <Preview />
      {/* <Modal isOpen={isOpen} onClose={handleCloseModal} children={undefined} /> */}
    </div>
  );
}

export default Page;
