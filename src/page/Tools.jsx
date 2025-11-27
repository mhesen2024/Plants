import { useState } from "react";
import { toast } from "sonner";

const schedules = {
  pothos: { watering: 7, fertilizing: 30, pruning: 90 },
  cactus: { watering: 14, fertilizing: 60, pruning: 180 },
  ficus: { watering: 5, fertilizing: 21, pruning: 60 },
  monstera: { watering: 7, fertilizing: 21, pruning: 90 },
  bamboo: { watering: 3, fertilizing: 14, pruning: 30 },
  snake: { watering: 10, fertilizing: 45, pruning: 120 },
};

const plantTypes = [
  { value: "pothos", label: "البوتس" },
  { value: "cactus", label: "الصبار" },
  { value: "ficus", label: "الفيكس" },
  { value: "monstera", label: "المونستيرا" },
  { value: "bamboo", label: "الخيزران" },
  { value: "snake", label: "نبات الأفعى" },
];

const lightLevels = [
  { value: "low", label: "إضاءة منخفضة" },
  { value: "medium", label: "إضاءة متوسطة" },
  { value: "high", label: "إضاءة عالية" },
];

const Tools = () => {
  const [careResults, setCareResults] = useState(null);

  const handleCareCalculation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const plantType = formData.get("plantType");
    const potSize = formData.get("potSize");
    const lightLevel = formData.get("lightLevel");

    if (!plantType || !potSize || !lightLevel) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }

    const baseSchedule = schedules[plantType];
    setCareResults(baseSchedule);
    toast.success("تم حساب جدول العناية بنجاح!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-fade-in">

      {/* العنوان */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-300 to-green-600 shadow-lg mb-6">
          <span className="text-4xl">🛠️</span>
        </div>
        <h2 className="text-5xl font-extrabold  text-green-800 mb-4">
          الأدوات التفاعلية
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          أدوات ذكية تساعدك في العناية بنباتاتك وتحسين نموها بشكل احترافي 🌱
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* بطاقة الحاسبة */}
        <div className="rounded-3xl p-8 shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300">

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-3xl">🧮</span>
            </div>
            <h3 className="text-3xl font-bold">حاسبة العناية بالنباتات</h3>
            <p className="text-gray-500 text-sm">اختر نوع النبات وسيتم احتساب جدول العناية تلقائيًا</p>
          </div>

          <form onSubmit={handleCareCalculation} className="space-y-5">

            {/* نوع النبات */}
            <div>
              <label className="block text-sm font-semibold mb-2">نوع النبات</label>
              <select
                name="plantType"
                className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400"
              >
                <option value="">اختر نوع النبات</option>
                {plantTypes.map((plant) => (
                  <option key={plant.value} value={plant.value}>
                    {plant.label}
                  </option>
                ))}
              </select>
            </div>

            {/* حجم الأصيص */}
            <div>
              <label className="block text-sm font-semibold mb-2">حجم الأصيص (سم)</label>
              <input
                type="number"
                name="potSize"
                min="10"
                max="50"
                placeholder="مثال: 20"
                className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* مستوى الإضاءة */}
            <div>
              <label className="block text-sm font-semibold mb-2">مستوى الإضاءة</label>
              <select
                name="lightLevel"
                className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-400"
              >
                <option value="">اختر مستوى الإضاءة</option>
                {lightLevels.map((light) => (
                  <option key={light.value} value={light.value}>
                    {light.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg shadow-md hover:shadow-xl transition-all"
            >
              احسب جدول العناية
            </button>

          </form>
        </div>

        {/* نتائج */}
        {careResults && (
          <div className="rounded-3xl p-8 shadow-xl bg-white border border-gray-100 animate-fade-in-up">

            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              📋 جدول العناية المقترح
            </h4>

            <div className="space-y-4">

              <div className="flex justify-between items-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                <span className="font-semibold">💧 الري</span>
                <span className="text-blue-700 font-bold">كل {careResults.watering} أيام</span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-green-50 border border-green-100">
                <span className="font-semibold">🌱 التسميد</span>
                <span className="text-green-700 font-bold">كل {careResults.fertilizing} يوم</span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                <span className="font-semibold">✂️ التقليم</span>
                <span className="text-purple-700 font-bold">كل {careResults.pruning} يوم</span>
              </div>
              
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Tools;
