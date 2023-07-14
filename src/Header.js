import React from "react"

function Header(props){
    return(
        <h1 className="head">{props.title}</h1>
    )
}
Header.defaultProps = {
    title:"To do list"
}
export default Header