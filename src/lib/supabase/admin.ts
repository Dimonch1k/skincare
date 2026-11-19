import 'server-only'

import { createClient } from '@supabase/supabase-js'

import { getSupabasePublicConfig, getSupabaseServiceRoleKey } from './env'

export function createSupabaseAdminClient() {
	const { url } = getSupabasePublicConfig()

	return createClient(url, getSupabaseServiceRoleKey(), {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		}
	})
}
