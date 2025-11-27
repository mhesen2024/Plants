import { plantsData } from '../components/data/plantsData';
import { useParams, Link } from "react-router-dom";
import React, { useState } from 'react';

function PlantsDetail() {
const { id } = useParams();
const [selectedVideo, setSelectedVideo] = useState(null);
const [isFavorite, setIsFavorite] = useState(false);

const toggleFavorite = () => setIsFavorite(!isFavorite);

// Convert object to array, then find plant by id
const plantArray = Object.values(plantsData);
const plant = plantArray.find(p => p.id === parseInt(id));

if (!plant) {
return <div className="min-h-screen flex items-center justify-center">النبات غير موجود</div>;
}

return ( <div className="min-h-screen py-20 animate-fade-in"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    <div className="mb-8">
<Link to="/plants" className="text-muted-foreground hover:text-primary transition-colors">
  ← العودة إلى النباتات
</Link>
</div>

    {/* Hero Section */}
    <div className="grid md:grid-cols-2 gap-10 mb-16">
      <div className="relative rounded-3xl h-96 overflow-hidden glass-effect premium-shadow">
        <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
        {plant.badge && (
          <span className={`absolute top-6 right-6 ${plant.badgeColor} text-white px-4 py-2 text-sm`}>
            {plant.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold gradient-text mb-4">{plant.name}</h1>
        <p className="text-xl text-muted-foreground mb-6">{plant.description}</p>
        <span className="w-fit mb-4 text-base px-4 py-2 bg-gray-200">مستوى الصعوبة: {plant.difficulty}</span>

        <div className="flex gap-3 mb-6">
          <button
            onClick={toggleFavorite}
            className={`flex-1 px-4 py-2 border rounded ${isFavorite ? 'bg-primary text-white' : 'border-gray-400'}`}
          >
            {isFavorite ? "في المفضلة" : "إضافة للمفضلة"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 border rounded">
            <div className="text-2xl mb-2">🌡️</div>
            <div className="text-xs text-muted-foreground mb-1">درجة الحرارة</div>
            <div className="font-bold text-primary">{plant.temperature}</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-2xl mb-2">💧</div>
            <div className="text-xs text-muted-foreground mb-1">الرطوبة</div>
            <div className="font-bold text-blue-600">{plant.humidity}</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-2xl mb-2">☀️</div>
            <div className="text-xs text-muted-foreground mb-1">الإضاءة</div>
            <div className="font-bold text-yellow-600">{plant.light}</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-2xl mb-2">💦</div>
            <div className="text-xs text-muted-foreground mb-1">الري</div>
            <div className="font-bold text-cyan-600">{plant.watering}</div>
          </div>
        </div>
      </div>
    </div>

    {/* Tabs Section */}
    <div>
      <div className="flex gap-4 mb-8">
        <button className="px-6 py-3 border rounded">نظرة عامة</button>
        <button className="px-6 py-3 border rounded">دليل العناية</button>
        <button className="px-6 py-3 border rounded">فيديوهات تعليمية</button>
        <button className="px-6 py-3 border rounded">نصائح المجتمع</button>
      </div>
      <div className="p-8 border rounded">
        <h2 className="text-3xl font-bold mb-4 gradient-text">عن النبات</h2>
        <p className="text-lg leading-relaxed text-foreground">{plant.fullDescription}</p>
      </div>
    </div>

    {/* Video Dialog */}
    {selectedVideo && (
      <div className="max-w-4xl mt-8">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    )}
  </div>
</div>

);
}

export default PlantsDetail;
