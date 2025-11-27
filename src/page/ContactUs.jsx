import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-gradient-to-r from-accent to-accent/50 rounded-2xl mb-6">
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
        <div className="glass-effect rounded-3xl p-8 premium-shadow">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">أرسل رسالة</h3>
            <p className="text-muted-foreground">املأ النموذج وسنتواصل معك قريباً</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300"
                  placeholder="+966 xxx xxx xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">الموضوع</label>
                <select
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="inquiry">استفسار عام</option>
                  <option value="order">طلب شراء</option>
                  <option value="care">استشارة العناية</option>
                  <option value="complaint">شكوى</option>
                  <option value="suggestion">اقتراح</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">الرسالة</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="ml-2">📤</span>
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-effect rounded-3xl p-8 premium-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">معلومات التواصل</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground">info@floravera.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">الهاتف</h4>
                  <p className="text-muted-foreground">+970 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">ساعات العمل</h4>
                  <p className="text-muted-foreground">السبت - الخميس: 9 صباحاً - 6 مساءً</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">العنوان</h4>
                  <p className="text-muted-foreground">فلسطين الخليل</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 premium-shadow">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">تابعنا على</h3>
            <div className="flex justify-center gap-4">
              <button className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-xl">📘</span>
              </button>
              <button className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-xl">📷</span>
              </button>
              <button className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-xl">🐦</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
