import { ADD_BOOK, REMOVE_BOOK } from "./actionType";
let initialState = [
    {id:1, book : 'Book 1' , author:'Author 1'},
    {id:2, book : 'Book 2', author: 'Author 2'}
]

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BOOK: 
            return [...state, action.payload]
        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload.id)
        default:
            return state
    }
}