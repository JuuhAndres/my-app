import { useState, useEffect, useMemo } from 'react'
import React from 'react'



const Teste =() => {
    const [name , setName] = useState('Julian');

    const handleChangeName = () =>{
        setName('Pablo')
    }
    const calculo = useMemo(()=>{
        return 10 * 32324
    },[]);
    /*useEffect(()=>{
        alert('Renderizei')

    },[name]) */
  return (
    <div>
        {name}
        <button onClick={handleChangeName}>Alterar</button>
    </div>
    
  )
}
export {Teste}
