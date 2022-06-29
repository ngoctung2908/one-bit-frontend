import { forwardRef } from 'react'

interface BtnPropsWithChildren {}

interface BtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BtnPropsWithChildren {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  outline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

type ButtonRef = React.ForwardedRef<HTMLButtonElement>

const style = {
  default: `text-white rounded-[3px] font-bold leading-6 tracking-[1px] shadow flex items-center justify-center gap-x-2 transition ease-in duration-200`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-[14px] py-2',
    md: 'px-[18px] py-2.5',
    lg: 'px-7 py-4',
  },
  color: {
    primary: {
      bg: `bg-accent-dark-2 hover:bg-accent-dark-0 focus:focus-shadow`,
      outline: `bg-transparent border border-solid border-neutral-8 focus:focus-shadow`,
    },
  },
}

const Button = forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      outline = false,
      size = 'md',
      ...props
    }: BtnProps,
    ref: ButtonRef
  ) => (
    <button
      ref={ref}
      {...props}
      type="button"
      disabled={disabled}
      className={`${className}
        ${disabled ? style.disabled : ''} ${style.sizes[size]} 
        ${style.default}
        ${outline ? style.color.primary.outline : style.color.primary.bg}`}
    >
      {children}
    </button>
  )
)

Button.displayName = 'Button'

export default Button
