import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Training} from "./components/Training";
import {AddForm} from "./components/AddForm";
import {Header} from "./components/layout/Header";
import {MainPage} from "./components/MainPage";
import {EditPage} from "./components/EditPage";
import {Modify} from "./components/Modify";
import {AddExercise} from "./components/AddExercise";
import {ModifyExercise} from "./components/ModifyExercise";

export const App = () => (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/edit" element={<EditPage/>}/>
            <Route path="/edit/add" element={<AddForm/>}/>
            <Route path="/edit/modify" element={<Modify/>}/>
            <Route path="/edit/exercise/add" element={<AddExercise/>}/>
            <Route path="/edit/exercise/modify" element={<ModifyExercise/>}/>

        </Routes>
    </div>
);
