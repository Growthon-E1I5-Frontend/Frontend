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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 393px;
  margin-top: 100px;
  border: none;
  padding: 0px 16px 12px 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 14px;
  color: #9d9d9d;
`;

const Anchor = styled.a`
  color: #cccdd0;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
  letter-spacing: -0.24px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SignupAnchor = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #7163e8;
  background-color: #ffffff;
  display: flex;
  width: 361px;
  padding: 15px 0px;
  justify-content: center;
  align-items: center;
  border: 1px solid #7163e8;
  border-radius: 8px;
  cursor: pointer;
`;

const stylesObj = {
  marginTop: 10,
  backgroundColor: '#ffffff',
  fontSize: 14,
  outline: '1px solid #CCCDD0',
};

export const S = {
  Container,
  Wrapper,
  LoginForm,
  Label,
  Anchor,
  SignupAnchor,
  stylesObj,
};
