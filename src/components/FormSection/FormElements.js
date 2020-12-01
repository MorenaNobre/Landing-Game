import styled from "styled-components";

export const FormContainer = styled.div`
  background: transparent linear-gradient(143deg, #7dede2 0%, #58b790 100%) 0%
    0% no-repeat padding-box;
  width: 100%;
  height: 752px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Form = styled.div`
  position: absolute;
  width: 1082px;
  height: 832.5px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000004d;
  border-radius: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 246px;
  height: 43px;
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  color: var(--aqua-color);
  text-transform: uppercase;
`;

export const Description = styled.p`
  width: 746px;
  height: 77px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  text-align: left;
  margin-top: 42px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 556px;
`;

export const Input = styled.input`
  width: 249px;
  height: 48px;
  border: 1px solid #363636;
  color: var(--dark-bg);
  margin-top: -72px;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  border-radius: 8px;
`;

export const TextAreaContainer = styled.textarea`
  width: 556px;
  height: 197px;
  border: 1px solid #363636;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  margin-top: -128px;
  border-radius: 8px;
`;

export const ButtonWrapper = styled.div`
  width: 556px;
  margin-top: -98px;
`;

export const Button = styled.button`
  width: 249px;
  height: 48px;
  background: #63C7A9;
  text-align: center;
  color: var(--white-color);
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  &:hover{
    background: #48937d;
  }
`;
