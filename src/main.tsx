import React from 'react'
import ReactDOM from 'react-dom/client'
import HangmanApp from './00-Hangman/HangmanApp'
import Typewriter from './01-Nested Display/NestedRenderer'
import Robots from './02-Robots/Robots'
import Activities from './03-Activities/Activities'
import Ladders from './04-Ladders/Ladders'
import UsersApp from './05-Users Context/UsersApp'
import TasksWithObjects from './06-TasksWithObjects/TasksWithObjects'
import Sudoku from './50-Sudoku/Sudoku'
import UnorderedListOfUsers from './51-UnorderedListOfUsers/UnorderedListOfUsers'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './~Home/Home'
import App from './App'
import DisplayNested from './01-Nested Display/DisplayNested'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
