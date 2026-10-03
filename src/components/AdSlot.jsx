export default function AdSlot({ size='leaderboard', className='' }) {
  const dimensions = size === 'rectangle' ? '300 × 250' : '728 × 90'
  return (
    <div className={`ad-slot ${size} ${className}`} aria-label={`${dimensions} advertisement`}>
      {/* ADSTERRA PLACEHOLDER: paste your approved banner code inside this container. */}
      <span>{dimensions} AD SPACE</span>
    </div>
  )
}
