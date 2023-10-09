import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Training} from "./components/Training";
import {Add} from "./components/Edit/Add";
import {Header} from "./components/layout/Header";
import {MainPage} from "./components/MainPage";
import {EditPage} from "./components/Edit/EditPage";
import {Modify} from "./components/Edit/Modify";
import {AddExercise} from "./components/Edit/AddExercise";
import {ModifyExercise} from "./components/Edit/ModifyExercise";

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
