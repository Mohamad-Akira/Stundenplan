import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Language, TranslationContent } from '../data/translations.ts';
import { Download, Globe } from 'lucide-react';

interface NavbarProps {
  t: TranslationContent;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  currentLang,
  onSelectLang,
  onDownloadClick,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FFF5ED]/90 border-b border-orange-200/50 transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-1.5 sm:gap-2.5 font-bold tracking-tight text-stone-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
        >
          <BrandLogo size={26} className="sm:w-8 sm:h-8" />
          <span className="font-extrabold text-stone-900 tracking-tight text-base sm:text-xl">
            Stundenplan
          </span>
        </a>

        {/* Actions: Language Switcher & Download Button (Visible on mobile & desktop) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-orange-100/60 border border-orange-200/80 rounded-lg p-0.5 text-xs font-medium">
            <span className="pl-1 pr-0.5 text-orange-600/70 hidden sm:inline-flex">
              <Globe className="w-3.5 h-3.5" />
            </span>
            <button
              onClick={() => onSelectLang('de')}
              className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-all whitespace-nowrap text-xs ${
                currentLang === 'de'
                  ? 'bg-orange-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Deutsch"
            >
              DE
            </button>
            <button
              onClick={() => onSelectLang('en')}
              className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-all whitespace-nowrap text-xs ${
                currentLang === 'en'
                  ? 'bg-orange-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Primary Action Button - Returned and sized properly so it never clips */}
          <button
            onClick={onDownloadClick}
            className="flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-95 transition-all rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm shadow-orange-950/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.getApp}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
