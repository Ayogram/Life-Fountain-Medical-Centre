import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are missing to prevent crash
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
        insert: () => Promise.resolve({ error: new Error('Supabase URL not configured') }),
        update: () => Promise.resolve({ error: new Error('Supabase URL not configured') }),
        delete: () => Promise.resolve({ error: new Error('Supabase URL not configured') }),
      }),
      auth: {
        getUser: () => Promise.resolve({ data: { user: null } }),
        signInWithPassword: () => Promise.resolve({ error: new Error('Supabase URL not configured') }),
        signOut: () => Promise.resolve({}),
      }
    } as any;
