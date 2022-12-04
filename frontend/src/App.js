// import './App.css';
import {useEffect, useState} from 'react';
import Web3 from 'web3';
import {Routes, Route} from 'react-router-dom';
import Parkingabi from './contracts/Parking.json';
import Home from './Components/Home';
import Booking from './Components/Booking';
import MainGrid from "./Components/MainGrid";

function App() {
  useEffect(() => {
    LoadWeb3();
    LoadBlockchaindata();
  }, []);

  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState(null);

  // For Loading Web3 
  const LoadWeb3 = async() => {
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else{
      window.alert("Non-Ethereum Browser Detected! You should consider trying MetaMask!");
    }
  }

  const LoadBlockchaindata = async() => {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentAccount(account);
    
    const networkID = await web3.eth.net.getId();

    const networkData = Parkingabi.networks[networkID];

    if(networkData){
      const parking = new web3.eth.Contract(Parkingabi.abi, networkData.address);
      setContract(parking);
      console.log(parking);
      // const totalSpots = await parking.methods.totalSpots().call();
      // console.log(totalSpots)
    }
    else
    {
      window.alert("Smart Contract not deployed to detected network!");
    }
  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
				<Route exact path="/booking" element={<Booking />} />
        <Route exact path="/grid" element={<MainGrid currentAccount={currentAccount} contract={contract} />} />
      </Routes>
      {/* <GameView/> */}
      {/* <Home/> */}

      {/* <p>{currentAccount}</p> */}

     {/* <Footer/> */}
    </div>
  );
}

export default App;
