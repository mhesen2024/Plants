import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-6 border border-gray-300">
          <span className="text-5xl">📞</span>
        </div>
        <h2 className="text-5xl font-bold gradient-text mb-6">تواصل معنا</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          نحن هنا للإجابة على جميع استفساراتك ومساعدتك في رحلتك مع النباتات
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-16"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="rounded-3xl p-8 bg-white/60 backdrop-blur-md border border-gray-300 shadow-lg shadow-gray-400/20 transition hover:shadow-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-3xl text-white">✉️</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">أرسل رسالة</h3>
            <p className="text-muted-foreground">املأ النموذج وسنتواصل معك قريباً</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm"
                  placeholder="+970 xxx xxx xxx"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">الموضوع</label>
                <select
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary transition shadow-sm"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="inquiry">استفسار عام</option>
                  <option value="order">طلب شراء</option>
                  <option value="care">استشارة العناية</option>
                  <option value="complaint">شكوى</option>
                  <option value="suggestion">اقتراح</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">الرسالة</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary transition shadow-sm"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-orange-300 from-primary to-primary-dark text-white py-3 hover:bg-amber-500 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="ml-2">📤</span>
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-3xl p-8 bg-white/60 backdrop-blur-md border border-gray-300 shadow-lg shadow-gray-400/20 hover:shadow-xl transition">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">معلومات التواصل</h3>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center border border-gray-300 shadow-sm">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground">info@floravera.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center border border-gray-300 shadow-sm">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">الهاتف</h4>
                  <p className="text-muted-foreground">+970 123 456 789</p>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center border border-gray-300 shadow-sm">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">ساعات العمل</h4>
                  <p className="text-muted-foreground">السبت - الخميس: 9 صباحاً - 6 مساءً</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center border border-gray-300 shadow-sm">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">العنوان</h4>
                  <p className="text-muted-foreground">فلسطين، الخليل</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="rounded-3xl p-8 bg-white/60 backdrop-blur-md border border-gray-300 shadow-lg shadow-gray-400/20 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">تابعنا على</h3>
            <div className="flex justify-center gap-4">
              <button className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition shadow-md">
                📘
              </button>
              <button className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition shadow-md">
                📷
              </button>
              <button className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition shadow-md">
                🐦
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
