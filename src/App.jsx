import { useState } from 'react'
import Home from './Pages/Home.jsx'
import Learn from './Pages/Learn.jsx'
import Practice from './Pages/Practice.jsx'
import Quiz from './Pages/Quiz.jsx'
import About from './Pages/About.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  let pageToDisplay
  switch (currentPage) {
    case 'home':
      pageToDisplay = <Home setCurrentPage={setCurrentPage} />
      break
    case 'learn':
      pageToDisplay = <Learn />
      break
    case 'practice':
      pageToDisplay = <Practice />
      break
    case 'quiz':
      pageToDisplay = <Quiz />
      break
    case 'about':
      pageToDisplay = <About />
      break
    default:
      pageToDisplay = <Home setCurrentPage={setCurrentPage} />
  }

  

  return (
    <div className="app">
      <h1 className="logo">Decimal Learning</h1>
      <nav className="navbar">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('learn')}>Learn</button>
        <button onClick={() => setCurrentPage('practice')}>Practice</button>
        <button onClick={() => setCurrentPage('quiz')}>Quiz</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
      </nav>
      {pageToDisplay}
    </div>
  )
}

export default App
