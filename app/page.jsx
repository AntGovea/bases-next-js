
import Users from "@/components/Users";
import { API } from "./services/Endpoint";

async function getUsers() {
  try {
    const res = await fetch(`${API}`);
    const { data } = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function HomePage() {
  const users = await getUsers();

  return (
   <>
   <Users users={users}/>
   </>
  );
}

export default HomePage;
