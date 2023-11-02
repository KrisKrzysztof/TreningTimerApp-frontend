import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Training} from "./components/pages/Training/Training";
import {Add} from "./components/pages/EditPage/Add/Add";
import {Header} from "./components/layout/Header/Header";
import {MainPage} from "./components/pages/MainPage/MainPage";
import {EditPage} from "./components/pages/EditPage/EditPage";
import {Modify} from "./components/pages/EditPage/Modify/Modify";
import {apiUrl} from "./config/api";
import { TrainingEntity } from 'types';
import {Footer} from "./components/layout/Footer/Footer";

export const App = () => {
    const [trainings, setTrainings] = useState<TrainingEntity[]>([]);

    const refreshTrainingsList = () => {
        (async () => {
            setTrainings([]);
            const res = await fetch(`${apiUrl}/trainings`);
            const data = await res.json();
            setTrainings(data);
        })();
    };

    useEffect(() => {
        refreshTrainingsList();
    }, []);


    return <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage
                trainingList={trainings}
                onListChange={refreshTrainingsList}
            />}/>
            <Route path="/training" element={<Training
                trainingList={trainings}
                onListChange={refreshTrainingsList}
            />}/>
            <Route path="/edit" element={<EditPage
                trainingList={trainings}
                onListChange={refreshTrainingsList}
            />}/>
            <Route path="/edit/add" element={<Add/>}/>
            <Route path="/edit/:id" element={<Modify/>}/>
        </Routes>
        <Footer/>
    </div>
};
