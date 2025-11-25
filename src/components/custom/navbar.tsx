"use client";

import Link from "next/link";
import { Sparkles, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    { code: "pt-BR", name: "Português (BR)", flag: "🇧🇷" },
    { code: "pt-PT", name: "Português (PT)", flag: "🇵🇹" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2A2520]/95 backdrop-blur-sm border-b border-[#8B7355]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo com mini diamantes */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Mini diamantes decorativos */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
              
              {/* Logo ARL */}
              <div className="flex items-center gap-0 px-3 py-1.5 border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
                <span className="text-xl font-light tracking-tighter text-[#D4AF37]">A</span>
                <span className="text-xl font-light tracking-tighter text-[#D4AF37]">R</span>
                <span className="text-xl font-light tracking-tighter text-[#D4AF37]">L</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-light tracking-[0.3em] text-[#E8DCC4]">AURELION</span>
              <span className="text-[9px] font-light tracking-widest text-[#8B7355] -mt-0.5">{t("nav.subtitle")}</span>
            </div>
          </Link>

          {/* Menu de navegação */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-xs font-light tracking-wider text-[#E8DCC4] hover:text-[#D4AF37] transition-colors duration-300"
              >
                {t("nav.home")}
              </Link>
              <Link 
                href="/sobre" 
                className="text-xs font-light tracking-wider text-[#E8DCC4] hover:text-[#D4AF37] transition-colors duration-300"
              >
                {t("nav.about")}
              </Link>
              <Link 
                href="/catalogo" 
                className="text-xs font-light tracking-wider text-[#E8DCC4] hover:text-[#D4AF37] transition-colors duration-300"
              >
                {t("nav.catalog")}
              </Link>
              <Link 
                href="/vip" 
                className="flex items-center gap-1.5 text-xs font-light tracking-wider text-[#D4AF37] hover:text-[#E8DCC4] transition-colors duration-300"
              >
                <Sparkles className="w-3 h-3" />
                {t("nav.vip")}
              </Link>
            </div>

            {/* Seletor de idioma */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 transition-colors duration-300"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-xs font-light tracking-wider text-[#E8DCC4]">
                  {languages.find(l => l.code === language)?.flag}
                </span>
              </button>

              {showLanguages && (
                <div className="absolute right-0 mt-2 w-48 bg-[#2A2520] border border-[#8B7355]/20 shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setShowLanguages(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs font-light tracking-wide hover:bg-[#D4AF37]/10 transition-colors duration-200 flex items-center gap-2 ${
                        language === lang.code ? "bg-[#D4AF37]/5 text-[#D4AF37]" : "text-[#E8DCC4]"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
