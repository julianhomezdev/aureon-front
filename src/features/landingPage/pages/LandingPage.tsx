import { Box, Typography } from "@mui/material";
import Hero from "../components/Hero";
import LandingActions from "../components/LandingActions";

const LandingPage = () => {
    return(
        <Box
            component="main"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100vw",
                height: "100vh"
            }}
        >
            <Box
                component="section"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    px: 2,
                    width: "50%",
                }}
            >
                <Hero />
                <Typography
                    variant="body1"
                    sx={(theme) => ({
                        color: theme.palette.text.primary
                    })}
                >
                    Build AI Employees that understand your knowledge, procedures and systems — <br/>
                    then work like your team across chat, WhatsApp, email, phone and video. <br/>One 
                    shared memory, every channel.
                </Typography>
            </Box>
            <Box
                component="section"
            >
                <LandingActions />
            </Box>
            <Box
                component="section"
            >
                <Typography
                    variant="body2"
                    sx={(theme) => ({
                        color: theme.palette.text.secondary,
                        mt:2
                        
                    })}>
                        No code required. Deploy in minutes - Enterprise-grade security
                </Typography>
            </Box>
           
        </Box>
    )
};

export default LandingPage; 