
import React from 'react'
import { config } from '../src'
import { withContext  } from 'recompose'
import Header from './Header'
import Features from './Features'
import Usage from './Usage'
import Examples from './Examples'
import Cta from './Cta'

const Index = () => (
  <div>
    <Header />
    <Usage />
    <Features />
    <Examples />
    <Cta />
  </div>
)

export default Index

