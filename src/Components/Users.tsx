import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";

import { fetchUsers, filterUsers } from "../lib/users/usersSlice";
import UsersTable from "./UsersTable";
import Loading from "./Loading";
const Users = () => {
	const { filteredUsers, searchByTerms, loading, error } = useAppSelector(
		(state) => state.users
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) return <Loading />;
	if (error) return <div>Error: {error}</div>;

	return (
		<UsersTable
			filteredUsers={filteredUsers}
			searchByTerms={searchByTerms}
			filter={(searchTerms) => dispatch(filterUsers(searchTerms))}
		/>
	);
};

export default Users;

