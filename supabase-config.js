// ============================================
// إعدادات الاتصال بـ Supabase - ملف مشترك لكل الصفحات
// ============================================

const SUPABASE_URL = "https://gbhfdvqjmosxdawnreio.supabase.co";
const SUPABASE_KEY = "sb_publishable_y3KXo22LKJ3bvnn1n2UubA_SJuygH4r";

// يتم إنشاء العميل (client) مرة واحدة ومشاركته بين كل الصفحات
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
