import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-radial-[at_50%_75%] from-[#bcface] via-[#8fef9a] min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10  animate-fade-in">
        <div className="mb-10">
          <div className="w-28 h-28  rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
            <span className="text-white text-5xl">🌱</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-green-800">
            Floravera
          </h1>

          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">نوع نبات</div>
            </div>

            <div className="w-px h-7 bg-border"></div>

            <div className="text-center">
              <div className="text-xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">عميل سعيد</div>
            </div>

            <div className="w-px h-7 bg-border"></div>

            <div className="text-center">
              <div className="text-xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">سنوات خبرة</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
          اكتشف جمال الطبيعة مع فلورافيرا – منزلك الأخضر يبدأ من هنا 🌿
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/plants")}
            className="bg-gradient-to-r from-[#00d83a] via-[#009611] to-[#00661d] text-white px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span className="ml-2">🌿</span>
            استكشف النباتات
          </button>

          <button
            onClick={() => navigate("/tools")}
            className="bg-white text-primary px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center shadow-md"
          >
            <span className="ml-2">🛠️</span>
            الأدوات التفاعلية
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 text-5xl opacity-20 animate-float"
        style={{ animationDelay: "-2s" }}
      >
        🍃
      </div>

      <div
        className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float"
        style={{ animationDelay: "-4s" }}
      >
        🌺
      </div>

      <div
        className="absolute top-1/2 left-20 text-4xl opacity-15 animate-float"
        style={{ animationDelay: "-1s" }}
      >
        🌸
      </div>
    </div>
  );
};

export default Home;
