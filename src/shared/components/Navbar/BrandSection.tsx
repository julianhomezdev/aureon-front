import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BrandSection = () => {

    return(
        
        <>
    
            <Box>

                <Typography
                
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={(theme) => ({

                        color: theme.palette.text.primary,
                        textDecoration: "none"

                    })}
                >
                        Aureon
                </Typography>


            </Box>
    
        </>
    )

}

export default BrandSection;