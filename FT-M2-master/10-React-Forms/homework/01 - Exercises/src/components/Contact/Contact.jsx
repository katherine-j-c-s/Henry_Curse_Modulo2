import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  let [inputs,setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  let [errors,setErrors] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  function validate(inputs) {
    var errors = {}
    if (inputs.name === "") {
      errors.name = "se requiere un nombre";
    }else if(inputs.email){
      if (!regexEmail.test(inputs.email)) {
        errors.email = "debe ser un correo Electronico";
      }
    } 
    return errors
  }
  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  function handleSubmit(event) {
    event.preventDefault()
    for (let i = 0; i < Object.values(inputs).length; i++) {
      if (Object.values(inputs)[i].length === 0) {
        return alert("Debe llenar todos los campos")
      }
    }
    if (Object.keys(errors).length === 0) {
      alert('Datos completos')
      setInputs({
        name: '',
        email: '',
        message: '',
      })
      setErrors({
        name: '',
        email: '',
        message: '',
      })
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='forms'>
        <div className='inputs' >
          <label>Nombre:</label>
          <input 
          className={errors.name && 'warning'}
          type="text" 
          name="name"
          value={inputs.name} 
          placeholder='Escribe tu nombre...' 
          onChange={handleChange}/>
        </div>
        <p className='danger'>{errors.name}</p>
        <div className='inputs'>
          <label>Correo Electrónico:</label>
          <input 
          className={errors.email && 'warning'}
          type="text" 
          name="email"
          value={inputs.email} 
          placeholder='Escribe tu email...' 
          onChange={handleChange}/>
        </div>
        <p className='danger'>{errors.email}</p>
        <div className='inputs'>
          <label>Mensaje:</label>
          <input 
          type="textarea"
          name="message"
          value={inputs.message}  
          placeholder='Escribe tu mensaje...' 
          onChange={handleChange}/>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  ) 
}
