import { useState } from 'react'
import Landing from './components/Landing'
import DayReveal from './components/DayReveal'
import Hearts from './components/Hearts'
import ValentineQuestion from './components/ValentineQuestion'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [showValentineQuestion, setShowValentineQuestion] = useState(false)

  const handleDayClick = (day) => {
    if (day.date === '2026-02-14') {
      setShowValentineQuestion(true)
      setSelectedDay(day)
    } else {
      setSelectedDay(day)
    }
  }

  const handleCloseReveal = () => {
    setSelectedDay(null)
  }

  const handleCloseValentine = () => {
    setShowValentineQuestion(false)
    setSelectedDay(null)
  }

  return (
    <div className="app">
      <Hearts />
      <Landing onDayClick={handleDayClick} />
      {selectedDay && !showValentineQuestion && (
        <DayReveal day={selectedDay} onClose={handleCloseReveal} />
      )}
      {showValentineQuestion && selectedDay && (
        <ValentineQuestion day={selectedDay} onClose={handleCloseValentine} />
      )}
    </div>
  )
}

export default App
