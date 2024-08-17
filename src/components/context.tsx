import { createContext } from "react";

export type theme = "light" | "dark";

interface ThemeData{
    theme: theme,
    toggleTheme: () => void
}
 export const ThemeContext = createContext<ThemeData>({
                                            theme: "light",
                                            toggleTheme: () => {}
                                            })

