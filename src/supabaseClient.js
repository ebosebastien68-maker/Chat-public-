import { createClient } from '@supabase/supabase-js'

// Le code cherche les variables ici, via "import.meta.env"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY // <-- REGARDEZ CE NOM !

export const supabase = createClient(supabaseUrl, supabaseKey)
