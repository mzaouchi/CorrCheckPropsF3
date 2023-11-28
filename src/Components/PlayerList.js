import players from "../players"
import PlayerCard from "./PlayerCard"

const PlayerList=()=>{
    return(
        <div>
            <h1>PlayerList Component</h1>
            <div className="maher">
            {
                players.map((el,i,t)=> <PlayerCard key={i} el={el}/>  )
            }
            </div>
        </div>
    )
}

export default PlayerList