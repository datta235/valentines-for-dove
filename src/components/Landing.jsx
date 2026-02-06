import { motion } from 'framer-motion'
import DayCard from './DayCard'
import days from '../data/days'

function Landing({ onDayClick }) {
  return (
    <div className="landing">
      <motion.header
        className="landing-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="landing-title">
          Happy Valentine&apos;s Week, <span className="dove-name">Naana</span>
        </h1>
        <p className="landing-subtitle">
          Each day holds a special surprise, just for you
        </p>
      </motion.header>

      <div className="timeline">
        {days.map((day, index) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <DayCard day={day} onClick={onDayClick} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Landing
