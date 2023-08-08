import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
	size?: 'sm' | 'md' | 'lg'
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl shadow font-medium px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out',
				{
					'text-white bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'white',
					'px-5 py-2 text-sm': size === 'sm'
				},
				className
			)}
		>
			{children}
		</button>
	)
}
