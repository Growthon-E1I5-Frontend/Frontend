import styled from 'styled-components';

const Container = styled.main`
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpan = styled.span`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 87.5% */
  letter-spacing: -0.48x;
  color: #262626;
`;

const StyledP = styled.p`
  color: #262626;
  font-size: 12px;
  font-style: normal;
  font-weight: 00;
  line-height: 18px;
  letter-spacing: -0.32px;
`;

const Anchor = styled.a`
  display: flex;
  width: 187px;
  height: 40px;
  margin-bottom: 8px;
  padding: 0px 16px 0.8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f3f2fd;
  color: #7163e8;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 200% */
  letter-spacing: -0.24px;
`;

const stylesObj = {
  letterSpacing: -0.5,
  backgroundColor: '#ffffff',
  border: '1px solid #7163e8',
  margin: 0,
};

export const S = {
  Container,
  Section,
  TextWrapper,
  StyledSpan,
  StyledP,
  Anchor,
  stylesObj,
};
