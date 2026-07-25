import { paletteTokens } from "@/context/theme/tokens/palette";

export const  softBorder = (opacity: number = 0.1, width: string = "1px ") => 
    `${width} solid rgba(${paletteTokens.borderBase}, ${opacity})`;
