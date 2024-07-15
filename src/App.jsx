import { useState } from 'react'
import viteLogo from '/vite.svg'
import './style/App.css'
import './style/Form.css'

import Content from './components/Content.jsx'

function App() {
  return (
    <>
    <header>
      <h1>CV Maker</h1>
    </header>
    <Content />
    <footer>
      <p>Made by <a href="https://www.github.com/Shalakushka">@Shalakushka</a></p>
    </footer>
    </>
  )
}

export default App
