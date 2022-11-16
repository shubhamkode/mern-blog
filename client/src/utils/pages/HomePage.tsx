import React from "react";

const URL = "http://localhost:8000/api"

export default function HomePage() {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`${URL}/users`)
      const jsonData = await response.json()
      setUsers(jsonData)
    })()
  }, [])

  const handleAddUser = () => {

  }

  return (
    <div className="w-screen h-screen bg-orange-50 p-4">
      <div className="max-w-2xl sm:max-w-3xl mx-auto h-[100%] p-2">
        <div className="flex justify-end space-x-3">
          <button className="bg-slate-700 text-slate-100 py-1 px-3 rounded-md text-xl">Login</button>
          <button className="bg-blue-500 text-slate-100  py-1 px-3 rounded-md text-xl">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
