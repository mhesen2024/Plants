const Care = () => {
  const careItems = [
    {
      icon: "💧",
      title: "الري المثالي",
      description:
        "اسقِ النباتات عندما تجف التربة السطحية. تجنب الإفراط في الري لمنع تعفن الجذور.",
      tip: "💡 نصيحة: اختبر التربة بإصبعك",
      gradient: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: "☀️",
      title: "الإضاءة المناسبة",
      description:
        "ضع النباتات في مكان يحصل على ضوء ساطع غير مباشر. تجنب أشعة الشمس المباشرة.",
      tip: "💡 نصيحة: قرب النافذة الشرقية مثالي",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700"
    },
    {
      icon: "💨",
      title: "الرطوبة المطلوبة",
      description:
        "حافظ على رطوبة مناسبة برش الأوراق بالماء أو وضع صحن ماء بجانب النبات.",
      tip: "💡 نصيحة: رش في الصباح الباكر",
      gradient: "from-primary to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: "🌱",
      title: "التسميد الصحيح",
      description:
        "استخدم سماد متوازن مرة شهرياً في فصلي الربيع والصيف لنمو صحي.",
      tip: "💡 نصيحة: قلل التسميد في الشتاء",
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    }
  ];

  const additionalTips = [
    {
      icon: "🔄",
      title: "التدوير",
      description: "دوّر النبات أسبوعياً للنمو المتوازن",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      icon: "✂️",
      title: "التقليم",
      description: "أزل الأوراق الذابلة والأغصان الميتة",
      gradient: "from-red-400 to-red-600"
    },
    {
      icon: "🧽",
      title: "التنظيف",
      description: "امسح الأوراق بقطعة قماش رطبة",
      gradient: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-gradient-to-r from-accent to-accent/50 rounded-2xl mb-6">
          <span className="text-5xl">💚</span>
        </div>
        <h2 className="text-5xl  font-bold gradient-text mb-6">
          دليل العناية الشامل
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          نصائح احترافية وبسيطة للحفاظ على نباتاتك صحية وجميلة طوال العام
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-16"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {careItems.map((item, index) => (
  <div
    key={index}
    className="text-center border border-gray-200 shadow-lg shadow-gray-500/50 rounded-3xl p-10 premium-shadow group hover:scale-105 transition-all duration-300 w-70 h-[420px] flex flex-col"
  >
    <div
      className={`care-icon w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}
    >
      <span className="text-5xl">{item.icon}</span>
    </div>

    <h3 className="text-2xl font-bold text-foreground mb-6">
      {item.title}
    </h3>

    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
      {item.description}
    </p>

    <div className={`${item.bgColor} rounded-xl p-4`}>
      <p className={`text-sm ${item.textColor} font-semibold`}>
        {item.tip}
      </p>
    </div>
  </div>
))}

      </div>

      <div className="border border-gray-200 rounded-3xl p-12 shadow-lg shadow-gray-500/50">
        <h3 className="text-3xl font-bold text-center gradient-text mb-8">
          نصائح إضافية للعناية المتقدمة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalTips.map((tip, index) => (
            <div
              key={index}
              className="text-center w-40 mx-auto" // 👈 نفس الحجم للجميع
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${tip.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl">{tip.icon}</span>
              </div>

              <h4 className="text-lg font-bold text-foreground mb-2">
                {tip.title}
              </h4>

              <p className="text-muted-foreground text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Care;
