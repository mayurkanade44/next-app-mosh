"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex bg-slate-200 p-2 space-x-4">
      <Link href="/">Next js</Link>
      <Link href="/users">Users</Link>
      {status === "authenticated" ? (
        <div>
          {session.user?.name}
          <Link href="/api/auth/signout" className="ml-4">Sign Out</Link>
        </div>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};
export default Navbar;
