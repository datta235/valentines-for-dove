import { motion, AnimatePresence } from 'framer-motion'

function DayReveal({ day, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="day-reveal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: day.gradient }}
      >
        <motion.div
          className="day-reveal-content"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="day-reveal__emoji">{day.emoji}</div>
          <h2 className="day-reveal__title">{day.title}</h2>
          <p className="day-reveal__date">
            {new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <p className="day-reveal__message">{day.message}</p>
          <button className="day-reveal__close" onClick={onClose}>
            Back to Timeline
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default DayReveal
