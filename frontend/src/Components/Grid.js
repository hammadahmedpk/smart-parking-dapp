import React from 'react';
import { useState, useEffect } from 'react';
import Spot from './Spot';

const Grid = ({
    grid,
    handleGridSize,
    inputCells,
    setCells,
    inputRows,
    setRows,
    currentAccount,
    contract
}) => {

    const [totalSpots, setTotalSpots] = useState(0);
    const [spot, setSpot] = useState(0);

    // To get the count of total spots
    const getTotalSpots = async () => {
        var spots = await contract.methods.totalSpots().call();
        setTotalSpots(spots);
    }

    // To get a single spot
    const getSpot = async (x) => {
        return await contract.methods.spots(x).call();
    }

    const row = 5
    // const stateMatrix = Array.from(Array(row), () => new Array(row))

    const [spotMatrix, setSpotMatrix] = useState(false)

    const setStateMatrix = async () => {
        console.log("in setStatee matrix")
        var tempSpotMat = Array.from(Array(row), () => new Array(row))
        // var tempSpotMat = spotMatrix.map((arr) => {
        //     return arr.slice();
        // });
        var idx = 0
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < row; j++) {
                tempSpotMat[i][j] = await getSpot(idx)
                // console.log(idx, "before increment", tempSpotMat[i][j].id)
                idx++
            }
        }
        console.log("In Temp Spot: ", tempSpotMat)
        setSpotMatrix(tempSpotMat)
    }


    useEffect(() => {
        if(contract !== null) {
            console.log("calling set matrix")
            setStateMatrix();
        }
    }, [contract]);

    

    const cells = new Array(grid.cells).fill(0);
    const rows = new Array(grid.rows).fill(0);

    var selectedSlot = 0;
    const [selected, setSelected] = useState(0);
    // To handle bookings
    const handleBooking = async() => {
        await contract.methods.bookSpot(selected-1, "User").send({from: currentAccount}).on('transactionhash', () =>{console.log("Succesful")});
    }

    const handleClick = (e) => {
        // print the index of the array of the selected cell
        const item = e.target;
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
            selectedSlot = 0;
            setSelected(selectedSlot);
        } else {
            item.classList.add('selected');
            selectedSlot = item.getAttribute('data-index')
            setSelected(selectedSlot);
        }
        // const totalSpots = contract.methods.totalSpots().call();
        // console.log("Total Spots: ", totalSpots)
        // getTotalSpots();
        // console.log("Spot 23: ", spot.id)
        // console.log("Stuff: " + stateMatrix[4][3].id)
    };

    var indexVal = 0;
    return (
        <main>
            <h1 class="mt-5">Parking Slots</h1>
            {
                rows.map((row, index1) => (
                    <ul className="row" key={index1}>
                        {cells.map((cell, index2) => (
                            <Spot i={index1} j={index2} spotMatrix={spotMatrix} handleClick={handleClick} indexVal={++indexVal}/>
                            // <li key={index} className="item" onClick={handleClick} data-index={++indexVal} />
                        ))}
                    </ul>
                ))}

            <div class="flex justify-center">
                <div class="flex-item">
                    <label htmlFor="cells">Cells:</label>
                    <input
                        type="text"
                        placeholder="Define cells in the row"
                        id="cells"
                        value={inputCells}
                        onChange={(e) => setCells(e.target.value)}
                    />
                </div>

                <div class="flex-item ml-2">
                    <label htmlFor="rows">Rows:</label>
                    <input
                        type="text"
                        placeholder="Define rows"
                        id="rows"
                        value={inputRows}
                        onChange={(e) => setRows(e.target.value)}
                    />
                </div>
            </div>
            <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm focus:outline-none" onClick={handleGridSize}>Change Grid</button>
            <p>Slot Selected: {selected}</p>
            <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm focus:outline-none" onClick={handleBooking}>Book your slot!</button>
        </main>
    );
};

export default Grid;
