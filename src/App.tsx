// import styled from 'styled-components';
import './App.css';
import ImageTab from './components/ImageTab';
import LinkTab from './components/LinkTab';
import PhoneTab from './components/PhoneTab';
import ProjectTab from './components/ProjectTab';

function App() {
  return (
    <>
      <ProjectTab />
      <ImageTab />
      <LinkTab />
      <PhoneTab />
    </>
  );
}

export default App;
