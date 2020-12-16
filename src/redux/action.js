import { v1 as uuid } from "uuid";
import { ADD_BOOK, REMOVE_BOOK } from "./actionType";


export const addBook = (book,author) => {
    return{
        type:ADD_BOOK,
        payload:{
            book:book,
            author:author,
            id: uuid()
        }
    }
} 

export const removeBook = id =>{
    return{
        type: REMOVE_BOOK,
        payload: {
            id:id
        }
    }
}