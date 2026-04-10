export default function ThreeDotsMotif({ size = 'md', color = 'green' }) {
  const sizes = {
    sm: { container: 'w-8 h-8', dot1: 'w-1.5 h-1.5', dot2: 'w-2 h-2', dot3: 'w-2.5 h-2.5' },
    md: { container: 'w-12 h-12', dot1: 'w-2 h-2', dot2: 'w-3 h-3', dot3: 'w-4 h-4' },
    lg: { container: 'w-16 h-16', dot1: 'w-3 h-3', dot2: 'w-4 h-4', dot3: 'w-5 h-5' },
  }

  const colors = {
    green: 'bg-primary',
    cream: 'bg-primary-foreground',
    muted: 'bg-muted-foreground',
  }

  const s = sizes[size]
  const c = colors[color]

  return (
    <div className={`${s.container} relative`}>
      <div className={`${s.dot1} ${c} rounded-full absolute bottom-0 left-0`} />
      <div className={`${s.dot2} ${c} rounded-full absolute bottom-1/4 left-1/4`} />
      <div className={`${s.dot3} ${c} rounded-full absolute top-0 right-0`} />
    </div>
  )
}