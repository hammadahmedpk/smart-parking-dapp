import { elementAcceptingRef } from '@mui/utils'
import React from 'react'

const Spot = ({ spotMatrix, handleClick, indexVal, i, j }) => {

    const index1D = (i * 6) + j

    console.log("In spot, matr: ", typeof spotMatrix)
    console.log("i,j: ", i, j)

    if(typeof spotMatrix === 'object') {
        console.log("booked ka saman")
        console.log(spotMatrix[i][j].isBooked)
    }
    if (spotMatrix && typeof spotMatrix[i][j] === 'object' && spotMatrix[i][j].isBooked) {
        return (
            <div>
                <li className="item" onClick={handleClick} data-index={indexVal} />
            </div>
        )
    }
    else {
        return (
            <div>
                <li className="item1" onClick={handleClick} data-index={indexVal} />
            </div>
        )
    }


}

export default Spot