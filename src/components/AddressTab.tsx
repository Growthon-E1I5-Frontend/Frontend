import { useEffect } from 'react';
import useImageUploader from '../hooks/useImageUploader';
import Accordion from './Accordion';
import ImageCropper from './ImageCropper';
import AttachImage from './AttachImage';

export default function AddressTab() {
  const {
    uploadImage,
    compressedImage,
    handleUploadImage,
    handleCompressImage,
  } = useImageUploader();

  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <Accordion title="주소">
      <div>
        <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
          {compressedImage ? (
            <AttachImage
              width={40}
              height={40}
              imgSrc={compressedImage!}
              imgAlt="compressedImg"
            />
          ) : (
            <AttachImage width={40} height={40} />
          )}
        </ImageCropper>
        <input />
      </div>
      <input />
      <input />
    </Accordion>
  );
}
