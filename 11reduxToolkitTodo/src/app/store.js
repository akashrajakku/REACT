import {configureStore} from '@reduxjs/toolkit';

// this is the first step for using redux toolkit and we start with making a store

import todoReducer from '../features/todo/todoSlice';

export const store= configureStore({
    reducer: todoReducer
})