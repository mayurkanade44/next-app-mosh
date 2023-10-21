"use client";

import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();

  return (
    <div>
      NewUser
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};
export default NewUser;
