import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200 p-2 gap-x-4">
      <Link href="/">Next js</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};
export default Navbar;
