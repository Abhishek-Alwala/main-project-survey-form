import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './components/Login/Login';
import Register from './components/Register/Register';

export const ThemeContext = createContext()



function App() {

  const [themes, setThemes] = useState([])
  const [first, setFirst] = useState(0)
  const [data,setData]=useState([])
  const formdata = new FormData()
  const questionData = new FormData()

  const getData = () => {
    const token = sessionStorage.getItem('token')
    console.log(token)
    

    fetch("http://localhost:7171/createForm/list", {
      headers: { Authorization: token }
    })
      .then((res) => res.json())
      .then(data => setData(data.lists))

  }
  const value = { themes, setThemes, first, setFirst, formdata, questionData, getData,data,setData }

  return (
    <ThemeContext.Provider value={value}  >
      <div className="App">

        <BrowserRouter>
         
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/register" element={<Register/>} />

           


          </Routes>
        </BrowserRouter>

      </div>
    </ThemeContext.Provider>

  );
}

export default App;
