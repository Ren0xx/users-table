import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../lib/store";

import { fetchUsers } from "../lib/users/usersSlice";
const Users = () => {
	const users = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div>
			{users.loading
				? "Loading..."
				: users.error
				? users.error
				: users.users.map((user) => (
						<div key={user.id}>{user.name}</div>
				  ))}
		</div>
	);
};

export default Users;

