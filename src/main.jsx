import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Profile from './Components/ComA/ComA.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Profile username="nayan narola" age = "20" Hobby="Play Cricket,gaming,travelling" Skill = "Front-end Developer"  Address ="Surat Gujarat" Pincode =" 395004" Email="nayannarola123@gmail.com" Contact="9510392980"/>
  </React.StrictMode>,
)
