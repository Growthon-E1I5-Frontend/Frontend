import { S } from './style';

function Congrats() {
  return (
    <S.Container>
      <S.Section>
        <S.TextWrapper>
          <S.StyledSpan>채린님,</S.StyledSpan>
          <S.StyledSpan style={{ fontSize: 16 }}>
            가입을 축하합니다🎉
          </S.StyledSpan>
        </S.TextWrapper>
        <S.StyledP>위티 회원가입이 완료되었습니다.</S.StyledP>
        <S.StyledP>프로필을 자유롭게 꾸며주세요</S.StyledP>
      </S.Section>
      <S.Section>
        <S.Anchor href="/page" style={{ marginTop: 40 }}>
          위티로 포트폴리오 만들기 →
        </S.Anchor>
        <S.Anchor href="#" style={S.stylesObj}>
          하나뿐인 내 프로필 만들기 →
        </S.Anchor>
      </S.Section>
    </S.Container>
  );
}

export default Congrats;
