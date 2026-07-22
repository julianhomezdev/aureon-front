import LandingPage from "@/features/landingPage/pages/LandingPage";
import MainLayout from "@/shared/layouts/mainLayout/MainLayout";
import type { RouteObject } from "react-router-dom";



export const routes: RouteObject[] = [


    {


        element: <MainLayout />,
        children: [


            {


                path: "/",
                element: <LandingPage />
            }

        ]

    },
]