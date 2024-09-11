import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { config } from "../../config";
import axios from "axios";
interface UsersState {
	users: User[];
	loading: boolean;
	error: string;
}
const initialState: UsersState = {
	users: [],
	loading: false,
	error: "",
};
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.users = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Something went wrong";
		});
	},
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await axios.get(config.API_URL);
	return response.data;
});

export default usersSlice.reducer;

