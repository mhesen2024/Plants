import { useState } from "react";
import { Link } from "react-router-dom";
import pothosImg from "../assets/plants/pothos.jpg";
import aloeImg from "../assets/plants/aloe.jpg";
import ficusImg from "../assets/plants/ficus.jpg";
import monsteraImg from "../assets/plants/monstera.jpg";
import bambooImg from "../assets/plants/bamboo.jpg";
import snakePlantImg from "../assets/plants/snake-plant.jpg";
import Heroplants from "../components/organisem/Heroplants";
import PlantsItems from "../components/organisem/PlantsItems";

const plants = [
  {
    id: 1,
    name: "نبات البوتس",
    emoji: "🌿",
    image: pothosImg,
    description: "نبات داخلي سهل العناية، مثالي للمبتدئين",
    temperature: "18-24°م",
    humidity: "40-60%",
    badge: "مميز",
    badgeColor: "bg-red-500",
    gradient: "from-red-100 via-red-50 to-red-100",
    buttonGradient: "from-red-500 to-red-600",
  },
  {
    id: 2,
    name: "نبات الصبار",
    emoji: "🪴",
    image: aloeImg,
    description: "نبات صحراوي يتحمل الجفاف، مثالي للمكاتب",
    temperature: "20-26°م",
    humidity: "30-40%",
    badge: "جديد",
    badgeColor: "bg-yellow-500",
    gradient: "from-yellow-100 via-yellow-50 to-amber-100",
    buttonGradient: "from-yellow-500 to-yellow-600",
  },
  {
    id: 3,
    name: "نبات الفيكس",
    emoji: "🌱",
    image: ficusImg,
    description: "شجرة داخلية أنيقة تضفي لمسة طبيعية",
    temperature: "16-22°م",
    humidity: "50-70%",
    badge: "حصري",
    badgeColor: "bg-emerald-500",
    gradient: "from-emerald-100 via-green-50 to-teal-100",
    buttonGradient: "from-emerald-500 to-emerald-600",
  },
  {
    id: 4,
    name: "نبات المونستيرا",
    emoji: "🍃",
    image: monsteraImg,
    description: "نبات استوائي بأوراق مميزة ومثقوبة",
    temperature: "18-25°م",
    humidity: "60-80%",
    badge: "الأكثر مبيعاً",
    badgeColor: "bg-purple-500",
    gradient: "from-green-100 via-lime-50 to-green-100",
    buttonGradient: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    name: "نبات الخيزران",
    emoji: "🌾",
    image: bambooImg,
    description: "نبات الحظ والازدهار، سريع النمو",
    temperature: "20-28°م",
    humidity: "50-60%",
    badge: "مميز",
    badgeColor: "bg-orange-500",
    gradient: "from-orange-100 via-amber-50 to-orange-100",
    buttonGradient: "from-orange-500 to-orange-600",
  },
  {
    id: 6,
    name: "نبات الأفعى",
    emoji: "🌵",
    image: snakePlantImg,
    description: "نبات قوي ومقاوم، ينقي الهواء بفعالية",
    temperature: "18-24°م",
    humidity: "30-50%",
    badge: "جديد",
    badgeColor: "bg-gray-500",
    gradient: "from-gray-100 via-slate-50 to-gray-100",
    buttonGradient: "from-gray-500 to-gray-600",
  },
];

const Plants = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "الكل" },
    { id: "indoor", label: "نباتات داخلية" },
    { id: "cactus", label: "صبار" },
    { id: "flowering", label: "نباتات مزهرة" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <Heroplants/>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12">
        <div className="glass-effect rounded-2xl p-2 inline-flex gap-2 flex-wrap justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                selectedFilter === filter.id
                  ? "bg-green-100 text-green-500"
                  : "text-foreground hover:bg-green-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plants.map((plant) => (
          <PlantsItems
            key={plant.id}
            id={plant.id}
            name={plant.name}
            emoji={plant.emoji}
            image={plant.image}
            description={plant.description}
            temperature={plant.temperature}
            humidity={plant.humidity}
            badge={plant.badge}
            badgeColor={plant.badgeColor}
            gradient={plant.gradient}
            buttonGradient={plant.buttonGradient}
          />
        ))}
      </div>
    </div>
  );
};

export default Plants;
