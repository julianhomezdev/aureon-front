import { Box } from "@mui/material";
import BrandSection from "./BrandSection";
import NavigationSection from "./NavigationSection";
import { navigationItems } from "@/shared/config/navigation";
import { softBorder } from "@/shared/styles/borders/commonBorders";

const Navbar = () => {

    return(
    
    <>
    
        <Box

            component="nav"
            sx={{
                
                display: "flex",
                position: "fixed",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100px",
                
            }}  
        
        >
            
            <Box    

                sx={(theme) => ({

                    display: "flex",
                    width: "60%",
                    height: "50px",
                    borderRadius: 999,
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 5,
                    border: softBorder(0.1)


                })}
            
            

            >

                <BrandSection />
                
                <NavigationSection navigationItems={navigationItems}/>





            </Box>

        

        </Box>

    
    </>)

}


export default Navbar;