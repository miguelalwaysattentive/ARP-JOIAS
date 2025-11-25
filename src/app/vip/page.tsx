"use client";

import Navbar from "@/components/custom/navbar";
import { Crown, Sparkles, Star, Gem, Award, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function VipPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Crown,
      titleKey: "vip.benefit1.title",
      descriptionKey: "vip.benefit1.description"
    },
    {
      icon: Gem,
      titleKey: "vip.benefit2.title",
      descriptionKey: "vip.benefit2.description"
    },
    {
      icon: Star,
      titleKey: "vip.benefit3.title",
      descriptionKey: "vip.benefit3.description"
    },
    {
      icon: Award,
      titleKey: "vip.benefit4.title",
      descriptionKey: "vip.benefit4.description"
    },
    {
      icon: Zap,
      titleKey: "vip.benefit5.title",
      descriptionKey: "vip.benefit5.description"
    },
    {
      icon: Sparkles,
      titleKey: "vip.benefit6.title",
      descriptionKey: "vip.benefit6.description"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1612] via-[#2A2520] to-[#1A1612]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-40"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-60"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-80"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-60"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45 opacity-40"></div>
          </div>

          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
            <Crown className="w-8 h-8 text-[#D4AF37]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#E8DCC4] mb-4">
            {t("vip.hero.title")}
          </h1>
          <p className="text-sm font-light tracking-wide text-[#B8A88A] max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("vip.hero.description")}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#8B7355]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#E8DCC4] mb-3">
              {t("vip.benefits.title")}
            </h2>
            <p className="text-xs font-light tracking-wide text-[#8B7355]">
              {t("vip.benefits.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 border border-[#8B7355]/20 hover:border-[#D4AF37]/40 p-6 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                  </div>
                  <h3 className="text-sm font-light tracking-wider text-[#E8DCC4] mb-2 text-center">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-xs font-light text-[#8B7355] text-center leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#8B7355]/10">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#D4AF37]/20 bg-gradient-to-br from-[#2A2520] to-[#1A1612] p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#E8DCC4] mb-4">
              {t("vip.cta.title")}
            </h2>
            <p className="text-xs font-light tracking-wide text-[#8B7355] mb-8 leading-relaxed max-w-2xl mx-auto">
              {t("vip.cta.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#1A1612] text-xs font-light tracking-widest hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300">
                {t("vip.cta.button1")}
              </button>
              <button className="px-8 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-light tracking-widest hover:bg-[#D4AF37]/10 transition-all duration-300">
                {t("vip.cta.button2")}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-[#8B7355]/10">
              <p className="text-[10px] font-light tracking-wider text-[#8B7355]">
                {t("vip.cta.footer")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
