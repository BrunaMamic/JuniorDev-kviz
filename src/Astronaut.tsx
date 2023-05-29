import {memo} from 'react'

const AstronautMemo = memo(Astronaut)

function Astronaut(props:any) {
    console.log('Render');


    return(
        <div>
        <p>KRIVI: {props.kriviODG?.map((x:any) => (<span>{x}</span>))}</p>
      </div>
    )
}

export default Astronaut