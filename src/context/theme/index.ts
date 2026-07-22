import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { typographyTokens } from "./tokens/typography";

export const theme = createTheme({

    palette,
    typography,
    components: {

        MuiCssBaseline: {

            styleOverrides: {

                body: {

                    fontFamily: typographyTokens.fontFamily.sans

                }

            }

        }

    }

})