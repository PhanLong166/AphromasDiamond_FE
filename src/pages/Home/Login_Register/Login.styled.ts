

import styled, { createGlobalStyle } from 'styled-components';
import { theme } from "../../../themes";
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  :root {
      --text-01: #45413E;
      --card-hover: 0px 4px 24px rgba(0, 0, 0, 0.15);
      --card-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      --hover-timing: all 0.2s ease;
      --nav-card-size: 240px;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
      --transition-color: color .3s;
      --transition-background: background-color .3s;
      --transition-border: border .3s;
      --transition-transform: transform .3s;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
  }

  body {
      font-family: 'Poppins', sans-serif;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
      background: ${theme.color.white};
      padding: 30px;
      display: flexbox;
      margin-left: 300px;
      margin-top: 65px;
     
  }
`;

export const CornerButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const IconItem = styled.li`
  list-style: none;
`;

export const IconLink = styled.a`
  display: inline-flex;
  font-size: 2rem;
  text-decoration: none;
  color: var(--text-01);
  width: 5rem;
  height: 5rem;
  transition: .5s linear;
  position: relative;
  z-index: 1;
  margin: auto;
  margin-left: 20px;

  &:hover {
    color: #fff;
    
  }

  & i {
    margin: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 5rem;
    height: 5rem;
    background: #000;
    border-radius: 50%;
    z-index: -1;
    transform: scale(0);
    transition: 0.3s cubic-bezier(.95, .32, .37, 1.21);
  }

  &:hover::before {
    transform: scale(1);
  }

  &:hover::before {
    background: ${theme.color.secondary};
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 850px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  perspective: 2700px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  
  

  
  #flip {
    display: none; 
  }

 
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.1;
    z-index: 100;
    transform: rotateY(180deg);
    background: var(--light-01);
    border-radius: 12px;
  }

  & img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 12;
    border-radius: 0 12px 12px 0;
  }

  ${Container} #flip:checked ~ & {
    transform: rotateY(-180deg);
  }
`;

export const Form = styled.form`
    height: 100%;
    width: 100%;
    background: #fff;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 24px;
    font-weight: 600;
    color: ${theme.color.primary};;
    position: relative;
    font-family: "Playfair Display", sans-serif;

        &:before {
        content: '';
        position: absolute;
        height: 2px;
        width: 60px;
        background: ${theme.color.secondary};
        left: 0;
        bottom: 0;
        }
    }
    .input-boxes {
        margin-top: 30px;
        }
    
        .input-box {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        position: relative;
        font-family: "Poppins", sans-serif;
        
    
            input {
            height: 100%;
            width: 100%;
            outline: none;
            border: none;
            padding: 0 30px 0 15px;
            font-size: 15px;
            border-bottom: 3px solid rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            color: #45413E;
            font-weight: 500;
            
    
            &:focus {
            border-color: ${theme.color.primary};;
            }
    
            &:valid {
            border-color: ${theme.color.secondary};
            }
            
            i {
                position: absolute;
                color: ${theme.color.secondary};
                font-size: 17px;
              }
        }
    }

    .text {
        font-size: 14px;
        font-weight: 500;
        color: #333;
        font-family: "Poppins", sans-serif;
      
    
            a {
            text-decoration: none;
            color: ${theme.color.primary};;
            font-weight: 500;
    
            &:hover {
            text-decoration: underline;
            color: #DB7F67;
            }
    
            &:active,
            &:visited {
            text-decoration: none;
            color: ${theme.color.primary};;
            }
        }

    }

    .button {
        color: ${theme.color.primary};
        margin-top: 15px;
     
      
    
        input {
          background-color: ${theme.color.primary};;
          color: var(--light-01);
          border-radius: 6px;
          padding: 0;
          cursor: pointer;
          transition: all 0.4s ease;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          font-size: 15px;
          
    
          &:hover {
            background: ${theme.color.secondary};
            color: ${theme.color.primary};;
            font-weight: bold;
            border-color: ${theme.color.primary};;
          }
        }
      }

      label {
        color: ${theme.color.primary};
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        font-weight: 600;
    
        &:hover {
          text-decoration: underline;
        }
      }

      
    .login-text,
    .sign-up-text {
        text-align: center;
        margin-top: 25px;
        font-size: 14px;
        font-weight: 500;
        color: #333;
        font-family: "Poppins", sans-serif;
        
    }

    .radio-gender {
        margin-top: 20px;
    }

     label {
     user-select: none;
     font-size: 15px;
    }
`;

export const LoginForm = styled.div`
  width: calc(100% / 2 - 25px);

  .login-with-google-btn {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    transition: background-color .3s, box-shadow .3s;
    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    color: #757575;
    font-size: 15px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
    &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
    }
    &:active {
        background-color: #eeeeee;
    }
    &:focus {
        outline: none;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25), 0 0 0 3px #c8dafc;
    }
    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
        cursor: not-allowed;
    }
}

  

`;

export const SignForm = styled.div`
  width: calc(100% / 2 - 25px);
  .title:before {
    width: 60px;
    height: 1.5px;
    font-family: "Playfair Display", sans-serif;
    }

    .radio-gender label {
        text-decoration: none;
    }
    .input-gender {
        margin-right: 30px;
        margin-bottom: 35px;
      }

      .input-gender {
        margin-right: 30px;
        margin-bottom: 35px;
      }
    
      label {
        user-select: none;
        font-size: 15px;
      }
    
      input[type="radio"] {
        display: none;
    
        & + label {
          z-index: 10;
          margin: 0 10px 10px 0;
          position: relative;
          color: #CCCCCC;
          text-shadow: 0 1px rgba(255, 255, 255, 0.1);
          font-weight: 600;
         background-color: #ffffff;
         border: 2px solid #ced4da;
         cursor: pointer;
         transition: all 200ms ease;
         padding: 10px 15px;
         border-radius: 10px;
         
        }
    
        &:checked + label {
          color: var(--text-01);
          background-color: #ECBD73;
          border: 1px solid ${theme.color.primary};;
    
        }
      }
    
      .radio-gender label {
        text-decoration: none;
        }
    
        .input-gender {
        margin-right: 30px;
        margin-bottom: 35px;
        }
    
        .radio-gender {
            margin-top: 20px;
        }
    
  `;



