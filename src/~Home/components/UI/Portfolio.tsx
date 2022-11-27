import React from 'react'
import './Portfolio.css'
import { LayoutGroup, motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import HangmanApp from '../../../00-Hangman/HangmanApp'
import NestedRenderer from '../../../01-Nested Display/NestedRenderer'
import Robots from '../../../02-Robots/Robots'
import Activities from '../../../03-Activities/Activities'
import Ladders from '../../../04-Ladders/Ladders'
import UsersApp from '../../../05-Users Context/UsersApp'
import TasksWithObjects from '../../../06-TasksWithObjects/TasksWithObjects'
import Sudoku from '../../../50-Sudoku/Sudoku'
import UnorderedListOfUsers from '../../../51-UnorderedListOfUsers/UnorderedListOfUsers'

export default function Portfolio() {
  const challenges = [
    {
      title: 'Hangman',
      description: 'Word guessing game',
      component: HangmanApp,
    },
    {
      title: 'Nested Display',
      description: 'Display nested data',
      component: NestedRenderer,
    },
    {
      title: 'Robots',
      description: 'Display nested data',
      component: Robots,
    },
    {
      title: 'Activities',
      description: 'Display nested data',
      component: Activities,
    },
    {
      title: 'Ladders',
      description: 'Display nested data',
      component: Ladders,
    },
    {
      title: 'Users Context',
      description: 'Display nested data',
      component: UsersApp,
    },
    {
      title: 'Tasks With Objects',
      description: 'Display nested data',
      component: TasksWithObjects,
    },
    {
      title: 'Sudoku',
      description: 'Display nested data',
      component: Sudoku,
    },
    {
      title: 'Unordered List Of Users',
      description: 'Display nested data',
      component: UnorderedListOfUsers,
    },
  ]
  return (
    <div className='section-wrapper portfolio-section'>
      <div className='section about d-flex flex-column align-items-center'>
        <h4>PORTFOLIO</h4>
        <div className='container'>
          <div className='row mx-auto row-cols-auto gap-3 justify-content-center'>
            <LayoutGroup>
              {challenges.map((challenge, index) => (
                <PortfolioCard
                  key={index}
                  title={challenge.title}
                  description={challenge.description}
                  component={challenge.component}
                  index={index}
                />
              ))}
            </LayoutGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
