import React from 'react'

export default function Heroplants() {
  return (
      <div className="text-center mb-16">
        <div className="inline-block p-5 bg-green-100 from-accent to-accent/50 rounded-2xl mb-6">
          <span className="text-5xl">🌿</span>
        </div>
        <h2 className="text-5xl font-bold gradient-text mb-6 p-3">مجموعة النباتات المميزة</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          اختر النبات المثالي لمنزلك من مجموعتنا المتنوعة والمختارة بعناية
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-16"></div>
      </div>
  )
}
