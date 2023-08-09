/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { S } from './style';
import { instance } from '../../api/instance';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../styles/Input';

interface FormValue {
  email: string;
  password: string;
  confirmPassword: string;
  url: string;
}

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValue>({ mode: 'onChange', reValidateMode: 'onSubmit' });

  const changePassword = watch('password');

  const [handleErrorMessage, setHandleErrorMessage] = useState(false);
  const [createURL, setCreatURL] = useState<boolean | null>(null);

  const fetchData = async (data: string, type: string) => {
    let response: any;

    try {
      /* url 중복 조회 */
      if (type === 'url') {
        response = await instance.get(`/profiles/${data}`);

        console.log('profile.id: ', response.data.profile.id);
        if (response.data.profile.id !== 0) {
          setCreatURL(false); // 이미 사용 중인 URL
        } else if (response.data.profile === undefined) {
          setCreatURL(true); // 사용 가능한 URL
        }
      }
    } catch (error: any) {
      const status = error.response;

      if (status === 400) {
        setHandleErrorMessage(true); //  제출 비활성화
      }

      setCreatURL(true); // 500 에러 발생 시 사용 가능한 URL
    }
  };

  /* URL 중복조회 */
  const onDoubleCheck = (type: string): void => {
    const data = getValues('url');

    fetchData(data, type);
  };

  /* 회원가입 폼 제출 & 이메일 중복조회 */
  const onSubmit = async (data: FormValue) => {
    const response = await instance.post(`/users/sign-up`, data);

    try {
      if (response.status === 201) {
        console.log('Congrats!:', response.data.result);
        navigate('/congrats');
      }
    } catch (error) {
      console.log('error checking...');
      if (response.status === 400) reset({ email: '' }); // reset 안되는 에러 고치기~~
    }
  };

  const urlRegister = register('url', {
    required: {
      value: true,
      message: 'URL을 설정해주세요.',
    },
    pattern: {
      value: /^[A-Za-z0-9_.]+$/,
      message:
        'URL에는 영어 대소문자, 숫자, 밑줄("_") 및 마침표(".")만 사용할 수 있습니다.',
    },
    minLength: {
      value: 0,
      message: 'URL을 설정해주세요.',
    },
    maxLength: {
      value: 32,
      message: 'URL은 32글자 이하만 가능합니다.',
    },
  });

  const emailRegister = register('email', {
    required: '이메일은 필수 입력입니다.',
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: '이메일 형식에 맞지 않습니다.',
    },
  });

  const passwordRegister = register('password', {
    required: '비밀번호 입력 (8~12자)',
    maxLength: {
      value: 12,
      message: '12자리 이하로 비밀번호를 입력하세요.',
    },
    minLength: {
      value: 8,
      message: '8자리 이상 비밀번호를 입력하세요.',
    },
  });

  const pwCheckRegister = register('confirmPassword', {
    required: {
      value: true,
      message: '비밀번호를 다시 입력해주세요.',
    },
    validate: (changePwCheck?: string) => {
      if (!changePassword) return;

      return (
        changePwCheck === changePassword || '비밀번호가 일치하지 않습니다.'
      );
    },
  });

  return (
    <S.Container>
      <S.Wrapper>
        <S.PWrapper>
          <S.StyledP style={{ margin: 0 }}>독특하고 개성있는</S.StyledP>
          <S.StyledP>페이지 주소를 만들어주세요</S.StyledP>
        </S.PWrapper>
        <S.SignupForm id="submitForm" onSubmit={handleSubmit(onSubmit)}>
          <S.InfoFieldset>
            <S.StyledP>페이지 이름</S.StyledP>
            <S.Label htmlFor="url" style={{ color: '#7163e8' }}>
              *영어 대소문자, 숫자, 특수문자 (_)만 사용가능
              <S.UserURL>
                <S.WityURL>wity.im/</S.WityURL>
                <S.WityInput
                  {...urlRegister}
                  id="url"
                  type="text"
                  placeholder="janda_official"
                />
                <S.CheckBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setHandleErrorMessage(true);
                    onDoubleCheck('url');
                  }}
                >
                  중복확인
                </S.CheckBtn>
              </S.UserURL>
              {errors.url && (
                <small role="alert" style={{ color: '#262626', fontSize: 4 }}>
                  {errors.url.message}
                </small>
              )}
              {handleErrorMessage && (
                <small
                  role="alert"
                  style={{
                    color: createURL ? '#73CA65' : '#E86363',
                    fontSize: 10,
                  }}
                >
                  {createURL
                    ? '*사용 가능한 URL입니다.'
                    : '이미 사용 중인 URL입니다.'}
                </small>
              )}
            </S.Label>
          </S.InfoFieldset>
          <S.InfoFieldset>
            <S.StyledP>기본 정보</S.StyledP>
            <S.Label htmlFor="email">
              아이디
              <Input
                {...emailRegister}
                id="email"
                type="text"
                placeholder="example@example.com"
                autoComplete="email"
                border={errors.email?.message ? '1px solid #E86363' : 'none'}
                style={S.stylesObj}
              />
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
            </S.Label>
            <S.Label htmlFor="password">
              비밀번호
              <Input
                {...passwordRegister}
                id="new-password"
                type="password"
                placeholder="비밀번호 입력 (8~12자)"
                autoComplete="new-password"
                width={361}
                border={errors.password?.message ? '1px solid #E86363' : 'none'}
                style={S.stylesObj}
              />
              {errors.password && (
                <small role="alert">{errors.password.message}</small>
              )}
            </S.Label>
            <S.Label htmlFor="confirmPassword">
              비밀번호 확인
              <Input
                {...pwCheckRegister}
                id="confirmPassword"
                type="password"
                placeholder="비밀번호 입력 (8~12자)"
                autoComplete="confirmPassword"
                width={361}
                border={
                  errors.confirmPassword?.message ? '1px solid #E86363' : 'none'
                }
                style={S.stylesObj}
              />
              {errors.confirmPassword && (
                <small role="alert">{errors.confirmPassword.message}</small>
              )}
            </S.Label>
          </S.InfoFieldset>
          <SubmitButton
            type="submit"
            disabled={!isValid || isSubmitting}
            marginTop={0}
            marginBottom={32}
          >
            확인
          </SubmitButton>
        </S.SignupForm>
      </S.Wrapper>
    </S.Container>
  );
}

export default SignUp;
