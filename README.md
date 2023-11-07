# Welcome to README
## for frontend part of `Training Timer APP` project !
<br/><br/>

<img src='./src/assets/logo.gif' width="230" align="right" alt="logo">

 ### Table of Contents
  <ol>
    <li><a href="#at-first-a-few-words-about-me">About me</a></li>
    <li><a href="#introducing-the-training-timer-app">Project introduction</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#project-built-with">Built With</a></li>
    <li><a href="#how-to-run">How to run</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>

## At first a few words `about me`
This is my first such a big project ever where idea, implementation and execution are 100% mine. Including [backend of this project](https://github.com/KrisKrzysztof/TreningTimerApp-backend), and it works only with this backend and his database.\
Please note that user interface is prepared in Polish language, but in future I plan to make it also in English.

About a year ago I have started learning of programming with [MegaK.pl](https://www.megak.pl/), this was my first serious adventure with programming even though I have been somewhat interested in topics related to computer science all my life, so... please appreciate this project ;)

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>

## Introducing the `Training Timer App`
In Short: Training Timer App is an application used to measure the pause time in training between specific exercises.

The application allows you to edit and add new trainings where you can insert own training name, description, number of exercises series, names of exercises and pause time after every exercise. 

There are **three main parts** of the application: 
* ***Main page*** - Introducing shortly the application, and shows a list of trainings (stored in database and available in the whole app).
* ***Training page*** - This is the main functionality of the app. Here user can choose a training from list of available training and just start training. After choosing any training there will show interface of the training. At the beginning of course you have to do first exercise, and then user approves that exercises is done. Then will show the timer where starts countdown to the end of pause. When pause is finished, training continues with the next exercise. Below you can find a preview of the training his description. 
* ***Edit Page*** - On this part of the website user sees the list of available trainings with buttons "Edit" and "Delete". As is simple to predict these buttons allows deleting the training or editing (user is redirected to a form where is possible to change every detail of the training). Furthermore, it is also possible to add a completely new training (user is redirected to also to suitable, empty form).

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>

## Screenshots

### Main page
![Main page](./screens/MainPageZoomOutpng.jpg)
### Training choosing
![Training choosing](./screens/TraninigChooice.jpg)
### Training timer
![Training timer](./screens/TraninigTimer.jpg)
### Training task
![Training task](./screens/TraninigTimerTask.jpg)
### Edit page
![Edit page](./screens/EditPage.jpg)
### Adding new training
![Adding new training](./screens/AddNewTraining.jpg)
### Modifying training
![Modifying training](./screens/EditTraining.jpg)

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>

## Project built with
#### Technology used in this project (both frontend and [backend](https://github.com/KrisKrzysztof/TreningTimerApp-backend)):

* [Node.js](https://nodejs.org)
* [Typescript](https://www.typescriptlang.org)
* [React.js](https://react.dev)
    * [React DOM](https://www.npmjs.com/package/react-dom)
    * [React Router DOM](https://github.com/remix-run/react-router#readme)
    * [React scripts](https://github.com/facebook/create-react-app#readme)
    * [customize-cra and react-app-rewired](https://www.npmjs.com/package/customize-cra)
* [UUID](https://www.npmjs.com/package/uuid)
* [Express.js](https://expressjs.com/)
    * [express-async-errors](https://github.com/davidbanham/express-async-errors#readme)
    * [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
* [mysql2](https://github.com/sidorares/node-mysql2#readme)
* [cors](https://github.com/expressjs/cors#readme)
* [TS-node](https://typestrong.org/ts-node)

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>

## How to run
The Training Timer App was released on [Network Manager server](https://netcloud24.com/pl/index) on this address: https://trainingtimer.networkmanager.pl/ 
### However, you can just use git to clone this repository with this command:
### `git clone https://github.com/KrisKrzysztof/TreningTimerApp-frontend.git`
#### then you can build your own production version using scripts and run ths app locally with following scripts:
### `npm start`
Just like basic React instruction say:\
it runs the app in the development mode.\
When you open http://localhost:3000 in the browser,\
the page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
And this version you can release on any server.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>

## Contact
You can contact autor of this project via [facebook](https://www.facebook.com/krzysztof.ivan) messenger.

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>

## Acknowledgments
#### Special thanks for MegaK team:
### Bartłomiej Borowczyk, Jakub Król and Marcin Grygierek
who had a major impact on my introduction and development in the world of programming.

<p align="right">(<a href="#welcome-to-readme">back to top</a>)</p>
