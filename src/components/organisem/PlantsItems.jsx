import React from "react";
import { Link } from "react-router-dom";

export default function PlantsItems({
  id,
  image,
  name,
  badge,
  badgeColor,
  buttonGradient,
  description,
  temperature,
  humidity,
}) {
  return (
    <div
      key={id}
      className="plant-card  glass-effect rounded-3xl premium-shadow overflow-hidden group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          
          src={image}
          alt={name}                
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <div
            className={`absolute top-4 right-4 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
          >
            {badge}
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">
          {description}
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center p-3 bg-muted rounded-xl">
            <div className="flex items-center">
              <span className="text-lg ml-2">🌡️</span>
              <span className="text-muted-foreground">درجة الحرارة</span>
            </div>
            <span className="font-bold text-primary">{temperature}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted rounded-xl">
            <div className="flex items-center">
              <span className="text-lg ml-2">💧</span>
              <span className="text-muted-foreground">الرطوبة</span>
            </div>
            <span className="font-bold text-blue-600">{humidity}</span>
          </div>
        </div>
        <Link to={`/plants/${id}`}>
          <button
            className={`w-full mt-6 bg-gradient-to-r ${buttonGradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}   
          >
            تفاصيل أكثر
          </button>
        </Link>
      </div>
    </div>
  );
}
