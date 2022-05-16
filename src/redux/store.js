import { configureStore } from "@reduxjs/toolkit"
import notes from "./notes/notes"

export const store = configureStore({
    reducer: {
        notes: notes
    }
}) 