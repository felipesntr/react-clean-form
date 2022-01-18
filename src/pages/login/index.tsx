import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Input } from "../../components/input/input";

export const LoginPage = () => {
  const [formState, setFormState] = useState({
    email: false,
    password: false,
  });

  const handleEmail = (e: any) => {
    if (e.target.value.length > 2)
      setFormState({ email: true, password: formState.password });
    else setFormState({ email: false, password: formState.password });
  };

  const handlePassword = (e: any) => {
    if (e.target.value.length > 8)
      setFormState({ password: true, email: formState.email });
    else setFormState({ password: false, email: formState.email });
  };

  return (
    <Login>
      <Form>
        <h1>Sign in to dashboard</h1>
        <Input
          onChange={handleEmail}
          status={formState.email}
          type="email"
          placeholder="Email ID"
        />
        <Input
          onChange={handlePassword}
          status={formState.password}
          type="password"
          placeholder="Password"
        />
        <Misc>
          <p>Remember me</p>
          <a href="/">Reset password</a>
        </Misc>

        <Button text="Login" bgColor="#1f1f1f" />

        <Footer>
          <p>
            Don't have an account? <a href="/">Sign up here.</a>
          </p>
        </Footer>
      </Form>
    </Login>
  );
};

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 246, 255);
  h1 {
    font-size: 16px;
    color: #414141;
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  width: 300px;

  input {
    margin-bottom: 10px;
  }
`;

const Misc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #414141;

  a {
    text-decoration: none;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 10px;
  color: #414141;

  a {
    text-decoration: none;
    color: #3552d3;
  }
`;
