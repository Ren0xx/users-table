import { User } from "../types/user";

type UsersTableProps = {
	users: User[];
};
const UsersTable = ({ users }: UsersTableProps) => {
	const tableHeaders = ["Name", "Username", "Email", "Phone"].map(
		(header) => <th key={header}>{header}</th>
	);
	const tableRows = users.map((user) => (
		<tr key={user.id}>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
		</tr>
	));
	return (
		<div className='overflow-x-auto'>
			<table className='table'>
				<thead>
					<tr>{tableHeaders}</tr>
				</thead>
				<tbody>
					<td>
						<input
							type='text'
							className='input input-bordered input-xs w-full max-w-xs'
						/>
					</td>
					<td>
						<input
							type='text'
							className='input input-bordered input-xs w-full max-w-xs'
						/>
					</td>
					<td>
						<input
							type='text'
							className='input input-bordered input-xs w-full max-w-xs'
						/>
					</td>
					<td>
						<input
							type='text'
							className='input input-bordered input-xs w-full max-w-xs'
						/>
					</td>
					{tableRows}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;

