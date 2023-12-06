import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column,Container ,CriarFText, EsqueciText,Row, SubLogin,Title,TitleLogin,Wrapper,Pp} from "./stryle";
import { Button } from "../../components/Button";
import {isRouteErrorResponse, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'


const schema = yup
  .object({
    name: yup.string().min(3,"No mínimo 3 caracters").required('Campo Obrigatório'),
    email: yup.string().email('Email não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3 , 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  })
  .required()
  

const Cadastro = () => {



  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    
    formState: { errors },
  } = useForm({resolver:yupResolver(schema),
      mode:'onChange',

  
  });
  const onSubmit = async formData => {
    try{
      const { data } = await api.get(`users?nome=${formData.name}&email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1){
        navigate ('/login')
      }else{
        alert('Email ou senha invalido')
      }
    }catch{

      alert('Houve um erro,tente novamente')
    }
  };

  

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Começe agora gratis</TitleLogin>
            <SubLogin>Crie sua conta e make the change._</SubLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="name" errorMessage={errors.name?.message} control={control} placeholder="Nome Completo"  />
              <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail"  />
              <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password"  />
              <Button title="Criar minha conta" variant="secondary"  type="submit" onClick={onSubmit} />
              <br />
                <Pp>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Pp>
            </form>
            <Row>
                
              
              <CriarFText>Já tenho conta <strong><a href={"/login"}> Fazer login</a></strong></CriarFText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
export { Cadastro };