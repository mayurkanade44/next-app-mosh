import Link from "next/link";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <div>
      <h1 className="text-center my-4 text-lg font-medium">All Users</h1>
      <Link href='/users/new' className="btn">Add User</Link>
      <UserTable />
    </div>
  );
};
export default UsersPage;
