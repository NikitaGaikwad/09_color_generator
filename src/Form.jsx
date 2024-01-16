import React, { useState } from 'react'
import {toast} from 'react-toastify'

const Form = ({addColor}) => {
    let [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
    }
   
    return (
        <section className='container'>
            <h4>Color Generator</h4>
            <form onSubmit={handleSubmit} className='color-form'>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#5BFF33' />
                <button className='btn' type='submit' style={{ background: color }}>Submit</button>
            </form>
        </section>
    )
}

export default Form
