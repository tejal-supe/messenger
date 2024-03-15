'uae client'

import { User } from "@prisma/client"
import UserSection from "./UserSection"

interface UserProps{
    data:User[]
}
const UserList : React.FC<UserProps>= ({data}) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
        <div className="px-5">
            <div className="flex-col">
                <div className="text-xl font-semibold text-stone-700 py-4">
                        Users
                </div>
            </div>
            {data.map((data)=>{
                return <UserSection key={data.id} data={data}/>
            })}
        </div>
    </aside>
  )
}

export default UserList