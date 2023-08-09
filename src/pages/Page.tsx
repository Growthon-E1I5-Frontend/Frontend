/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import styled from 'styled-components';
import ProfileTab from '../components/tab/ProfileTab';
import SelectModal from '../components/SelectModal';
import ExperienceTab from '../components/tab/ExperienceTab';
import SkillTab from '../components/tab/SkillTab';
import ProjectTab from '../components/tab/ProjectTab';
import TextTab from '../components/tab/TextTab';
import LinkTab from '../components/tab/LinkTab';

const PageWrapper = styled.section``;

const AddTabButton = styled.button`
  width: 361px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background-color: #7163e8;
  border-radius: 8px;
  color: #fff;
`;

const MyCategory = styled.div`
  margin-top: 10px;
`;

function Page() {
  const [modal, setModal] = useState(false);
  const [tabs, setTabs] = useState<any[]>([]);

  const handleModal = () => setModal(!modal);

  // const onAddTabs = () => {}; // 탭 추가 시 해당 탭에 대한 정보 저장
  const onAddTabs = (type: string, title: string) => {
    setTabs((prev) => {
      const newTabs = [{ type, title, info: {} }, ...prev];
      // const sendDataToServer = async () => {
      //   const formData = new FormData();
      //   formData.append('tabs', JSON.stringify(newTabs));
      //   await profiles(formData);
      // };
      // sendDataToServer();

      return newTabs;
    });

    setModal(!modal);
  };

  return (
    <PageWrapper>
      <ProfileTab />
      <AddTabButton onClick={handleModal}>+ 탭 추가</AddTabButton>
      {modal && (
        <SelectModal onCloseModal={handleModal} onAddTabs={onAddTabs} />
      )}
      <MyCategory>
        {tabs.map((tab, index) => {
          switch (tab.type) {
            case 'exp':
              return <ExperienceTab key={index} />;
            case 'skill':
              return <SkillTab key={index} />;
            case 'project':
              return <ProjectTab key={index} />;
            case 'text':
              return <TextTab key={index} />;
            case 'link':
              return <LinkTab key={index} />;
            default:
              return null;
          }
        })}
      </MyCategory>
    </PageWrapper>
  );
}

export default Page;
