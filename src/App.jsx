import { useState } from 'react'

import './App.css'
import { PokemonList } from './components/PokemonList'

function App() {
  

  return (
    <div className='container'>
            <h1 className='title'>Pokemon</h1>
           <PokemonList />
    
    </div>
  )
}

export default App
