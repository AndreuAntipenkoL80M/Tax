import React, { createContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';







var getReqList = [];
function loadData () {
  fetch('http://localhost:5000/test/')
  .then(
    function(response) {
      return response.json()
      })
  .then(data => {getReqList = data}
  )
  console.log(getReqList)
}
loadData();
export const reqVault = createContext()




export const Layout = () => {
  const [reqList, setReqList] = useState(getReqList);
  console.log(reqList);
  function updateData (){
    fetch('http://localhost:5000/test/')
    .then(
      function(response) {
        return response.json()
        })
    .then((data => setReqList(data)))
    .then(console.log(reqList))
  }

  //  export reqVault;

    return (
      <div>
        <reqVault.Provider value={reqList}>
          <nav>
            <Link onClick={updateData} to="/">Список заявок</Link>
            <Link onClick={updateData} to="/createReq">Создать заявку</Link>
            
          </nav>
  
        <Outlet />
        </reqVault.Provider>

      </div>
    )
  };
  
  export default Layout;