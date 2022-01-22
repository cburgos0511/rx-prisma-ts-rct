import type { LoaderFunction } from "remix";
import type { User } from "@prisma/client";
import { db } from "~/utils/db.server";
import { Link, Outlet, useLoaderData } from "remix";

type LoaderData = { users: Array<User> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    users: await db.user.findMany(),
  };
  return data;
};

export default function Users() {
  const { users } = useLoaderData<LoaderData>();

  return (
    <ul>
      {users.map((user: User) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
}