import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, setSearch } from '../redux/notes/notes'

function Form() {

    const dispatch = useDispatch()
    const search = useSelector(state => state.notes.search)

    useEffect(() => {
        dispatch(filter(search))
    }, [])

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value))
        dispatch(filter())
    }
 
  return (
    <>
        <form className='search'>
            <input onChange={handleChange} placeholder='Search...'/>
        </form>
    </>
  )
}

export default Form