"use client";

import Navbar from "@/components/custom/navbar";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const products = [
  {
    id: 1,
    nameKey: "catalog.product1.name",
    price: 2500,
    descriptionKey: "catalog.product1.description",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    nameKey: "catalog.product2.name",
    price: 3200,
    descriptionKey: "catalog.product2.description",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    nameKey: "catalog.product3.name",
    price: 2800,
    descriptionKey: "catalog.product3.description",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    nameKey: "catalog.product4.name",
    price: 4500,
    descriptionKey: "catalog.product4.description",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    nameKey: "catalog.product5.name",
    price: 3800,
    descriptionKey: "catalog.product5.description",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    nameKey: "catalog.product6.name",
    price: 5200,
    descriptionKey: "catalog.product6.description",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop"
  }
];

function formatPrice(price: number): string {
  return price.toLocaleString('pt-PT');
}

export default function CatalogoPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1612] via-[#2A2520] to-[#1A1612]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#8B7355]/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-80"></div>
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#E8DCC4] mb-3">
            {t("catalog.title")}
          </h1>
          <p className="text-xs font-light tracking-wide text-[#8B7355] max-w-2xl mx-auto">
            {t("catalog.subtitle")}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white/5 border border-[#8B7355]/20 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-[#2A2520]">
                  <img 
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center gap-1 mb-3">
                    <div className="w-1 h-1 bg-[#D4AF37] rotate-45 opacity-40"></div>
                    <div className="w-1 h-1 bg-[#D4AF37] rotate-45 opacity-60"></div>
                    <div className="w-1 h-1 bg-[#D4AF37] rotate-45 opacity-40"></div>
                  </div>
                  <h3 className="text-sm font-light tracking-wider text-[#E8DCC4] mb-2 text-center">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-xs font-light text-[#8B7355] mb-4 text-center">
                    {t(product.descriptionKey)}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#8B7355]/10">
                    <div>
                      <p className="text-[10px] font-light tracking-wider text-[#8B7355] mb-0.5">{t("catalog.price")}</p>
                      <p className="text-xl font-light text-[#D4AF37]">
                        {formatPrice(product.price)}€
                      </p>
                    </div>
                    <Link
                      href="/vip"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-light tracking-widest hover:bg-[#D4AF37]/20 transition-colors duration-300"
                    >
                      <Sparkles className="w-3 h-3" />
                      VIP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#8B7355]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-light tracking-wide text-[#8B7355] mb-6">
            {t("catalog.cta.text")}
          </p>
          <Link 
            href="/vip"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#1A1612] text-xs font-light tracking-widest hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
          >
            <Sparkles className="w-3 h-3" />
            {t("catalog.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
