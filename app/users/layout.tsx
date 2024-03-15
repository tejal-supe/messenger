import getAllUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UserLayout({
    children}:{children:React.ReactNode}
){
    const users = await getAllUsers();

    return (
        <Sidebar>
        <div className="h-full">
            <UserList data={users}/>
            {children}
        </div>

        </Sidebar>
    )
}