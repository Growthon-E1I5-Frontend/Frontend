import { S } from './style';
import LandingImg from '../../assets/introImg.svg';

function LandingPage() {
  return (
    <S.Container>
      <S.Section>
        <S.SpanWrapper>
          <S.StyledSpan>위티</S.StyledSpan>
          <S.ClipIcon>🔗</S.ClipIcon>
          <S.StyledSpan>하나로</S.StyledSpan>
        </S.SpanWrapper>
        <S.StyledP>홍보부터 포트폴리오까지</S.StyledP>
        <S.StyledP>다양한 프로필을 완성하기</S.StyledP>
      </S.Section>
      <S.Section style={{ marginTop: 21 }}>
        <S.Anchor href="/login">위티로 포트폴리오 만들기 →</S.Anchor>
        <S.Anchor href="#" style={S.stylesObj}>
          하나뿐인 내 프로필 만들기 →
        </S.Anchor>
      </S.Section>
      <S.Section>
        <S.Img src={LandingImg} alt="intro" />
      </S.Section>
    </S.Container>
  );
}

export default LandingPage;
