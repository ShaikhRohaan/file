import React , {useState} from 'react'
import ConectWallet from '../ConnectWallet/index'
import MMITTokken from '../MMITTokken/index'
import Task from '../Task/index'
import ROADMAP from '../RoadMap/index'
import {useLocation} from 'react-router-dom';


const Home = () => {
 
  // const location = useLocation();
  // var key = location.state;
  // console.log(key);

  return (
    <div>
      <ConectWallet />
      <MMITTokken />
      <Task />
      <ROADMAP />
    </div>
  )
}

export default Home
