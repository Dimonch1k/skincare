interface Stat {
	description: string
	value: string
}

interface StatsProps {
	items: Stat[]
}

export function Stats({ items }: StatsProps) {
	return (
		<div className='grid gap-8 sm:grid-cols-3 sm:gap-12'>
			{items.map(item => (
				<div key={item.value}>
					<p className='font-display text-4xl font-bold text-brand'>
						{item.value}
					</p>
					<p className='mt-2 max-w-55 leading-6 text-brand/75'>
						{item.description}
					</p>
				</div>
			))}
		</div>
	)
}
