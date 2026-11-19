import type { TextareaHTMLAttributes } from 'react'

import { cn } from '@/lib/utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
	error?: string
}

export function Textarea({
	className,
	error,
	id,
	label,
	...props
}: TextareaProps) {
	const textareaId = id ?? label.toLowerCase().replace(/\s+/g, '-')

	return (
		<div className='grid gap-2'>
			<label
				className='text-sm font-medium text-brand'
				htmlFor={textareaId}
			>
				{label}
			</label>
			<textarea
				aria-describedby={error ? `${textareaId}-error` : undefined}
				aria-invalid={Boolean(error)}
				className={cn(
					'min-h-36 resize-y rounded-lg border bg-cream-light px-4 py-3 text-brand placeholder:text-brand/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
					error ? 'border-coral' : 'border-brand/20',
					className
				)}
				id={textareaId}
				{...props}
			/>
			{error && (
				<p
					className='text-sm text-coral'
					id={`${textareaId}-error`}
				>
					{error}
				</p>
			)}
		</div>
	)
}
