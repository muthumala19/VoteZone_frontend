import { Button } from "@mui/material";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login, logout, Role } from "../../redux/user/slice";
import UserCard from "../UserCard/UserCard";
import { useState } from "react";

const AppbarWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
  flex-direction: raw;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

const AppbarTitle = styled.div`
  display: flex;
  flex-direction: raw;
  font-size: 24px;
  font-style: normal;
  padding: 5px 0 5px 15px;
  font-weight: 700;
  color: rgba(30, 136, 229, 1);
`;

const ButtonWrapper = styled.div`
  padding: 5px 15px 5px 0;
  display: flex;
  flex-direction: raw;
`;

const AdminButtonWrapper = styled.div`
  padding: 0px 15px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Appbar = () => {
  const { isLogged, role } = useAppSelector((state) => state.user);
  const [AddUserClicked, setAddUserClicked] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login({ user: "test" }));
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppbarWrapper>
      <AppbarTitle>VoteZone</AppbarTitle>
      <ButtonWrapper>
        {role === Role.ADMIN && (
          <AdminButtonWrapper>
            <Button variant="contained" onClick={() => setAddUserClicked(true)}>
              Add new User
            </Button>
          </AdminButtonWrapper>
        )}
        {isLogged ? (
          <>
            <Button variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button variant="outlined" onClick={handleLogin}>
            Login
          </Button>
        )}
        <UserCard
          open={AddUserClicked}
          onClose={() => setAddUserClicked(false)}
        />
      </ButtonWrapper>
    </AppbarWrapper>
  );
};

export default Appbar;
