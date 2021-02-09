import { createContext } from "react";
// 1st way
// const ThemeContext : React.Context<(string | (()=>void))[]> = createContext(["green", () => {}]);

// 2nd way
const ThemeContext = createContext<[string, ((theme: string)=>void)]>(["green", () => {}]);

export default ThemeContext;
