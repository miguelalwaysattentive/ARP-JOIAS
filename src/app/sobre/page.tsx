"use client";

import { useLanguage } from "@/contexts/language-context";
import { Award, Users, Sparkles, Crown } from "lucide-react";

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1512] via-[#2A2520] to-[#1A1512] pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45"></div>
            <span className="text-xs font-light tracking-[0.3em] text-[#D4AF37]">{t("about.badge")}</span>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[#E8DCC4] mb-6">
            {t("about.title")}
          </h1>
          <p className="text-sm font-light tracking-wide text-[#8B7355] max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* História */}
        <div className="bg-gradient-to-br from-[#2A2520] to-[#1A1512] border border-[#8B7355]/20 p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Award className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-light tracking-wide text-[#E8DCC4] mb-4">
                {t("about.history.title")}
              </h2>
              <p className="text-sm font-light tracking-wide text-[#8B7355] leading-relaxed mb-4">
                {t("about.history.p1")}
              </p>
              <p className="text-sm font-light tracking-wide text-[#8B7355] leading-relaxed mb-4">
                {t("about.history.p2")}
              </p>
              <p className="text-sm font-light tracking-wide text-[#8B7355] leading-relaxed">
                {t("about.history.p3")}
              </p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 p-6 text-center">
            <div className="text-3xl font-light text-[#D4AF37] mb-2">20+</div>
            <div className="text-xs font-light tracking-wider text-[#8B7355]">{t("about.stats.years")}</div>
          </div>
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 p-6 text-center">
            <div className="text-3xl font-light text-[#D4AF37] mb-2">500+</div>
            <div className="text-xs font-light tracking-wider text-[#8B7355]">{t("about.stats.clients")}</div>
          </div>
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 p-6 text-center">
            <div className="text-3xl font-light text-[#D4AF37] mb-2">100%</div>
            <div className="text-xs font-light tracking-wider text-[#8B7355]">{t("about.stats.satisfaction")}</div>
          </div>
        </div>

        {/* Clientela Elite */}
        <div className="bg-gradient-to-br from-[#2A2520] to-[#1A1512] border border-[#8B7355]/20 p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Crown className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-light tracking-wide text-[#E8DCC4] mb-4">
                {t("about.elite.title")}
              </h2>
              <p className="text-sm font-light tracking-wide text-[#8B7355] leading-relaxed mb-4">
                {t("about.elite.p1")}
              </p>
              <p className="text-sm font-light tracking-wide text-[#8B7355] leading-relaxed">
                {t("about.elite.p2")}
              </p>
            </div>
          </div>
        </div>

        {/* Carta de Agradecimento */}
        <div className="bg-gradient-to-br from-[#E8DCC4] to-[#D4C5A0] p-8 md:p-12 border-2 border-[#D4AF37]/30 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            {/* Cabeçalho da carta */}
            <div className="text-center mb-8 pb-6 border-b border-[#8B7355]/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
              </div>
              <div className="text-xs font-light tracking-[0.4em] text-[#8B7355] mb-1">
                CARTA DE AGRADECIMENTO
              </div>
              <div className="text-[10px] font-light tracking-wider text-[#8B7355]/60">
                Lisboa, Portugal
              </div>
            </div>

            {/* Corpo da carta */}
            <div className="space-y-4 mb-8 text-[#2A2520]">
              <p className="text-xs font-light leading-relaxed italic">
                {t("about.letter.greeting")}
              </p>
              <p className="text-xs font-light leading-relaxed">
                {t("about.letter.p1")}
              </p>
              <p className="text-xs font-light leading-relaxed">
                {t("about.letter.p2")}
              </p>
              <p className="text-xs font-light leading-relaxed">
                {t("about.letter.p3")}
              </p>
              <p className="text-xs font-light leading-relaxed italic">
                {t("about.letter.closing")}
              </p>
            </div>

            {/* Assinatura elegante */}
            <div className="flex flex-col items-end">
              <div className="relative">
                {/* Linha de assinatura estilizada */}
                <svg 
                  width="200" 
                  height="60" 
                  viewBox="0 0 200 60" 
                  className="mb-2"
                >
                  <path 
                    d="M 10 40 Q 30 10, 60 35 T 120 30 Q 140 25, 160 40 T 190 35" 
                    stroke="#2A2520" 
                    strokeWidth="1.5" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 50 45 L 55 35" 
                    stroke="#2A2520" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 100 42 L 105 32" 
                    stroke="#2A2520" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-[10px] font-light tracking-wider text-[#8B7355] text-right">
                  {t("about.letter.signature")}
                </div>
              </div>
            </div>

            {/* Selo decorativo */}
            <div className="flex justify-center mt-8 pt-6 border-t border-[#8B7355]/20">
              <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-transparent">
                <Crown className="w-6 h-6 text-[#D4AF37]" />
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#2A2520] to-[#1A1512] border border-[#8B7355]/20 p-6">
            <Users className="w-5 h-5 text-[#D4AF37] mb-3" />
            <h3 className="text-lg font-light tracking-wide text-[#E8DCC4] mb-2">
              {t("about.values.craftsmanship.title")}
            </h3>
            <p className="text-xs font-light tracking-wide text-[#8B7355] leading-relaxed">
              {t("about.values.craftsmanship.description")}
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#2A2520] to-[#1A1512] border border-[#8B7355]/20 p-6">
            <Sparkles className="w-5 h-5 text-[#D4AF37] mb-3" />
            <h3 className="text-lg font-light tracking-wide text-[#E8DCC4] mb-2">
              {t("about.values.exclusivity.title")}
            </h3>
            <p className="text-xs font-light tracking-wide text-[#8B7355] leading-relaxed">
              {t("about.values.exclusivity.description")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
