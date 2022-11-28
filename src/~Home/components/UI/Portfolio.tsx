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
import WordByWord from '../../../20-WordByWord/WordByWord'
import ProjectCarousel from './ProjectCarousel'

import { BiLinkExternal } from 'react-icons/bi'

export default function Portfolio() {
  const challenges = [
    {
      title: 'Hangman',
      description: 'Word guessing game',
      component: HangmanApp,
    },
    {
      title: 'Nested Display',
      description: 'This simply displays a given nested object entries Recursively.',
      component: NestedRenderer,
    },
    {
      title: 'Robots',
      description: 'Generate a robot picture from an API call then append it to the page',
      component: Robots,
    },
    {
      title: 'Activities',
      description: 'Fetch a random activity from an API call with expandable list',
      component: Activities,
    },
    // {
    //   title: 'Ladders',
    //   description: 'Display nested data',
    //   component: Ladders,
    // },
    {
      title: 'Users Context',
      description: "Randomly flip a user's status ",
      component: UsersApp,
    },
    {
      title: 'Tasks With Objects',
      description: 'Display a set of tasks under categories and marking them done/undone by clicking',
      component: TasksWithObjects,
    },
    {
      title: 'Sudoku',
      description: 'Play and solve a board of Sudoku',
      component: Sudoku,
    },
    {
      title: 'Unordered List Of Users',
      description: 'Sort an array of objects of users by age',
      component: UnorderedListOfUsers,
    },
    {
      title: 'Word By Word',
      description: 'Word By Word',
      component: WordByWord,
    },
  ]
  return (
    <div className='section-wrapper portfolio-section'>
      <div className='section about d-flex flex-column align-items-center'>
        <h4>PORTFOLIO</h4>
        <div className='container'>
          <div className='row col-11 mx-auto text-center'>
            <h3 className='text-center mb-4'>
              <a
                href='https://dream-wed.onrender.com/'
                target='_blank'
                style={{ textDecoration: 'none', color: '#ccc' }}>
                Featured Project <BiLinkExternal style={{ color: 'var(--color-primary)' }} />
              </a>
            </h3>
            <p>
              I built this project help users manage their wedding expenses and tasks. <br />
              It has 3 main features: Budget manager, todo list and invitation maker. I used React, Firebase and
              Bootstrap.
            </p>
          </div>
          <ProjectCarousel />
          <h5 className='text-center my-5'>Some other React projects I built </h5>
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
