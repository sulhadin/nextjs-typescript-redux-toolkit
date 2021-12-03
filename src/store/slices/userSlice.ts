import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';


export interface UserState {
    id: number,
    username: string
}

const initialState : UserState= {
    id: 1,
    username: 'Sulhadin',
} as const;


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser:(
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
        }
    }
});

// Selectors
export const getUser = (state: { user: UserState}) => state.user;

// Reducers and actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
