import { Box, Button, Typography } from "@mui/material";

const LandingActions = () => {

    return(
        <Box
            sx={{
                display: "flex",
                mt:4
            }}
        >
            <Button
                sx={(theme) => ({
                    bgcolor: theme.palette.primary.main,
                    px: 3
                })}
            >
                <Typography
                    sx={(theme) => ({
                        color: theme.palette.text.primary
                    })}
                >
                    Create your first AI Employee
                </Typography>
                
            </Button>
        </Box>
    )
};

export default LandingActions;