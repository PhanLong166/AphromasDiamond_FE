import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GlobalStyle,
  CornerButton,
  IconItem,
  IconLink,
  Container,
  Cover,
  Form,
  FormContent,
  LoginForm,
  SignForm,

} from './Login.styled';

import { UserOutlined, LockOutlined, MailOutlined, EyeOutlined, HomeFilled } from '@ant-design/icons';
import { Button } from '../Home.styled';
import { LOGIN_GOOGLE_URL } from '@/config/constants';
import { useDocumentTitle } from '@/hooks';
import { message } from 'antd';
// import { message } from 'antd';


const Login: React.FC = () => {
  useDocumentTitle('Login');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    try {
      setIsSubmitting(true);
    } catch (error: any) {
      if(error.response) messageApi.error(error.response.data);
      else messageApi.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [selectedGender, setSelectedGender] = useState<string>('male');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.id);
  };
  return (
    <>
      <GlobalStyle />
      <CornerButton>
        <IconItem>
          <IconLink href='/'>
            <Link to={'/'} >
              <HomeFilled style={{ marginLeft: '23px', marginTop: '20px' }} />
            </Link>
          </IconLink>
        </IconItem>
      </CornerButton>
      <Container>
        <input type="checkbox" id="flip" />
        <Cover>
          <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/LoginPage%2Flogin.png?alt=media&token=0736fcb9-bff4-4d0e-b682-37d4eeda1566" alt="Cover" />
        </Cover>
        <Form>
          <FormContent>
            <LoginForm className="login-form">
              <div className="title">LOGIN</div>
              <div className="input-boxes">
                <div className="input-box">
                  <UserOutlined style={{ fontSize: '20px', color: '#ECBD73', marginBottom: '5px' }} />
                  <input type="text" placeholder="Enter your username" required />
                </div>
                <div className="input-box">
                  <LockOutlined style={{ fontSize: '20px', color: '#ECBD73', marginBottom: '5px' }} />
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="google-button">
                  <Link to={LOGIN_GOOGLE_URL}>
                    <Button type="button" className="login-with-google-btn">
                      Sign in with Google
                    </Button>
                  </Link>
                </div>
                <div className="sign-up-text">
                  Don't have an account? <label htmlFor="flip">SIGN UP NOW</label>
                </div>
              </div>
            </LoginForm>
            <SignForm>
              <div className="title">SIGN UP</div>
              <div className="input-boxes">
                <div className="input-box">
                  <UserOutlined style={{ fontSize: '20px', color: '#ECBD73', marginBottom: '5px' }} />
                  <input type="text" placeholder="Enter your username" required />
                </div>
                <div className="input-box">
                  <MailOutlined style={{ fontSize: '20px', color: '#ECBD73', marginBottom: '5px' }} />
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <LockOutlined style={{ fontSize: '20px', color: '#ECBD73', marginBottom: '5px' }} />
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                  <EyeOutlined style={{ fontSize: '20px', color: '#ECBD73', marginBottom: '5px' }} />
                  <input type="password" placeholder="Confirm password" required />
                </div>

                <div className="input-box radio-gender">
                  {/* <div className="input-gender">
                        <i className="fas fa-transgender"  style={{ fontSize: 24 }}></i>
                    </div> */}

                  <input
                    type="radio"
                    id="male"
                    name="radio"
                    checked={selectedGender === 'male'}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" style={{ textDecoration: 'none' }}>Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="radio"
                    checked={selectedGender === 'female'}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" style={{ textDecoration: 'none' }}>Female</label>
                </div>


                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">
                  Already have an account? <label htmlFor="flip">LOGIN NOW</label>
                </div>
              </div>
            </SignForm>
          </FormContent>
        </Form>

      </Container>
    </>
  );
};

export default Login;
