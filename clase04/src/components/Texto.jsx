import { useState } from "react";


function Texto()
{
    const [resaltado,setResaltado]=useState(false);

    return(
        <div>
            <h2 onMouseOver={()=>setResaltado(true)} 
                onMouseOut={()=>setResaltado(false)}
                style={{
                    color: resaltado ? 'red' : 'blue',
                    transition:'color 0.3s ease',
                }}
            >Talento Tech 2025</h2>

        </div>
    )
}

export default Texto;