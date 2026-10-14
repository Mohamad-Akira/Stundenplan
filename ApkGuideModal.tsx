import React, { useState } from 'react';
import { TranslationContent } from '../data/translations.ts';
import { X, Download, ExternalLink, Check, Settings2, ShieldAlert, Sparkles } from 'lucide-react';

interface ApkGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationContent;
  apkUrl: string;
  onUpdateApkUrl: (newUrl: string) => void;
}

export const ApkGuideModal: React.FC<ApkGuideModalProps> = ({
  isOpen,
  onClose,
  t,
  apkUrl,
  onUpdateApkUrl,
}) => {
  const [inputUrl, setInputUrl] = useState(apkUrl);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      onUpdateApkUrl(inputUrl.trim());
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(apkUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#0c101c] border border-white/10 shadow-2xl p-6 md:p-8 text-left overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.apkModal.easNotice}</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {t.apkModal.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {t.apkModal.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto space-y-6 py-4 pr-1">
          {/* Step by step */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-[#121727] border border-white/5 flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs flex items-center justify-center shrink-0 border border-orange-500/30">
                1
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-white text-sm mb-1">
                  {t.apkModal.step1Title}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {t.apkModal.step1Desc}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-[#121727] border border-white/5 flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/30">
                2
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  {t.apkModal.step2Title}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {t.apkModal.step2Desc}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-[#121727] border border-white/5 flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-500/30">
                3
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-white text-sm mb-1">
                  {t.apkModal.step3Title}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {t.apkModal.step3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* EAS Developer Config Box */}
          <div className="p-4 rounded-xl bg-[#141b30] border border-orange-500/20">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-2">
              <Settings2 className="w-4 h-4" />
              <span>{t.apkModal.customUrlLabel}</span>
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Hier kannst du den direkten EAS Build Download-Link deiner Expo-App eintragen (z.B. https://expo.dev/artifacts/eas/... oder Google Drive / GitHub Releases).
            </p>

            <form onSubmit={handleSaveUrl} className="flex gap-2">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder={t.apkModal.customUrlPlaceholder}
                className="flex-1 bg-[#0b0e1a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
              >
                {saved ? <Check className="w-4 h-4" /> : t.apkModal.saveUrl}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
            <span>{copied ? t.apkModal.copied : t.apkModal.copyLink}</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {t.apkModal.close}
            </button>
            <a
              href={apkUrl}
              download="Stundenplan.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t.apkModal.downloadNow}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
