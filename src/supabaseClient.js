import { createClient } from '@supabase/supabase-js'

// Récupère les variables d'environnement de manière sécurisée
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Crée et exporte le client Supabase pour l'utiliser dans toute l'application
export const supabase = createClient(supabaseUrl, supabaseKey)
