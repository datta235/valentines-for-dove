import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ValentineQuestion({ day, onClose }) {
  const [answered, setAnswered] = useState(false)
  const [noPos, setNoPos] = useState(null)
  const [noMoveCount, setNoMoveCount] = useState(0)
  const containerRef = useRef(null)

  const noMessages = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Please?',
    'Pretty please?',
    'With a cherry on top?',
    'You are breaking my heart...',
    'I am gonna cry...',
    'Fine, click Yes!',
  ]

  const moveNoButton = useCallback(() => {
    const padding = 20
    const btnWidth = 140
    const btnHeight = 50
    const maxX = window.innerWidth - btnWidth - padding
    const maxY = window.innerHeight - btnHeight - padding

    const newX = Math.random() * maxX + padding
    const newY = Math.random() * maxY + padding

    setNoPos({ x: newX, y: newY })
    setNoMoveCount((prev) => prev + 1)
  }, [])

  const handleYes = () => {
    setAnswered(true)
  }

  const handleClose = () => {
    onClose()
  }

  const currentNoText = noMessages[Math.min(noMoveCount, noMessages.length - 1)]

  return (
    <AnimatePresence>
      <motion.div
        className="valentine-question-overlay"
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              className="valentine-question-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.div
                className="valentine-question__emoji"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {day.emoji}
              </motion.div>

              <h1 className="valentine-question__title">
                Will you be my Valentine, <span className="dove-name">Naana</span>?
              </h1>

              <div className="valentine-question__buttons">
                <motion.button
                  className="valentine-question__yes"
                  onClick={handleYes}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Yes!
                </motion.button>

                {!noPos ? (
                  <motion.button
                    className="valentine-question__no"
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    whileHover={{ scale: 1.05 }}
                  >
                    {currentNoText}
                  </motion.button>
                ) : null}
              </div>

              {noPos && (
                <motion.button
                  className="valentine-question__no valentine-question__no--floating"
                  style={{ left: noPos.x, top: noPos.y }}
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {currentNoText}
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              className="valentine-question__celebration"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="valentine-question__big-heart"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                ❤️
              </motion.div>

              <motion.h1
                className="valentine-question__yay-title"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Yay!!!
              </motion.h1>

              <motion.p
                className="valentine-question__yay-subtitle"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I knew you&apos;d say yes!
              </motion.p>

              <motion.p
                className="valentine-question__message"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {day.message}
              </motion.p>

              <motion.button
                className="valentine-question__close"
                onClick={handleClose}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Timeline
              </motion.button>

              {/* Mini celebration hearts */}
              <div className="valentine-question__confetti">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="valentine-question__confetti-heart"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 0,
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 300,
                      y: (Math.random() - 0.5) * 300,
                      opacity: [1, 1, 0],
                      scale: [0, 1.5, 0.5],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      delay: Math.random() * 0.5,
                      ease: 'easeOut',
                    }}
                  >
                    {['❤️', '💕', '💖', '💗', '✨'][Math.floor(Math.random() * 5)]}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default ValentineQuestion
