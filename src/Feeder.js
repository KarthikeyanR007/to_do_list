import React from "react";
function Feeder(){
    const year = new Date()
    return(
        <footer>Copyright &copy; {year.getFullYear()}</footer>
    )
}
export default Feeder;