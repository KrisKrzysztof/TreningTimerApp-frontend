import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Training} from "./components/Training";
import {AddForm} from "./components/AddForm";
import {Header} from "./components/layout/Header";
import {MainPage} from "./components/MainPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/training" element={<Training/>}/>
                <Route path="/add" element={<AddForm/>}/>
            </Routes>
        </div>
    );
}

export default App;
