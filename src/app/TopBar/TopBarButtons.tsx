import React from "react";

//Interfaz (Basicamente esto es una estrtructura)
interface TBButtons {
    button_text: string;
}

//Ahora se declaran los botones en si.
function TopBarButtons({button_text}:TBButtons){
    return(
        <button id='TopBarButton'>{button_text}</button>
    );
}

export default TopBarButtons;
