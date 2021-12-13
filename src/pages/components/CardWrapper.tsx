import { HTMLAttributes, MouseEventHandler } from 'react'

interface CardWrapperProps {
  attr?: HTMLAttributes<HTMLDivElement>
  className?: string
  children?: JSX.Element | JSX.Element[]
  onClick?: MouseEventHandler<HTMLDivElement>
  role?: string
}
const CardWrapper = ({
  attr,
  className,
  children,
  onClick,
  role
}: CardWrapperProps) => {
  return (
    <div
      onClick={onClick}
      {...attr}
      className={`bg-white rounded-md shadow-md px-5 py-4 max-w-full ${className}`}
      role={role}
    >
      {children}
    </div>
  )
}

export default CardWrapper
