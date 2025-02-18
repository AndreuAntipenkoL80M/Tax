import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import {reqVault} from './layout.js'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './basic.css';
import MetroLogo from './pics/Metro.png';
import EditLogo from './pics/Edit.png';
import MapLogo from './pics/Map_Pin.png';


function ReqList () {

    


    const reqList = useContext(reqVault);
    console.log (reqList,"asd")
    const [reqss, setReqss] = useState(reqList);
    return (<div>{
        reqList.map((request) => {
            console.log(request);
            return(
            <div className='particularReq'>
                <p>Дата Публикации: {request.openDate}</p>
                <Link to={`/editReq/${request.id}`}><img src={EditLogo}/></Link>
                <h1>{request.vacancy}</h1>
                <p><img src={MapLogo}/>{request.adress}</p>
                <p>От {request.salaryFrom} {request.salary}</p>
                <p>Требуемый опыт <span style={{color: '#4C73E3', fontSize: 20}}>{request.experience} года</span></p>
                <p> <img src={MetroLogo}/> {request.station}</p>
                <Outlet/>
            </div>
            )
        })
    }</div>)


}


export default ReqList;