import React from 'react';
import { X, Smartphone, Download } from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  apkUrl: string;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  isOpen,
  onClose,
  apkUrl,
}) => {
  if (!isOpen) return null;

  // Generate a clean functional QR Code visual matrix for the download URL
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm rounded-3xl bg-[#FFFDF9] border border-orange-200/90 shadow-2xl p-6 text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
          <Smartphone className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-stone-900 tracking-tight">
          Auf Smartphone installieren
        </h3>
        <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
          Scanne den QR-Code mit deiner Kamera, um die APK direkt auf dein Android-Gerät herunterzuladen.
        </p>

        {/* QR Code Container */}
        <div className="my-5 p-4 bg-white rounded-2xl border border-orange-200/80 shadow-inner flex items-center justify-center mx-auto w-48 h-48">
          <svg className="w-full h-full text-stone-900" viewBox="0 0 100 100" fill="currentColor">
            {/* Corner Markers */}
            <rect x="5" y="5" width="28" height="28" fill="#1c1917" rx="3" />
            <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
            <rect x="13" y="13" width="12" height="12" fill="#ea580c" rx="1.5" />

            <rect x="67" y="5" width="28" height="28" fill="#1c1917" rx="3" />
            <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
            <rect x="75" y="13" width="12" height="12" fill="#ea580c" rx="1.5" />

            <rect x="5" y="67" width="28" height="28" fill="#1c1917" rx="3" />
            <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
            <rect x="13" y="75" width="12" height="12" fill="#ea580c" rx="1.5" />

            {/* Matrix Data Dots */}
            <rect x="38" y="10" width="6" height="6" fill="#1c1917" />
            <rect x="48" y="10" width="6" height="6" fill="#1c1917" />
            <rect x="40" y="22" width="6" height="6" fill="#1c1917" />
            <rect x="52" y="20" width="6" height="6" fill="#ea580c" />

            <rect x="10" y="42" width="6" height="6" fill="#1c1917" />
            <rect x="22" y="40" width="6" height="6" fill="#1c1917" />
            <rect x="34" y="38" width="6" height="6" fill="#1c1917" />
            <rect x="44" y="38" width="8" height="8" fill="#ea580c" rx="2" />
            <rect x="58" y="40" width="6" height="6" fill="#1c1917" />
            <rect x="72" y="42" width="6" height="6" fill="#1c1917" />
            <rect x="84" y="40" width="6" height="6" fill="#1c1917" />

            <rect x="40" y="52" width="6" height="6" fill="#1c1917" />
            <rect x="52" y="54" width="6" height="6" fill="#1c1917" />
            <rect x="62" y="50" width="6" height="6" fill="#ea580c" />
            <rect x="78" y="56" width="6" height="6" fill="#1c1917" />

            <rect x="38" y="68" width="6" height="6" fill="#1c1917" />
            <rect x="48" y="72" width="6" height="6" fill="#1c1917" />
            <rect x="60" y="68" width="6" height="6" fill="#1c1917" />
            <rect x="72" y="74" width="6" height="6" fill="#1c1917" />
            <rect x="84" y="70" width="6" height="6" fill="#1c1917" />
            <rect x="52" y="84" width="6" height="6" fill="#ea580c" />
            <rect x="66" y="86" width="6" height="6" fill="#1c1917" />
            <rect x="80" y="84" width="6" height="6" fill="#1c1917" />
          </svg>
        </div>

        <a
          href={apkUrl}
          download="Stundenplan.apk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Direkter Download am PC</span>
        </a>
      </div>
    </div>
  );
};
