import {createClient} from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabaseUrl = 'https://wypqpskqyybdxzywvhtk.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5cHFwc2txeXliZHh6eXd2aHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNDIzNjQsImV4cCI6MjAxMDYxODM2NH0.nf2qlqKQFf6uidn2O0RJDn5kRj7TJDz4WQzW6LwLKkk'

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase