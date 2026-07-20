import LandingPage from "@/features/landingPage/pages/LandingPage";
import type { RouteObject } from "react-router-dom";



export const routes: RouteObject[] = [

    {

        path: "/",
        element: <LandingPage />

    }

]