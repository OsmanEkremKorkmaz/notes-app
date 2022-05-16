import { createSlice } from "@reduxjs/toolkit";

export const notes = createSlice({
    name: "notes",
    initialState: {
        notes: [
            {
                id: 1,
                text: "note 1",
                color: "green"
            },
            {
                id: 2,
                text: "note 2",
                color: "blue"
            },
            {
                id: 3,
                text: "note 3",
                color: "purple"
            },
            {
                id: 4,
                text: "note 4",
                color: "yellow"
            }
        ],
        filtered: [],
        search: ""
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        removeNote: (state, action) => {
            const id = action.payload
            const index = state.notes.findIndex(note => note.id === id)
            state.notes.splice(index, 1)
        },
        filter: (state) => {
            const filter = state.search
            const filteredNotes = state.notes.filter(note => note.text.includes(filter))
            state.filtered = filteredNotes
        },
        setSearch: (state, action) => {
            state.search = action.payload
        }
    } 
})

export const { addNote, removeNote, filter, setSearch } = notes.actions

export default notes.reducer