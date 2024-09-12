import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../lib/store";

import { fetchUsers } from "../lib/users/usersSlice";
import UsersTable from "./UsersTable";
const Users = () => {
	const { users, loading, error } = useSelector(
		(state: RootState) => state.users
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return <UsersTable users={users} />;
};

export default Users;

