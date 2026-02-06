import { useEffect, useState } from 'react'

function Hearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random()
      const heart = {
        id,
        left: Math.random() * 100,
        size: Math.random() * 14 + 8,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.3 + 0.1,
      }
      setHearts((prev) => [...prev.slice(-20), heart])
    }

    const interval = setInterval(createHeart, 1500)
    // Create a few initial hearts
    for (let i = 0; i < 6; i++) {
      setTimeout(createHeart, i * 300)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hearts-container" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}

export default Hearts
