import React, { useState } from 'react'
import {HiArrowRight} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { postForm } from '../redux/actions'

function validate(input){
    let errors ={}
    let regExpEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if(!input.email){
        errors.email = 'se requiere un email valido'
    }else if(!regExpEmail.test(input.email)){
        errors.email = 'correo no valido'
    }
    return errors
}

export default function Subscribe() {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([""])
    const [input, setInput] = useState({
        email: ''
    })

    const handleChange=(e) => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name] : value
        })
        setErrors(validate({
            ...input,
            [name] : value
        })) 
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(Object.keys(errors).length > 0 ){  
        //     alert('todos los campos son Obligatorios')
        // }else{
            dispatch(postForm(input))
            alert(`email enviado con exito`) 
            setInput({
            email: ''
            }) 
        // }  
    }

  return (
    <div className='text-center'>
    <h3 className='text-xl text-gray-300'>NEWSLATTER</h3>
    <h1 className='text-5xl m-2'>SUSCRIBETE</h1>
    <p className='text-lg mb-3' >Y entérate de todas las novedades</p>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='flex justify-center '>
                <input
                    type='email'
                    value={input.email}
                    name='email'
                    placeholder='Ingresa tu email'
                    onChange={(e) => handleChange(e)}
                    className='w-5/12 text-lg h-10 p-5 border border-black '
                    required
                />
                <button  type='submit' className='text-3xl border border-black'><HiArrowRight/></button>    
            </div>
        {errors.email && (<p className='text-gray-500 text-xs'>{errors.email}</p>)}
        </form>
    </div>
  )
}

// disabled={Object.keys(errors).length}