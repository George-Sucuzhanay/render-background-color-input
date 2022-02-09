import { useState } from "react";

function HomePage(){
    const [bkcolor, setBkcolor] = useState("black");

    const settingBkcolor = (userColor) => {
        if(userColor.target.value == ""){
            setBkcolor(bkcolor)
        }
        else{
            setBkcolor(userColor.target.value)
        }
    }

    return(
        <div className="mainDiv">
            <div className="myDiv" style={{backgroundColor: bkcolor}}>
            <input className="input-field" placeholder="Enter a color" onChange={(bkcolor)=> settingBkcolor(bkcolor)}/>

            </div>
        </div>

    )

}
export default HomePage;