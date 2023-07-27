import React,{useState} from "react"


const Tabs= ()=>{

    let [value, setvalue]= useState("Tab 1")
    return (
        <div>
            {
                <ul>
                    <li onClick={setvalue("Tab 1")}>Tab 1</li>
                    <li onClick={setvalue("Tab 2")}>Tab 2</li>
                    <li onClick={setvalue("Tab 3")}>Tab 3</li>
                </ul>
            }
            <p>This is the content for {value}.</p>

        </div>
    )
}

export default Tabs;