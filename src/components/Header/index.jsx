import React from 'react';
import logo from '../../Assets/logo-dio.png';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './style';
import { Button } from '../Button';
const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da DIO' />
                {autenticado ? (
                <>
                    <BuscarInputContainer>
                     <Input placeholder='Buscar....' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="data:image/jpeg;base64,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" />
                ):(
                    <>
                    <MenuRight href={"/"}>Home</MenuRight>
                <Button title="Entrar"   />
                <Button title="Cadastrar" />
                    </>
                )}
                

            </Row>
        </Container>

    </Wrapper>
  )
}
export {Header}