const SUPABASE_URL = "https://fydaouflujmrvpmjnbmb.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_IlEnkKMEdYNkzR2E8v18UQ_uxtIBnwQ";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
