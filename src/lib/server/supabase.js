import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { PRIVATE_SUPABASE_SERVICE_KEY } from '$env/static/private';

export const supabaseAdminClient = createClient('https://hunqastofvereessimol.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnFhc3RvZnZlcmVlc3NpbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDU3NTAsImV4cCI6MjA0MTgyMTc1MH0.0gO6vyGHyPbazwCI--b404bbxKn1l8K9HbRY_m9kAoc');
