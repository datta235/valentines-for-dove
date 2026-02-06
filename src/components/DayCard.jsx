function DayCard({ day, onClick }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dayDate = new Date(day.date + 'T00:00:00')
  const isUnlocked = dayDate <= today

  const handleClick = () => {
    if (isUnlocked) {
      onClick(day)
    }
  }

  return (
    <div
      className={`day-card ${isUnlocked ? 'day-card--unlocked' : 'day-card--locked'}`}
      onClick={handleClick}
      role="button"
      tabIndex={isUnlocked ? 0 : -1}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="day-card__emoji">
        {isUnlocked ? day.emoji : '🔒'}
      </div>
      <div className="day-card__info">
        <h3 className="day-card__title">{day.title}</h3>
        <p className="day-card__date">
          {new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      {!isUnlocked && <div className="day-card__shimmer" />}
    </div>
  )
}

export default DayCard
