
import React, { useEffect, useState } from 'react';
import './App1.css';
import { APIURL, callApi } from './lib';

const App1 = () => {
    const [data, setData] = useState([]);
    const [showpopup, setShowpopup] = useState(null);
    const [userdata, setUserdata] = useState(null);

    useEffect(()=>{
        callApi("GET", APIURL, "", getData);
    },[]);

    function getData(res){
        setData(res);
    }

    function showUserInfo(user){
        setShowpopup(true);
        setUserdata(user);
    }

    function closeUserInfo(){
        setShowpopup(null);
    }
    const IMGURL = import.meta.env.BASE_URL;
    return (
      <div className='app'>
        <div className='header'>View Users</div>
        <div className='section'>
          <table border="2">
            <thead>
              <tr>
                <th style={{'width':'50px'}} >ID</th>
                <th style={{'width':'300px'}}>Name</th>
                <th style={{'width':'250px'}}>Username</th>
                <th style={{'width':'350px'}}>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((user)=>(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td><img src={IMGURL + "user.png"} alt="" onClick={() => showUserInfo(user)} /></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
        <div className='footer'>
          Copyright @ 2026. All rights reserved - Dhana Sree
        </div>
        {showpopup &&<div className='overlay'>
          <div className='popup'>
            <div className='pheader'>
            <h2>{userdata.name} - Details  </h2>
            <button onClick={()=>closeUserInfo()}>X</button>
            </div>
            <div className='psection'>
            <div className='box'>
            <p><span>User ID: </span>
            <span>{userdata.id}</span>
            </p>
            <p><span>Username: </span>
            <span>{userdata.name}</span>
            </p>
            <p><span>User Email: </span>
            <span>{userdata.email}</span>
            </p>  
            <p><span>User Address: </span>
            <span>{userdata.address.street}, {userdata.address.city} - {userdata.address.zipcode}</span>
            </p> 
             <p><span>Phone number: </span>
            <span>{userdata.phone}</span>
            </p>  
             <p><span> Website: </span>
            <span>{userdata.website}</span>
            </p>  
             <p><span>Company: </span>
            <span>{userdata.company.name}, {userdata.company.catchPhrase} </span>
            </p>  
            </div>
            </div>
            <div className='pfooter'>Copyright @ 2026. All rights reserved - Dhana Sree</div>
             </div>
          </div>}
        </div>

    );
  }
export default App1;