import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import Accordion from './common/Accordion';
import Input from './common/Input';

interface IAddress {
  address: string;
  zonecode: string;
}

interface IAddressTabForm {
  detailAddress: string;
  zipcode: string;
}

const Container = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div`
  position: inherit;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export default function AddressTab() {
  const { register } = useForm<IAddressTabForm>();
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleComplete = ({ address, zonecode }: IAddress) => {
    setAddress(address);
    setZipcode(zonecode);
    setShowModal((curr) => !curr);
  };

  return (
    <>
      {showModal ? (
        <Container onClick={() => setShowModal((curr) => !curr)}>
          <Backdrop />
          <DaumPostcode
            style={{
              width: '350px',
              zIndex: '2',
              background: '#ffffff',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '8px',
            }}
            autoClose
            onComplete={handleComplete}
          />
        </Container>
      ) : null}
      <Accordion title="주소">
        <Input
          onFocus={() => setShowModal(true)}
          width={305}
          backgroundColor="#f3f3f3"
          border="none"
          placeholder="주소"
          defaultValue={address}
        />
        <Input
          {...register('detailAddress')}
          width={305}
          backgroundColor="#f3f3f3"
          border="none"
          placeholder="상세주소"
        />
        <Input
          {...register('zipcode')}
          width={305}
          backgroundColor="#f3f3f3"
          border="none"
          placeholder="우편번호"
          defaultValue={zipcode}
        />
      </Accordion>
    </>
  );
}
