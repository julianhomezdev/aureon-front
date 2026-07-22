import Navbar from "@/shared/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {


    return(

        <>

            <Navbar />


            <main>

                <Outlet />

            </main>
        
        
        </>

    )

}

export default MainLayout;