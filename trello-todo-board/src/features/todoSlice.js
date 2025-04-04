import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_STATES, STATUS } from "../constant/constant";

const initialState = {
  todos: [
    {
      id: 1,
      todo: "",
      completed: true,
      userId: 26,
      status: STATUS.PENDING, // this is my status  custom key, because API is only returning me the true or false
    },
  ],
  loading: "idle",
  error: null,
};
export const fetchToDos = createAsyncThunk("todos/fetchToDos", async () => {
  const res = await fetch("https://dummyjson.com/todos/random/10");
  const apiData = await res.json();

  const todoCurrentStatus = apiData.map((todo, index) => {
    let status = todo.completed ? STATUS.COMPLETE : STATUS.PENDING;

    // Adding here in-progress as we do not have inprogress return from api, we only have completed true or false
    if (!todo.completed && index % 3 === 0) {
      status = STATUS.INPROGRESS;
    }

    return {
      ...todo,
      status,
    };
  });

  return todoCurrentStatus;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTodoStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.status = newStatus;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.pending, (state) => {
      state.loading = API_STATES.LOADING;
    });
    builder.addCase(fetchToDos.fulfilled, (state, action) => {
      state.loading = API_STATES.SUCCESS;
      state.todos = action.payload;
    });
    builder.addCase(fetchToDos.rejected, (state, action) => {
      (state.loading = API_STATES.ERROR), (state.error = action.error.message);
    });
  },
});
export const { updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
