import getCurrentUser from "@/app/actions/getCurrentUser"
import DesktopSide from "./DesktopSide"
import MobileFooter from "./MobileFooter"

async function Sidebar({children}:{
    children:React.ReactNode,
}) {
    const currentUser = await getCurrentUser();
    console.log(currentUser,'in sidevar');
    
    return(
        <div className="h-full">
            <DesktopSide currentUser={currentUser!}/>
            <MobileFooter />

            <main className="lg:pl-20 h-full">
            {children}

            </main>
        </div>
    )
    
   
}

export default Sidebar