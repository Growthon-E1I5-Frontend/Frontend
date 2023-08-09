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

const SpanWrapper = styled.div`
  margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 87.5% */
  letter-spacing: -0.64px;
  background: linear-gradient(180deg, #6370e8 30%, #8e54e9 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ClipIcon = styled.span`
  flex-direction: none;
  text-align: center;
  font-family: Noto Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 87.5% */
`;

const StyledP = styled.p`
  color: #262626;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
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

const Img = styled.img`
  display: flex;
  justify-content: center;
  margin-top: 69px;
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
  SpanWrapper,
  StyledSpan,
  ClipIcon,
  StyledP,
  Anchor,
  Img,
  stylesObj,
};
