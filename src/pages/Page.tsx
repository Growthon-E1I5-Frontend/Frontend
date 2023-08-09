/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import styled from 'styled-components';
import SelectModal from '../components/SelectModal';
import ExperienceTab from '../components/tab/ExperienceTab';
import SkillTab from '../components/tab/SkillTab';
import AdvantageTab from '../components/tab/AdvantageTab';
import LinkTab from '../components/tab/LinkTab';
import ProfileTab from '../components/tab/ProfileTab';
import ProjectTab from '../components/tab/ProjectTab';
import TextTab from '../components/tab/TextTab';

type ComponentType =
  | 'exp'
  | 'skill'
  | 'advantage'
  | 'project'
  | 'text'
  | 'link';

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
  const [selectedComponents, setSelectedComponents] = useState<ComponentType[]>(
    []
  );
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleClickOption = (component: ComponentType) => {
    setSelectedComponents((prevSelectedComponents) => [
      component,
      ...prevSelectedComponents,
    ]);
    setShowModal(false);
  };

  const renderSelectedComponent = (componentType: ComponentType) => {
    switch (componentType) {
      case 'exp':
        return <ExperienceTab />;
      case 'skill':
        return <SkillTab />;
      case 'advantage':
        return <AdvantageTab />;
      case 'project':
        return <ProjectTab />;
      case 'text':
        return <TextTab />;
      case 'link':
        return <LinkTab />;
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <ProfileTab />
      <AddTabButton onClick={handleButtonClick}>+ 탭 추가</AddTabButton>
      {showModal ? (
        <SelectModal
          onCloseModal={handleButtonClick}
          onClickOption={handleClickOption}
        />
      ) : null}
      {selectedComponents && (
        <div>
          {selectedComponents.map((selectedComponent, index) => (
            <MyCategory key={index}>
              {renderSelectedComponent(selectedComponent)}
            </MyCategory>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}

export default Page;
