import React from 'react'

export default function Logo() {
  return (
           <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-2xl">🌿</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Floravera
              </h1>
              <p className="text-xs text-gray-600 font-medium">عالم النباتات الطبيعية</p>
            </div>
          </div>
    
  )
}
