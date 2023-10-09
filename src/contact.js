import React, {useState} from 'react'

import './contact.css'

const Contact = () => {

    const [user, setUser] = useState(
        {
            Name:'', email:'', Message:''
        }
    )
        let values, names
    const data = (e) =>
    {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }
    const send = async (e) =>
    {
        const {Name, email, Message} = user 
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, email, Message
            })
        }
        const send = await fetch(
            'https://react-nikestore-default-rtdb.firebaseio.com/Message.json', option
            )

        if (send) {
            alert("¡Mensaje Enviado!")
        }
        else
        {
            alert("Error")
        }
    }

  return (
    <>
    <div className='contact'>
        <div className='container_box'>
            <div className='form'>
                <h2>Contacto</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='table'>
                            <h4>Nombre:</h4>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Nombre' value={user.Name} name='Name' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='table'>
                            <h4>E-Mail</h4>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='e-mail' value={user.email} name='email' onChange={data}></input>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='table'>
                            <h4>Mensaje</h4>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Mensaje' value={user.Message} name='Message' onChange={data}></textarea>
                        </div>
                    </div>
                    <button type='submit' onClick={send}>Enviar</button>
                </form>
            </div>
            
        </div>
    </div>
    <div className='last_footer'>
            <p>Cesar Palma © 2023 ❤️</p>
        </div>
    </>
  )
}

export default Contact