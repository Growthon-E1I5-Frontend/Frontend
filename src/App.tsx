// import styled from 'styled-components';
import './App.css';
import AddressTab from './components/AddressTab';
import EmailTab from './components/EmailTab';
import ImageTab from './components/ImageTab';
import LinkTab from './components/LinkTab';
import PhoneTab from './components/PhoneTab';
import ProjectTab from './components/ProjectTab';
import TextTab from './components/TextTab';

function App() {
  return (
    <>
      <TextTab />
      <ProjectTab />
      <ImageTab />
      <LinkTab />
      <AddressTab />
      <PhoneTab />
      <EmailTab />
    </>
  );
}

export default App;
