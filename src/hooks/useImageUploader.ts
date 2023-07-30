import { useState } from 'react';
import useImageCompress from './useImageCompress';
import { dataURItoFile } from '../utils/common';

const useImageUploader = () => {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const { isLoading: isCompressLoading, compressImage } = useImageCompress();

  const handleUploadImage = (image: string) => setUploadImage(image);

  const handleCompressImage = async () => {
    if (!uploadImage) return;

    const imageFile = dataURItoFile(uploadImage);

    const compressedImage = await compressImage(imageFile);

    if (!compressedImage) return;

    const imageUrl = URL.createObjectURL(compressedImage);

    setCompressedImage(imageUrl);
  };

  return {
    uploadImage,
    compressedImage,
    isCompressLoading,
    handleUploadImage,
    handleCompressImage,
  };
};

export default useImageUploader;
