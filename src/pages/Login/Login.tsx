import { useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router';
import { authenticate, login, updateUser } from '../../redux/user/slice';
import { Paths } from '../../App';
const StyledPasswordCreate = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  margin: 10px 0 12px 0 !important;
`;

const StyledPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-width: 250px;
  max-width: 500px;
`;

const StyledButton = styled(Button)`
  margin: 10px 0 12px 0 !important;
`;

const StyledTextField = styled(TextField)`
  margin: 10px 0 12px 0 !important;
`;

const Login = () => {
  const email = useAppSelector((state) => state.user.email);
  const password = useAppSelector((state) => state.user.password);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    dispatch(authenticate());

    if (isLogged) {
      navigate(Paths.HOME);
    }
  }, [navigate, isLogged, dispatch]);

  const handleEmailChange = (mail: string) => {
    dispatch(updateUser({ mail }));
  };

  const handlePasswordChange = (newPassword: string) => {
    dispatch(updateUser({ newPassword }));
  };

  const handleSubmit = () => {
    dispatch(login({ email, password }));
    navigate(Paths.HOME);
  };

  return (
    <StyledPasswordCreate>
      <StyledPasswordContainer>
        <StyledTypography
          fontSize={20}
          fontWeight={500}
          justifyContent={'flex-start'}
          width={'100%'}
        >
          Login
        </StyledTypography>
        <StyledTextField
          fullWidth
          placeholder="Email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <StyledTextField
          fullWidth
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <StyledButton variant="contained" fullWidth onClick={() => handleSubmit()}>
          Login
        </StyledButton>
        <StyledTypography>
          Don&apos;t have an account? <a href={Paths.REGISTER}>Register</a>
        </StyledTypography>
      </StyledPasswordContainer>
    </StyledPasswordCreate>
  );
};

export default Login;
