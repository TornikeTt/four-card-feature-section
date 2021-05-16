import React from "react"
import { boxDate } from "./boxDate.js"

function Boxs() {

    const show = boxDate.map((data) => { 
        return ( 
            <div className={ data.title } key={data.id}>
                <div className={ "topColor" + data.id } ></div>
                <div className="informatioin">
                    <h3>{ data.title }</h3>
                    <p>{ data.paragraph }</p>
                    <img 
                    className="image" 
                    src={ data.image } 
                    alt="grid boxses" />
                </div>
            </div>
        )
    })

    return (
    <div className="grid-container">
            {show}
        </div>
    )

}

export default Boxs
