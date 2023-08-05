import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { todo } from "../types/todo.type";
import { dateTodo } from "../Utils/date";

interface initialState {
  listTodo: todo[];
  Todo: todo | null;
  filteredList: todo[];
}
const initialState: initialState = {
  listTodo: [],
  filteredList: [],
  Todo: null,
};
export const sliceTodo = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todo>) => {
      state.listTodo.push({
        ...action.payload,
        checkInput: true && action.payload.complete === "Completed",
        id: nanoid(),
        date: dateTodo(),
      });
    },
    deleteOneTodo: (state, action: PayloadAction<string>) => {
      const findIndexTodo = state.listTodo.findIndex(
        (todo) => todo.id === action.payload
      );
      if (findIndexTodo !== -1) {
        state.listTodo.splice(findIndexTodo, 1);
        state.filteredList.splice(findIndexTodo, 1);
      }
    },
    startEditTodo: (state, action: PayloadAction<string | null>) => {
      const findOneTodo = state.listTodo.find(
        (todo) => todo.id === action.payload
      );
      if (findOneTodo) state.Todo = findOneTodo;
      else state.Todo = null;
    },
    endEditTodo: (state, action: PayloadAction<{ id: string; todo: todo }>) => {
      state.listTodo.some((todo, index) => {
        if (todo.id === action.payload.id) {
          state.listTodo[index] = {
            ...action.payload.todo,
            checkInput: true && action.payload.todo.complete === "Completed",
            id: nanoid(),
            date: dateTodo(),
          };
        }
      });
    },
    filterTodo: (state, action: PayloadAction<string>) => {
      const filterType = action.payload;
      if (filterType === "All") {
        state.filteredList = state.listTodo;
      } else if (filterType === "Incomplete") {
        state.filteredList = state.listTodo.filter((todo) => !todo.checkInput);
      } else {
        
        state.filteredList = state.listTodo.filter((todo) => todo.checkInput);
      }
    },
    checkboxInput: (state, action: PayloadAction<string>) => {
      state.listTodo.some((todo, index) => {
        if (todo.id === action.payload) {
          state.listTodo[index] = {
            ...state.listTodo[index],
            checkInput: !state.listTodo[index].checkInput,
          };
        }
      });
    },
    deleteOneTodoFilter: (state, action: PayloadAction<string>) => {
      const findIndexTodo = state.filteredList.findIndex(
        (todo) => todo.id === action.payload
      );
      if (findIndexTodo !== -1) {
        state.filteredList.splice(findIndexTodo, 1);
        state.listTodo.splice(findIndexTodo, 1);
      }
    },
    startEditTodoFilter: (state, action: PayloadAction<string | null>) => {
      const findOneTodo = state.filteredList.find(
        (todo) => todo.id === action.payload
      );
      if (findOneTodo) state.Todo = findOneTodo;
      else state.Todo = null;
    },
    endEditTodoFilter: (
      state,
      action: PayloadAction<{ id: string; todo: todo }>
    ) => {
      state.filteredList.some((todo, index) => {
        if (todo.id === action.payload.id) {
          state.filteredList[index] = {
            ...action.payload.todo,
            checkInput: true && action.payload.todo.complete === "Completed",
            id: nanoid(),
            date: dateTodo(),
          };
          state.listTodo[index] = {
            ...action.payload.todo,
            checkInput: true && action.payload.todo.complete === "Completed",
            id: nanoid(),
            date: dateTodo(),
          };
        }
      });
    },
    checkboxInputFilter: (state, action: PayloadAction<string>) => {
      state.filteredList.some((todo, index) => {
        if (todo.id === action.payload) {
          state.filteredList[index] = {
            ...state.filteredList[index],
            checkInput: !state.filteredList[index].checkInput,
          };
          state.listTodo[index] = {
            ...state.listTodo[index],
            checkInput: !state.listTodo[index].checkInput,
          };
        }
      });
    },
  },
});
export const {
  addTodo,
  deleteOneTodo,
  startEditTodo,
  filterTodo,
  checkboxInput,
  endEditTodo,
  deleteOneTodoFilter,
  startEditTodoFilter,
  endEditTodoFilter,
  checkboxInputFilter,
} = sliceTodo.actions;

export default sliceTodo.reducer;
