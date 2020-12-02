import React from "react";
import { useForm } from "react-hook-form";
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
  // eslint-disable-next-line
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
  };

  console.log(watch("nome", "email", "mensagem"));

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            name="nome"
            placeholder="Nome"
            type="text"
            ref={register({ required: true })}
          />
          {errors.nome && "Nome obrigatório"}
          <Input
            name="email"
            placeholder="Email"
            type="text"
            ref={register({ required: true })}
          />
          {errors.email && "Email obrigatório"}
        </InputWrapper>
        <TextAreaContainer
          name="mensagem"
          placeholder="Mensagem"
          type="textarea"
          ref={register}
        />
        {/* {erros.obrigatorio && <span>Campo obrigatório.</span>} */}
        <ButtonWrapper>
          <Button type="submit">Enviar</Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default FormSection;
