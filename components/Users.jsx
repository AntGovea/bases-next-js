"use client";

import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`users/${user.id}`}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div>
              <h6 className="font-bold">{`${user.id} ${user.first_name}  ${user.last_name}`}</h6>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-25" alt="avatar" />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
