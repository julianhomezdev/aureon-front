import { Box, Typography } from "@mui/material";

const BrandSection = () => {

    return(
        
        <>
    
            <Box>

                <Typography
                
                    variant="h6"
                    sx={(theme) => ({

                        color: theme.palette.text.primary

                    })}

                >

                    Aureon

                </Typography>


            </Box>
    
        </>
    )

}

export default BrandSection;