import { useState } from 'react';

export default function useFileUpload() {
  const [imgData, setImgData] = useState<File>(); // 서버에 넘길 이미지 데이터(file)
  const [previewImg, setPreviewImg] = useState<null | string>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { files } = e.target;

    if (!files) return;

    setImgData(files[0]);

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImg(reader.result as string);
    };
    reader.readAsDataURL(files[0]);

    console.log(imgData);
  };

  return { imgData, previewImg, handleFileChange };
}
