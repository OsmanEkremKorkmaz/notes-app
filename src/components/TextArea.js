import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote, filter } from '../redux/notes/notes'

function TextArea() {

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [color, setColor] = useState('green')

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const handleAdd = (e) => {
        if (text) {
        e.preventDefault();
        dispatch(addNote({id: nanoid() ,text, color}))
        dispatch(filter())
        }
        setText('') 
    }
  return (
    <>
        <form className='form'>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your note here...'/>
            <div className='form-footer'>
                <div>
                    <input onChange={changeColor} checked={color === "green"} value={"green"} className="radio green" type={"radio"} name="color"/>
                    <input onChange={changeColor} checked={color === "blue"} value={"blue"} className="radio blue" type={"radio"} name="color"/>
                    <input onChange={changeColor} checked={color === "purple"} value={"purple"} className="radio purple" type={"radio"} name="color"/>
                    <input onChange={changeColor} checked={color === "gray"} value={"gray"} className="radio gray" type={"radio"} name="color"/>
                    <input onChange={changeColor} checked={color === "yellow"} value={"yellow"} className="radio yellow" type={"radio"} name="color"/>
                </div>
                <button className='add-button' onClick={handleAdd}>ADD</button>
            </div>
        </form>
    </>
  )
}

export default TextArea