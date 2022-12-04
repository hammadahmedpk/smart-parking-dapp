// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Parking{
    // Model of a single parking spot
    struct ParkingSpot{
        uint id;
        bool isBooked;
        address bookedBy; 
    }

    // Model of a person booking the parking spot
    struct Person{
        string name;
        address _address;
        uint totalBookings;
    }

    // Total count of the parking spots
    uint public totalSpots;

    // Count of available free spots
    uint public availableSpots;
    
    // To store and access all the spots
    mapping(uint => ParkingSpot) public spots;

    // To store the people that have booked a spot
    mapping(uint => Person) public persons;
    uint public totalPersons;

    // Event that will be called whenever a spot is booked
    event spotBooked(
        uint id,
        bool isBooked,
        address bookedBy 
    );

    constructor() public{
        uint initialSpotsCount = 25; // Means there will be total 5 booking spots only
        for(uint i = 0; i < initialSpotsCount; i++){
            addSpot();
        }
        // Available spots in the beginning
        availableSpots = initialSpotsCount;
    }

    // To add a single parking spot
    // Making it private so that not everyone can add a spot
    function addSpot() private{
        spots[totalSpots] = ParkingSpot(totalSpots+1, false, address(0));
        totalSpots++; 
    }

    // To book a parking spot
    function bookSpot(uint id, string memory bookedBy) public{
        // Checking if the id of the spot is valid or not
        require(spots[id].id !=0, "The parking spot with the given id does not exist!");
        // Checking if the spot is free or not
        require(spots[id].isBooked != true, "The parking spot is already booked!");

        // Booking the spot
        spots[id].isBooked = true;
        spots[id].bookedBy = msg.sender;

        // Decrementing the count of the available spots
        availableSpots--;

        // Adding the details of the person that has booked the spot
        persons[totalPersons].name = bookedBy;
        persons[totalPersons]._address = msg.sender;
        persons[totalPersons].totalBookings++;
        totalPersons++;
        emit spotBooked(id, true, msg.sender);
    }
}