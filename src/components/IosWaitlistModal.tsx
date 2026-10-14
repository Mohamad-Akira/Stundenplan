import React, { useState } from 'react';
import { TranslationContent } from '../data/translations.ts';
import { X, CheckCircle2, Send, Bell } from 'lucide-react';

interface IosWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationContent;
}

export const IosWaitlistModal: React.FC<IosWaitlistModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        const stored = JSON.parse(localStorage.getItem('stundenplan_waitlist') || '[]');
        stored.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('stundenplan_waitlist', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md rounded-2xl bg-[#0c101c] border border-white/10 shadow-2xl p-6 md:p-8 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.33-6.6-10.08-11.8-21.72-15.6-34.92-3.8-13.2-5.7-25.04-5.7-35.53 0-14.67 3.8-26.68 11.4-36.03 7.6-9.35 17.1-14.07 28.5-14.17 4.8 0 10.2 1.25 16.2 3.75 6 2.5 9.9 3.8 11.7 3.9 1.5 0 5.4-1.3 11.7-3.9 6.3-2.6 11.7-3.8 16.2-3.6 8.7.2 16.1 2.5 22.2 6.9 6.1 4.4 10.6 10.2 13.5 17.4-7.8 4.7-11.7 11.1-11.7 19.2 0 7.3 2.7 13.4 8.1 18.3 5.4 4.9 11.9 7.6 19.5 8.1-1.2 4.1-2.9 8.9-5.1 14.4zM119.22 31.05c0-6.1 2.2-11.8 6.6-17.1 4.4-5.3 9.9-8.7 16.5-10.2.8 5.7-.9 11.4-5.1 17.1-4.2 5.7-9.5 9.1-16 10.2-.4-0-1.1-0-2-0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t.iosModal.title}
              </h3>
              <p className="text-xs text-orange-400 font-mono">
                Apple TestFlight & App Store
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.iosModal.subtitle}
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.iosModal.emailLabel}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.iosModal.emailPlaceholder}
                className="w-full bg-[#131726] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                {t.iosModal.close}
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 rounded-xl shadow-sm transition-all"
              >
                {loading ? (
                  <span>{t.iosModal.submitting}</span>
                ) : (
                  <>
                    <Bell className="w-3.5 h-3.5" />
                    <span>{t.iosModal.notifyMe}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 text-center space-y-4 py-2">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {t.iosModal.successTitle}
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                {t.iosModal.successDesc}
              </p>
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            >
              {t.iosModal.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
