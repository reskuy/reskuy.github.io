const SUBAPASE_URL = 'https://esfgvrhyhmfgznmvvlks.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzZmd2cmh5aG1mZ3pubXZ2bGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNDk0MDEsImV4cCI6MjA4NjgyNTQwMX0.PhlLSpBqBH7_gNHeZF3SCohSVTnI3Tkx_Wgn7S6U994';

// Gunakan nama 'supabaseClient' agar cocok dengan import di register.js
// Dan gunakan window.supabase untuk memastikan kita memanggil library dari CDN
export const supabaseClient = window.supabase.createClient(SUBAPASE_URL, SUPABASE_KEY);