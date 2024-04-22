import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit' 

interface countType {
  user: any[],
}


const initialState: countType = {
  user:[],
}


const todoList = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      return {...state, user: [...state.user, action.payload]}
    },
    deletTodo: (state,action: PayloadAction<any>) => {
      return {...state, user: state.user.filter((item) => item.id !== action.payload)}
    },
    editTodo: (state, action:PayloadAction<any>) => {
      const newMessage = prompt("Enter new message");
      return {...state, user: state.user.map((item) => item.id === action.payload.id ? {input: newMessage} : item)}
    }
  }
});


export default todoList.reducer;
export const {addData, deletTodo, editTodo} = todoList.actions;