import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { config } from "../../config";

import { User } from "../../types/user";
import { FilteringCriteria } from "../../types/filter";
interface UsersState {
	users: User[];
	filteredUsers: User[];
	searchByTerms: FilteringCriteria;
	loading: boolean;
	error: string;
}
const initialState: UsersState = {
	users: [],
	filteredUsers: [],
	//the states of the inputs could be also stored outside the store/slice
	// useState i.e. 
	searchByTerms: {
		name: "",
		username: "",
		email: "",
		phone: "",
	},
	loading: false,
	error: "",
};
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		filterUsers: (
			state,
			action: PayloadAction<Partial<FilteringCriteria>>
		) => {
			//changing state if users changes the inputs
			const searchByTerms = { ...state.searchByTerms, ...action.payload };
			state.searchByTerms = searchByTerms;

			state.filteredUsers = state.users.filter(
				(user) =>
					user.name
						.toLowerCase()
						.includes(searchByTerms.name.toLowerCase()) &&
					user.username
						.toLowerCase()
						.includes(searchByTerms.username.toLowerCase()) &&
					user.email
						.toLowerCase()
						.includes(searchByTerms.email.toLowerCase()) &&
					user.phone
						.toLowerCase()
						.includes(searchByTerms.phone.toLowerCase())
			);
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.users = action.payload;

			state.filteredUsers = action.payload;
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
export const { filterUsers } = usersSlice.actions;
export default usersSlice.reducer;

