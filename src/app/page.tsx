"use client";

import Navbar from "@/components/custom/navbar";
import { Sparkles, Crown, Gem } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1612] via-[#2A2520] to-[#1A1612]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Mini diamantes decorativos */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-40"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-60"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-80"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-60"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-40"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#E8DCC4] mb-4">
            {t("home.hero.title")}
          </h1>
          <p className="text-sm sm:text-base font-light tracking-wide text-[#B8A88A] max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("home.hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/catalogo"
              className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#1A1612] text-xs font-light tracking-widest hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
            >
              {t("home.cta.catalog")}
            </Link>
            <Link 
              href="/vip"
              className="px-8 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-light tracking-widest hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              {t("home.cta.vip")}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#8B7355]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                <Crown className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm font-light tracking-wider text-[#E8DCC4] mb-2">{t("home.feature1.title")}</h3>
              <p className="text-xs font-light text-[#8B7355] leading-relaxed">
                {t("home.feature1.description")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                <Gem className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm font-light tracking-wider text-[#E8DCC4] mb-2">{t("home.feature2.title")}</h3>
              <p className="text-xs font-light text-[#8B7355] leading-relaxed">
                {t("home.feature2.description")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm font-light tracking-wider text-[#E8DCC4] mb-2">{t("home.feature3.title")}</h3>
              <p className="text-xs font-light text-[#8B7355] leading-relaxed">
                {t("home.feature3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-[#D4AF37]/20 bg-gradient-to-br from-[#2A2520] to-[#1A1612] p-12">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#E8DCC4] mb-4">
              {t("home.cta2.title")}
            </h2>
            <p className="text-xs font-light tracking-wide text-[#8B7355] mb-8 leading-relaxed">
              {t("home.cta2.description")}
            </p>
            <Link 
              href="/vip"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#1A1612] text-xs font-light tracking-widest hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
            >
              <Sparkles className="w-3 h-3" />
              {t("home.cta2.button")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
