import { useContext } from "react"
import { ThemeContext } from "./context"

function Mybox(){

    const {theme, toggleTheme} = useContext(ThemeContext);
 
    return(
        <>
        <center style={{background: theme == "dark" ? "black" : "white", color: theme == "dark" ? "white" : "black"}}>
            <h3>This is my Box</h3>
            <button onClick={()=> toggleTheme()}>Change Theme</button>

        </center>
        </>
    )
}

export default Mybox


