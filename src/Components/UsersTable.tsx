import { User } from "../types/user";
import { FilteringCriteria } from "../types/filter";
type UsersTableProps = {
	filteredUsers: User[];
	searchByTerms: Partial<FilteringCriteria>;
	filter: (searchTerm: Partial<FilteringCriteria>) => void;
};
const UsersTable = (props: UsersTableProps) => {
	const { filteredUsers, searchByTerms, filter } = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		filter({ [name]: value });
	};

	const tableRows = filteredUsers.map((user) => (
		<tr key={user.id}>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
		</tr>
	));

	const columnNames = ["Name", "Username", "Email", "Phone"];
	const tableHeaders = columnNames.map((header) => (
		<th key={header}>{header}</th>
	));

	return (
		<div className='overflow-x-auto'>
			<table className='table table-md table-zebra bg-primary-content'>
				<thead className='table-header-group'>
					<tr className='text-xl text-center text-neutral'>
						{tableHeaders}
					</tr>
				</thead>
				<tbody>
					<td>
						<input
							type='text'
							name='name'
							value={searchByTerms.name}
							onChange={handleChange}
							placeholder='Type to filter by name'
							className='input input-bordered input-sm w-full max-w-xs'
						/>
					</td>
					<td>
						<input
							type='text'
							name='username'
							value={searchByTerms.username}
							onChange={handleChange}
							placeholder='Type to filter by username'
							className='input input-bordered input-sm w-full max-w-xs'
						/>
					</td>
					<td>
						<input
							type='text'
							name='email'
							value={searchByTerms.email}
							onChange={handleChange}
							placeholder='Type to filter by email'
							className='input input-bordered input-sm w-full max-w-xs'
						/>
					</td>
					<td>
						<input
							type='text'
							name='phone'
							value={searchByTerms.phone}
							onChange={handleChange}
							placeholder='Type to filter by phone'
							className='input input-bordered input-sm w-full max-w-xs'
						/>
					</td>
					{tableRows}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;

