import { useRef, useState } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import styled from 'styled-components';

interface PropsType {
  onCrop: (image: string) => void;
  aspectRatio: number;
  children: React.ReactNode;
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

const Modal = styled.div`
  z-index: 2;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  padding: 20px 16px;
  margin: 0;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

const Content = styled(ContentWrapper)``;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 16px;
  background: #ffffff;
  column-gap: 12px;
`;

const Cancel = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  background: white;
`;

const Crop = styled(Cancel)`
  background: #7163e8;
  color: white;
  border: none;
`;

export default function ImageCropper({
  children,
  aspectRatio,
  onCrop,
}: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [image, setImage] = useState<null | string>(null);

  const handleChildrenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { files } = e.target;

    if (!files) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      onCrop(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      setImage(null);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <span onClick={handleChildrenClick}>{children}</span>
      {image && (
        <Container>
          <Backdrop />
          <Modal>
            <Title>이미지 편집하기</Title>
            <ContentWrapper>
              <Content>
                <Cropper
                  ref={cropperRef}
                  aspectRatio={aspectRatio}
                  src={image}
                  viewMode={1}
                  width={300}
                  height={200}
                  background={false}
                  responsive
                  autoCropArea={1}
                  checkOrientation={false}
                  guides
                />
              </Content>
            </ContentWrapper>
            <Footer>
              <Cancel type="button" onClick={() => setImage(null)}>
                취소
              </Cancel>
              <Crop type="button" className="crop" onClick={getCropData}>
                적용하기
              </Crop>
            </Footer>
          </Modal>
        </Container>
      )}
    </>
  );
}
