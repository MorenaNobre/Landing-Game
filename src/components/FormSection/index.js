import React from "react";
import {
  FormContainer,
  Form,
  DescriptionContainer,
  Title,
  Description,
  InputWrapper,
  Input,
  TextAreaContainer,
  ButtonWrapper,
  Button,
} from "./FormElements";

const FormSection = () => {
  return (
    <FormContainer>
      <Form>
        <DescriptionContainer>
          <Title>Formulário</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
        </DescriptionContainer>
        <InputWrapper>
          <Input placeholder="Nome" type="text" />
          <Input placeholder="Email" type="text" />
        </InputWrapper>
        <TextAreaContainer placeholder="Mensagem" type="textarea" />
        <ButtonWrapper>
          <Button>Enviar</Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default FormSection;
