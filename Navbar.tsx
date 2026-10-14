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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FFF5ED]/85 border-b border-orange-200/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-stone-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
        >
          <BrandLogo size={32} />
          <span className="font-extrabold text-stone-900 tracking-tight text-xl">
            Stundenplan
          </span>
        </a>

        {/* Actions: Language & Download */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-orange-100/60 border border-orange-200/80 rounded-lg p-0.5 text-xs font-medium">
            <span className="pl-2 pr-1 text-orange-600/70 hidden sm:inline-flex">
              <Globe className="w-3.5 h-3.5" />
            </span>
            <button
              onClick={() => onSelectLang('de')}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
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
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                currentLang === 'en'
                  ? 'bg-orange-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onSelectLang('ar')}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                currentLang === 'ar'
                  ? 'bg-orange-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="العربية"
            >
              عربي
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onDownloadClick}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-95 transition-all rounded-lg shadow-sm shadow-orange-950/20 whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.getApp}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
