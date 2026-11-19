import type { InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
}

export function Input({ className, error, id, label, ...props }: InputProps) {
	const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

	return (
		<div className='grid gap-2'>
			<label
				className='text-sm font-medium text-brand'
				htmlFor={inputId}
			>
				{label}
			</label>
			<input
				aria-describedby={error ? `${inputId}-error` : undefined}
				aria-invalid={Boolean(error)}
				className={cn(
					'min-h-12 rounded-lg border bg-cream-light px-4 text-brand placeholder:text-brand/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
					error ? 'border-coral' : 'border-brand/20',
					className
				)}
				id={inputId}
				{...props}
			/>
			{error && (
				<p
					className='text-sm text-coral'
					id={`${inputId}-error`}
				>
					{error}
				</p>
			)}
		</div>
	)
}
