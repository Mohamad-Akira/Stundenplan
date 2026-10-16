import React, { useState, useEffect } from 'react';
import { translations, Language } from './data/translations.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ApkGuideModal } from './components/ApkGuideModal.tsx';
import { IosWaitlistModal } from './components/IosWaitlistModal.tsx';
import { QrCodeModal } from './components/QrCodeModal.tsx';
import { BrandLogo } from './components/BrandLogo.tsx';
import { Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [isApkGuideOpen, setIsApkGuideOpen] = useState(false);
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const DEFAULT_EAS_URL = 'https://expo.dev/accounts/akira_design9/projects/stundenplan/builds/c714d3d8-123b-472a-b04b-e80282b5382e';
  const [apkUrl, setApkUrl] = useState(DEFAULT_EAS_URL);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Retrieve saved custom EAS URL if configured
  useEffect(() => {
    try {
      const savedUrl = localStorage.getItem('stundenplan_apk_url');
      if (savedUrl) {
        setApkUrl(savedUrl);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleUpdateApkUrl = (newUrl: string) => {
    setApkUrl(newUrl);
    try {
      localStorage.setItem('stundenplan_apk_url', newUrl);
    } catch {
      // ignore
    }
    showToast(lang === 'de' ? 'APK-Download-Link aktualisiert' : 'APK download link updated');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDownloadApk = () => {
    // Trigger download / open EAS build
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'Stundenplan.apk';
    if (apkUrl.startsWith('http')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show feedback toast
    showToast(
      lang === 'de'
        ? 'EAS-Download geöffnet! Wird als Stundenplan.apk auf deinem Gerät installiert.'
        : 'Download opened! Will install as Stundenplan.apk on your device.'
    );
  };

  const t = translations[lang];

  return (
    <div
      dir="ltr"
      className="min-h-screen bg-[#FFF5ED] text-stone-900 flex flex-col justify-between font-sans selection:bg-orange-500/20 selection:text-orange-950 text-left"
    >
      <div>
        {/* Main Navigation */}
        <Navbar
          t={t}
          currentLang={lang}
          onSelectLang={setLang}
          onDownloadClick={handleDownloadApk}
        />

        {/* Hero Section Centered */}
        <main>
          <Hero
            t={t}
            onDownloadApk={handleDownloadApk}
            onOpenApkGuide={() => setIsApkGuideOpen(true)}
            onOpenIosModal={() => setIsIosModalOpen(true)}
            onOpenQrModal={() => setIsQrModalOpen(true)}
          />
        </main>
      </div>

      {/* Subtle single-line footer */}
      <footer className="py-6 px-4 border-t border-orange-200/50 bg-[#FDF2E9]/70 text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BrandLogo size={20} />
            <span className="font-semibold text-stone-800">Stundenplan</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-stone-500">
            <span>{t.footer.expoBuilt}</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ApkGuideModal
        isOpen={isApkGuideOpen}
        onClose={() => setIsApkGuideOpen(false)}
        t={t}
        apkUrl={apkUrl}
        onUpdateApkUrl={handleUpdateApkUrl}
      />

      <IosWaitlistModal
        isOpen={isIosModalOpen}
        onClose={() => setIsIosModalOpen(false)}
        t={t}
      />

      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        apkUrl={apkUrl}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-stone-900 text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-200 border border-orange-500/30">
          <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs font-medium leading-relaxed flex-1">
            {toastMessage}
          </p>
          <button
            onClick={() => setIsApkGuideOpen(true)}
            className="text-[11px] font-bold text-orange-400 hover:text-orange-300 underline underline-offset-2 shrink-0 ml-2 cursor-pointer"
          >
            {lang === 'de' ? 'Anleitung' : 'Guide'}
          </button>
        </div>
      )}
    </div>
  );
}
