// import styled from 'styled-components';
import './App.css';
import AddressTab from './components/AddressTab';
import EmailTab from './components/EmailTab';
import LinkTab from './components/LinkTab';
import PhoneTab from './components/PhoneTab';
import ProjectTab from './components/ProjectTab';

function App() {
  return (
    <>
      <LinkTab />
      <ProjectTab />
      <PhoneTab />
      <EmailTab />
      <AddressTab />
    </>
  );
}

export default App;
