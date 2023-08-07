import { useForm } from 'react-hook-form';
import { S } from './style';
import Logo from '../../assets/landingLogo.svg';
import Input from '../../components/common/Input';
import SubmitButton from '../../components/SubmitButton';

interface FormValue {
  email: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ mode: 'onChange' });

  const onSubmit = async (data: FormValue) => {
    try {
      console.log('success!', data);
    } catch (e) {
      console.log('failed..', e);
    }
  };

  const emailLogin = register('email', {
    required: '이메일은 필수 입력입니다.',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]+$/,
      message: '이메일 형식에 맞지 않습니다.',
    },
  });

  const passwordLogin = register('password', {
    required: '비밀번호는 필수 입력입니다.',
    minLength: {
      value: 9,
      message: '9자리 이상 비밀번호를 입력하세요.',
    },
  });

  return (
    <S.Container>
      <S.Wrapper>
        <img
          src={Logo}
          alt="logo"
          style={{ width: 193, height: 64, marginTop: 84 }}
        />
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.Label htmlFor="email">
            아이디
            <Input
              {...emailLogin}
              id="email"
              type="text"
              placeholder="이메일을 입력해주세요"
              autoComplete="email"
              width={361}
              border={errors.email?.message ? '1px solid #E86363' : 'none'}
              style={S.stylesObj}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </S.Label>
          <S.Label>
            비밀번호
            <Input
              {...passwordLogin}
              id="current-password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="current-password"
              width={361}
              border={errors.password?.message ? '1px solid #E86363' : 'none'}
              style={S.stylesObj}
            />
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
          </S.Label>
          <SubmitButton marginTop={26} marginBottom={16}>
            이메일로 로그인
          </SubmitButton>
          <S.SignupAnchor href="signup">1분만에 회원가입</S.SignupAnchor>
        </S.LoginForm>
        <S.Anchor href="#">계정을 잃어버리셨나요?</S.Anchor>
      </S.Wrapper>
    </S.Container>
  );
}

export default LoginPage;
