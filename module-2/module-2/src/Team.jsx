import { useState } from "react"

export default function Team(){

    const [team,CountTeam]=useState(11);

    const HandleAdd=()=>{
        const NewTeam=team+1;
        CountTeam(NewTeam)
    }

    const HandleRemove=()=>{
        const NewTeam=team-1;
        CountTeam(NewTeam)
    }

    const DivStyle={
        border:'2px solid purple',
        padding:'20px',
        margin:'20px',
        borderRadius:'20px'
    }
        return (
            <div style={DivStyle}>
                <h3>Players:{team}</h3>
                <button onClick={HandleAdd}>Add</button>
                <button onClick={HandleRemove} style={{marginLeft:'20px',background:'red'}}>Remove</button>

            </div>
        )
}