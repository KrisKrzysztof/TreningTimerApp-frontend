import {TrainingEntity} from "types";
// import {useState} from "react";

interface Props {
    training: TrainingEntity;
}

export const TrainingTimer = (props: Props) => {
    // const [serie, setSerie] = useState<string[]>([]);
    //
    // setSerie(prevState => {
    //     prevState.push(props.training.exerciseOne);
    //     props.training.exerciseTwo ?
    //         prevState.push(props.training.exerciseTwo) : null;
    //     props.training.exerciseThree ?
    //         prevState.push(props.training.exerciseThree) : null;
    //     props.training.exerciseFour ?
    //         prevState.push(props.training.exerciseFour) : null;
    //     props.training.exerciseFive ?
    //         prevState.push(props.training.exerciseFive) : null;
    //     props.training.exerciseSix ?
    //         prevState.push(props.training.exerciseSix) : null;
    //     props.training.exerciseSeven ?
    //         prevState.push(props.training.exerciseSeven) : null;
    //     props.training.exerciseEight ?
    //         prevState.push(props.training.exerciseEight) : null;
    //     props.training.exerciseNine ?
    //         prevState.push(props.training.exerciseNine) : null;
    //     props.training.exerciseTen ?
    //         prevState.push(props.training.exerciseTen) : null;
    //     return prevState;
    // });

    return <div>

        [strona w budowie]

        <h1> Trening </h1>
        <h2> {props.training.name} </h2>

        <div className="div-start">
            <button className="btn btn-start"> Start!</button>
        </div>

        <div className="general-info">

            <h2 className="series-info"> ^^^ </h2>

            <h3 className="start-info"> Kliknij "Start!" aby rozpocząć. </h3>

            <div className="info pause-info hidden">

                <p> Czas na odpoczynek. </p>

                <div className="info-content">
                    <p className="pause-marker"> -= Pauza =- </p>
                    <p className="pause-counter"> Czekaj ... sekund </p>
                </div>

            </div>

            <div className="info dialog-info hidden">

                <p className="what-to-do"> A teraz robimy </p>

                <div className="info-content">
                    <p className="what-to-do-ask"> zrobione? </p>
                    <button className="btn btn-done">Jedziemy dalej!</button>
                </div>

            </div>

        </div>

        <div className="progress-table">
            <h2> --== Podgląd postępu ==-- </h2>

            {/*{props.training.numberOfSeries}*/}
            {/*<ul>*/}
            {/*{serie.map(el => <li>el</li> )}*/}
            {/*</ul>*/}


            {/*<div>*/}
            {/*    <div id="column-1" className="column">*/}
            {/*        <h3> Seria pierwsza </h3>*/}
            {/*        <p className="field"> Pompki standardowe </p>*/}
            {/*        <p className="field"> Pompki z podwyższeniem </p>*/}
            {/*        <p className="field"> Pompki szerokie </p>*/}
            {/*        <p className="field"> Brzuszki </p>*/}
            {/*    </div>*/}

            {/*    <div id="column-2" className="column">*/}
            {/*        <h3> Seria druga </h3>*/}
            {/*        <p className="field"> Pompki standardowe </p>*/}
            {/*        <p className="field"> Pompki z podwyższeniem </p>*/}
            {/*        <p className="field"> Pompki szerokie </p>*/}
            {/*        <p className="field"> Brzuszki </p>*/}
            {/*    </div>*/}
            {/*    <div className="exClear"></div>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <div id="column-3" className="column">*/}
            {/*        <h3> Seria trzecia </h3>*/}
            {/*        <p className="field"> Pompki standardowe </p>*/}
            {/*        <p className="field"> Pompki z podwyższeniem </p>*/}
            {/*        <p className="field"> Pompki szerokie </p>*/}
            {/*        <p className="field"> Brzuszki </p>*/}
            {/*    </div>*/}

            {/*    <div id="column-4" className="column">*/}
            {/*        <h3> Seria czwarta </h3>*/}
            {/*        <p className="field"> Pompki standardowe </p>*/}
            {/*        <p className="field"> Pompki z podwyższeniem </p>*/}
            {/*        <p className="field"> Pompki szerokie </p>*/}
            {/*    </div>*/}
            {/*    <div className="exClear"></div>*/}
            {/*</div>*/}

        </div>

    </div>
}