import React from 'react';
import { TranslationContent } from '../data/translations.ts';
import { PhoneMockup } from './PhoneMockup.tsx';
import { BrandLogo } from './BrandLogo.tsx';
import { Download, HelpCircle, QrCode } from 'lucide-react';

interface HeroProps {
  t: TranslationContent;
  onDownloadApk: () => void;
  onOpenApkGuide: () => void;
  onOpenIosModal: () => void;
  onOpenQrModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  onDownloadApk,
  onOpenApkGuide,
  onOpenIosModal,
  onOpenQrModal,
}) => {
  return (
    <section className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden text-center bg-blueprint-grid">
      {/* Architectural Blueprint Geometric Vector Background (matching icon.png) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          className="w-[850px] h-[850px] md:w-[1200px] md:h-[1200px] max-w-none opacity-60"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          {/* Concentric Construction Circles */}
          <circle cx="500" cy="500" r="480" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.18" />
          <circle cx="500" cy="500" r="380" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.22" />
          <circle cx="500" cy="500" r="280" stroke="#ea580c" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
          <circle cx="500" cy="500" r="180" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.3" />
          <circle cx="500" cy="500" r="90" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.35" />

          {/* Vertical and Horizontal Axis Guidelines */}
          <line x1="500" y1="0" x2="500" y2="1000" stroke="#ea580c" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.35" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="#ea580c" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />
          <line x1="0" y1="680" x2="1000" y2="680" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.2" />

          {/* Triangular Tangent Geometry */}
          <path
            d="M 500 120 L 860 760 L 140 760 Z"
            stroke="#ea580c"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            strokeOpacity="0.22"
            fill="none"
          />

          {/* Target Reticle Crosshairs */}
          <circle cx="500" cy="500" r="6" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="500" y1="488" x2="500" y2="512" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="488" y1="500" x2="512" y2="500" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.6" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Centered App Icon with Blueprint Card from icon.png */}
        <div className="mb-4">
          <BrandLogo size={84} withBackground={true} className="shadow-lg shadow-orange-950/10 hover:scale-105 transition-transform" />
        </div>

        {/* Centered Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15] text-balance">
          {t.hero.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="mt-3.5 text-sm sm:text-base md:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Centered Download Actions with Identical Equal Height and Proportions */}
        <div id="download" className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto">
          
          {/* Primary Action: Android APK Download */}
          <button
            onClick={onDownloadApk}
            className="w-full sm:w-auto flex-1 min-h-[64px] flex items-center justify-center gap-3.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-semibold shadow-lg shadow-orange-600/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="p-2 bg-black/15 rounded-xl shrink-0">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-sm font-bold leading-tight truncate">
                {t.hero.downloadAndroid}
              </div>
              <div className="text-[11px] text-orange-100 font-mono mt-0.5 truncate">
                {t.hero.downloadAndroidSub}
              </div>
            </div>
          </button>

          {/* Secondary Action: iOS Coming Soon */}
          <button
            onClick={onOpenIosModal}
            className="w-full sm:w-auto flex-1 min-h-[64px] flex items-center justify-center gap-3.5 px-5 py-3 rounded-2xl bg-white/95 hover:bg-white border border-orange-200/90 hover:border-orange-300 text-stone-800 font-medium shadow-md shadow-orange-950/5 active:scale-[0.98] transition-all cursor-pointer"
          >
            {/* Apple Icon */}
            <div className="p-2 bg-stone-100 rounded-xl shrink-0">
              <svg className="w-5 h-5 fill-current text-stone-900" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.33-6.6-10.08-11.8-21.72-15.6-34.92-3.8-13.2-5.7-25.04-5.7-35.53 0-14.67 3.8-26.68 11.4-36.03 7.6-9.35 17.1-14.07 28.5-14.17 4.8 0 10.2 1.25 16.2 3.75 6 2.5 9.9 3.8 11.7 3.9 1.5 0 5.4-1.3 11.7-3.9 6.3-2.6 11.7-3.8 16.2-3.6 8.7.2 16.1 2.5 22.2 6.9 6.1 4.4 10.6 10.2 13.5 17.4-7.8 4.7-11.7 11.1-11.7 19.2 0 7.3 2.7 13.4 8.1 18.3 5.4 4.9 11.9 7.6 19.5 8.1-1.2 4.1-2.9 8.9-5.1 14.4zM119.22 31.05c0-6.1 2.2-11.8 6.6-17.1 4.4-5.3 9.9-8.7 16.5-10.2.8 5.7-.9 11.4-5.1 17.1-4.2 5.7-9.5 9.1-16 10.2-.4-0-1.1-0-2-0z" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <div className="text-sm font-semibold text-stone-900 leading-tight flex items-center gap-2 truncate">
                <span>{t.hero.iosComingSoon}</span>
                <span className="text-[10px] font-mono uppercase bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-sm shrink-0">
                  {t.hero.iosBadge}
                </span>
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5 truncate">
                {t.iosModal.notifyMe}
              </div>
            </div>
          </button>
        </div>

        {/* Secondary Links: QR Code & APK Install Guide */}
        <div className="mt-4 flex items-center justify-center gap-5 text-xs text-stone-600">
          <button
            onClick={onOpenQrModal}
            className="inline-flex items-center gap-1.5 hover:text-orange-700 transition-colors font-medium cursor-pointer"
          >
            <QrCode className="w-3.5 h-3.5 text-orange-600" />
            <span>QR-Code scannen</span>
          </button>

          <span className="text-stone-300">·</span>

          <button
            onClick={onOpenApkGuide}
            className="inline-flex items-center gap-1.5 hover:text-orange-700 transition-colors underline underline-offset-4 decoration-orange-300 hover:decoration-orange-600 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
            <span>{t.hero.easGuideLink}</span>
          </button>
        </div>

        {/* Centered Phone Mockup Showcase */}
        <div id="preview" className="mt-8 md:mt-10 w-full flex justify-center">
          <PhoneMockup t={t} />
        </div>

      </div>
    </section>
  );
};
