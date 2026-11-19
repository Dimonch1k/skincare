'use client'

import { useId, useState } from 'react'

import { cn } from '@/lib/utils/cn'

export interface AccordionItem {
	answer: string
	question: string
}

interface AccordionProps {
	className?: string
	items: AccordionItem[]
}

export function Accordion({ className, items }: AccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0)
	const id = useId()

	return (
		<div className={cn('grid gap-3', className)}>
			{items.map((item, index) => {
				const isOpen = index === openIndex
				const contentId = `${id}-content-${index}`

				return (
					<section
						className='rounded-2xl border border-brand/15 bg-cream-light px-5 sm:px-7'
						key={item.question}
					>
						<h3>
							<button
								aria-controls={contentId}
								aria-expanded={isOpen}
								className='flex w-full items-center justify-between gap-5 py-5 text-left text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
								onClick={() => setOpenIndex(isOpen ? null : index)}
								type='button'
							>
								{item.question}
								<span
									aria-hidden
									className='text-2xl font-normal leading-none'
								>
									{isOpen ? '−' : '+'}
								</span>
							</button>
						</h3>
						<div
							hidden={!isOpen}
							id={contentId}
						>
							<p className='pb-6 leading-7 text-brand/75'>{item.answer}</p>
						</div>
					</section>
				)
			})}
		</div>
	)
}
