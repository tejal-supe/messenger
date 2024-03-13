import DesktopSide from "./DesktopSide"

async function Sidebar({children}:{
    children:React.ReactNode
}) {
    return(
        <div className="h-full">
            <DesktopSide />

            <main className="lg:pl-20 h-full">
            {children}

            </main>
        </div>
    )
    
   
}

export default Sidebar