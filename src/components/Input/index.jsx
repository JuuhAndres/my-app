import React from 'react'
import {ErrorText, IconeContainer,InputContainer,InputText} from './styles'
import { Controller } from "react-hook-form"

const Input =({lefticon,name,control,errorMessage,...rest}) => {
  return (
    <>
    <InputContainer>
        {lefticon ? [<IconeContainer>{lefticon}</IconeContainer> ] : null}
        
        <Controller 
        name={name}
        control={control}
        rules={{required:true}}
        render={({ field }) => <InputText {...field} {...rest} />}
        />
          

        

    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}
export {Input};