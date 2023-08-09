import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 393px;
  height: 100vh;
  position: relative;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  transform: translateZ(-50%);
  align-items: center;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 24px;
  padding: 8px;
  border: none;
  border-radius: 8px;
`;

const InfoFieldset = styled.fieldset`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  padding: 16px 24px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #ffffff;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 12px;
  color: #262626;
  letter-spacing: -0.24px;
`;

const UserURL = styled.div`
  display: inline-flex;
`;

const WityURL = styled.div`
  margin-top: 8px;
  margin-bottom: 6px;
  padding: 8px 0px 8px 16px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #f3f3f3;
  color: #262626;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.24px;
`;

const WityInput = styled.input`
  width: 148px;
  height: 40px;
  background-color: #f3f3f3;
  padding: 8px 16px 8px 0px;
  margin: 8px 10px 6px 0px;
  outline: none;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 12px;
  &::placeholder {
    color: #9d9d9d;
  }
  &:focus {
    border: none;
  }
`;

const CheckBtn = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  width: 97px;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  color: #7163e8;
  background-color: #f3f2fd;
  &:focus {
    border: none;
    outline: none;
  }
`;

const PWrapper = styled.div`
  margin-top: 83px;
  margin-right: 196px;
`;

const StyledP = styled.p`
  margin-bottom: 8px;
  color: #262626;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.32px;
`;

const stylesObj = {
  width: 329,
  height: 40,
  marginTop: 10,
  backgroundColor: '#F3F3F3',
  fontSize: 14,
  outline: '1px solid #F3F3F3',
};

export const S = {
  Container,
  Wrapper,
  SignupForm,
  InfoFieldset,
  Label,
  UserURL,
  WityURL,
  WityInput,
  CheckBtn,
  PWrapper,
  StyledP,
  stylesObj,
};
