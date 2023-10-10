import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Training} from "./components/Training/Training";
import {Add} from "./components/edit/Add";
import {Header} from "./components/layout/Header";
import {MainPage} from "./components/layout/MainPage";
import {EditPage} from "./components/edit/EditPage";
import {Modify} from "./components/edit/Modify";
import {AddExercise} from "./components/edit/AddExercise";
import {ModifyExercise} from "./components/edit/ModifyExercise";

export const App = () => (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/edit" element={<EditPage/>}/>
            <Route path="/edit/add" element={<Add/>}/>
            <Route path="/edit/modify" element={<Modify/>}/>
            <Route path="/edit/exercise/add" element={<AddExercise/>}/>
            <Route path="/edit/exercise/modify" element={<ModifyExercise/>}/>
        </Routes>
    </div>
);
