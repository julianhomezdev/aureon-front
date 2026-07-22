import type { NavigationItem } from "@/shared/types/navigationTypes";
import { Box, Link } from "@mui/material";

export type NavigationSectionProps = {

    navigationItems: NavigationItem[];

}

const NavigationSection = ({ navigationItems }: NavigationSectionProps ) => {

    return(

        <>
        

            <Box

                component="ul"
                
                sx={{
                    display: "flex",
                    listStyle: "none",
                    justifyItems: "space-between",
                    gap: 2
                }}

            >


                {navigationItems

                    .filter((item : NavigationItem) => item.isEnable)
                    .map((item : NavigationItem) => (

                        <Box
                            component="li"
                            key={item.id}
                        >

                            <Link

                                href={item.href}
                                underline="none"
                                sx={(theme) => ({

                                    color: theme.palette.text.primary

                                })}
                            >

                                {item.label}

                            </Link>

                        </Box>

                    ))
                
                }



            </Box>

        
        </>

    )

};

export default NavigationSection;