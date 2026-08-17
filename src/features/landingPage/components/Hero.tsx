import { Box, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Typography
                variant="h1"
                sx={(theme) => ({
                    color: theme.palette.text.primary
                })}
            >
                The future workforce is{" "}
                <br/>
                <span style={{ color: "#0077b6" }}>artificial.</span> 
            </Typography>
        </Box>
    )
};

export default Hero;