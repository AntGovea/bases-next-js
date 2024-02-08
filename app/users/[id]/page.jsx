async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();
  return data;
}

async function User({ params: { id } }) {
  const userData =await getUser(id);
  return (
      <div className="bg-emerald-300 m-2 p-10 rounded-md text-black">
        <img src={userData.avatar} className="rounded-full m-auto my-4" alt="avatar" />
        <h3 className="text-3xl font-bold">{`${userData.id} ${userData.first_name}  ${userData.last_name}`}</h3>
        <p className="text-slate-50 text-xl ">email: {userData.email}</p>
    </div>
  );
}

export default User;
