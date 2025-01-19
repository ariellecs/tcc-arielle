import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://grgdxhaeftuuudelrnry.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZ2R4aGFlZnR1dXVkZWxybnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNTI5NzUsImV4cCI6MjA1MjgyODk3NX0.9IW20VlGPJXI7Y95fPoCF20OocPvMahMQD3LO__lDu8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;