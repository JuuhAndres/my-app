import React from 'react'
import {Container, NameList,Progress,UserPicture} from './styles'


const UserInfo =({name,image,percentual}) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameList>{name}</NameList>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}
export { UserInfo }
