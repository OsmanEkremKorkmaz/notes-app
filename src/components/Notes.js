import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removeNote } from '../redux/notes/notes'

function Notes() {

    const notes = useSelector(state => state.notes.notes)
    const dispatch = useDispatch()

    const handleDestroy = (id) => {
        dispatch(removeNote(id))
    }
 
    const filtered = useSelector(state => state.notes.filtered)

    return (
        <div className='notes'>
            {filtered.map(note => (
                <div key={note.id} className={`note ${note.color}`}>
                    <p>{note.text}</p>
                    <button className='destroy' onClick={() => handleDestroy(note.id)}>X</button>
                </div>
            ))}
            
        </div>
    )
}

export default Notes