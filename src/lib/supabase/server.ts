import { createClient } from '@supabase/supabase-js'

import { getSupabasePublicConfig } from './env'

export function createSupabaseServerClient() {
	const { publishableKey, url } = getSupabasePublicConfig()

	return createClient(url, publishableKey, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		}
	})
}
