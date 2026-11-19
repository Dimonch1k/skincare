const requiredEnvironmentVariables = [
	'NEXT_PUBLIC_SUPABASE_URL',
	'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'
] as const

type PublicSupabaseEnvironmentVariable =
	(typeof requiredEnvironmentVariables)[number]

function getPublicEnvironmentVariable(
	name: PublicSupabaseEnvironmentVariable
): string {
	const value = process.env[name]

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`)
	}

	return value
}

export function getSupabasePublicConfig() {
	return {
		url: getPublicEnvironmentVariable('NEXT_PUBLIC_SUPABASE_URL'),
		publishableKey: getPublicEnvironmentVariable(
			'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'
		)
	}
}

export function getSupabaseServiceRoleKey(): string {
	const value = process.env.SUPABASE_SERVICE_ROLE_KEY

	if (!value) {
		throw new Error(
			'Missing required environment variable: SUPABASE_SERVICE_ROLE_KEY'
		)
	}

	return value
}
