import React, { useState } from 'react';
import { TranslationContent } from '../data/translations.ts';
import { scheduleEvents, CourseEvent } from '../data/scheduleData.ts';
import { ChevronLeft, ChevronRight, Settings, Info, MapPin, Clock, User, X } from 'lucide-react';

interface PhoneMockupProps {
  t: TranslationContent;
}

const HOUR_HEIGHT = 54; // Exact pixels per hour for zero misalignment
const START_HOUR = 8; // 08:00
const HOURS = [8, 9, 10, 11, 12, 13, 14, 15];

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'woche' | 'tag' | 'liste'>('woche');
  const [selectedDayKey, setSelectedDayKey] = useState<'mo' | 'di' | 'mi' | 'do' | 'fr'>('di');
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [selectedCourse, setSelectedCourse] = useState<CourseEvent | null>(null);

  const daysList: Array<{ key: 'mo' | 'di' | 'mi' | 'do' | 'fr'; label: string; num: number; index: number }> = [
    { key: 'mo', label: t.phone.days.mo.name, num: t.phone.days.mo.day, index: 0 },
    { key: 'di', label: t.phone.days.di.name, num: t.phone.days.di.day, index: 1 },
    { key: 'mi', label: t.phone.days.mi.name, num: t.phone.days.mi.day, index: 2 },
    { key: 'do', label: t.phone.days.do.name, num: t.phone.days.do.day, index: 3 },
    { key: 'fr', label: t.phone.days.fr.name, num: t.phone.days.fr.day, index: 4 },
  ];

  const currentWeekNumber = 42 + weekOffset;

  return (
    <div className="relative mx-auto max-w-[300px] sm:max-w-[340px] w-full select-none text-left">
      {/* Outer Phone Bezel Chassis */}
      <div className="relative rounded-[36px] sm:rounded-[40px] p-2 sm:p-2.5 bg-gradient-to-b from-[#252a3a] via-[#141826] to-[#0d101c] shadow-2xl shadow-orange-950/25 border border-slate-700/60">
        
        {/* Subtle Hardware Buttons */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-slate-600 rounded-l-xs opacity-60"></div>
        <div className="absolute -left-[3px] top-38 w-[3px] h-10 bg-slate-600 rounded-l-xs opacity-60"></div>
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-slate-600 rounded-r-xs opacity-60"></div>

        {/* Screen Glass Surface */}
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#070a12] text-slate-100 overflow-hidden border border-white/5 flex flex-col h-[520px] sm:h-[600px]">
          
          {/* Top Dynamic Island / Speaker Pill */}
          <div className="pt-2 px-5 flex items-center justify-between text-[11px] font-mono text-slate-400 shrink-0">
            <span>09:41</span>
            <div className="w-18 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700"></div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-4.5 h-2.5 border border-slate-400 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-slate-200 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* App Header (Exact match to screenshot) */}
          <div className="pt-2.5 px-3.5 pb-2 shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                  {t.phone.month}
                </h2>
                <p className="text-[11px] font-mono text-slate-400">
                  {t.phone.kw.replace('42', `${currentWeekNumber}`)}
                </p>
              </div>

              {/* Controls: < Heute > + Gear */}
              <div className="flex items-center gap-1">
                <div className="flex items-center bg-[#151926] border border-white/10 rounded-full p-0.5">
                  <button
                    onClick={() => setWeekOffset((prev) => prev - 1)}
                    className="p-1 hover:text-white text-slate-400 rounded-full transition-colors"
                    title="Vorherige Woche"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setWeekOffset(0)}
                    className="px-1.5 py-0.5 text-[11px] font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    {t.phone.today}
                  </button>
                  <button
                    onClick={() => setWeekOffset((prev) => prev + 1)}
                    className="p-1 hover:text-white text-slate-400 rounded-full transition-colors"
                    title="Nächste Woche"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={() => alert('Einstellungen / Settings')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-full transition-colors"
                  title="Einstellungen"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Segmented View Tabs: Woche / Tag / Liste */}
            <div className="mt-2.5 grid grid-cols-3 bg-[#131724] p-1 rounded-xl border border-white/5 text-[11px] font-medium">
              <button
                onClick={() => setActiveTab('woche')}
                className={`py-1 rounded-lg transition-all ${
                  activeTab === 'woche'
                    ? 'bg-[#20273a] text-white shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.phone.weekTab}
              </button>
              <button
                onClick={() => setActiveTab('tag')}
                className={`py-1 rounded-lg transition-all ${
                  activeTab === 'tag'
                    ? 'bg-[#20273a] text-white shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.phone.dayTab}
              </button>
              <button
                onClick={() => setActiveTab('liste')}
                className={`py-1 rounded-lg transition-all ${
                  activeTab === 'liste'
                    ? 'bg-[#20273a] text-white shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.phone.listTab}
              </button>
            </div>

            {/* Days Row: Mo 12, Di 13, Mi 14, Do 15, Fr 16 */}
            <div className="mt-2.5 grid grid-cols-5 text-center text-xs">
              {daysList.map((d) => {
                const isSelected = selectedDayKey === d.key;
                return (
                  <button
                    key={d.key}
                    onClick={() => {
                      setSelectedDayKey(d.key);
                    }}
                    className="flex flex-col items-center py-0.5 group transition-transform active:scale-95"
                  >
                    <span className="text-[10px] text-slate-400 font-medium group-hover:text-slate-200">
                      {d.label}
                    </span>
                    <span
                      className={`mt-1 w-5.5 h-5.5 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all ${
                        isSelected
                          ? 'bg-orange-500 text-white shadow-md shadow-orange-950'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {d.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Schedule Viewport Container */}
          <div className="relative flex-1 overflow-y-auto px-1.5 pb-4 border-t border-white/5">
            {activeTab === 'woche' && (
              <div
                className="relative pt-1 select-none"
                style={{ height: `${HOURS.length * HOUR_HEIGHT + 10}px` }}
              >
                {/* Mathematical Grid with exact pixel rows */}
                {HOURS.map((hr, idx) => (
                  <div
                    key={hr}
                    style={{ top: `${idx * HOUR_HEIGHT}px`, height: `${HOUR_HEIGHT}px` }}
                    className="absolute left-0 right-0 border-t border-white/[0.07] flex items-start"
                  >
                    <span className="w-8 text-[9px] font-mono text-slate-500 -mt-2 block leading-none">
                      {hr < 10 ? `0${hr}:00` : `${hr}:00`}
                    </span>
                  </div>
                ))}

                {/* Day column vertical lines */}
                <div className="ml-9 grid grid-cols-5 h-full border-l border-white/[0.07]">
                  {[0, 1, 2, 3, 4].map((col) => (
                    <div
                      key={col}
                      className="border-r border-white/[0.07] h-full"
                    />
                  ))}
                </div>

                {/* Event Blocks positioned with exact pixel math */}
                <div className="absolute left-9 right-0 top-0 bottom-0 pointer-events-auto">
                  <div className="relative w-full h-full">
                    {scheduleEvents.map((evt) => {
                      const colWidth = 20; // 5 columns = 20%
                      const leftPos = evt.dayIndex * colWidth;
                      const topPx = (evt.startHour - START_HOUR) * HOUR_HEIGHT;
                      const heightPx = evt.durationHours * HOUR_HEIGHT - 3;

                      return (
                        <div
                          key={evt.id}
                          onClick={() => setSelectedCourse(evt)}
                          style={{
                            left: `calc(${leftPos}% + 2px)`,
                            width: `calc(${colWidth}% - 4px)`,
                            top: `${topPx}px`,
                            height: `${heightPx}px`,
                          }}
                          className={`absolute rounded-md p-1 text-left cursor-pointer transition-all hover:scale-[1.03] hover:z-20 border shadow-xs overflow-hidden flex flex-col justify-between ${evt.bgClass} ${evt.borderClass}`}
                        >
                          <div>
                            <span className="text-[9px] font-bold tracking-tight text-white truncate block leading-tight">
                              {evt.code}
                            </span>
                            <span className="text-[8px] font-mono text-slate-300 block leading-tight truncate">
                              {evt.room}
                            </span>
                            <span className="text-[8px] text-slate-200 font-medium block leading-tight mt-0.5 line-clamp-2">
                              {evt.title}
                            </span>
                          </div>
                          <span className="text-[7.5px] text-slate-400 block leading-none mt-auto">
                            {evt.type}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Day View */}
            {activeTab === 'tag' && (
              <div className="pt-2 px-1 space-y-2">
                <div className="flex items-center justify-between px-1 mb-1">
                  <span className="text-xs font-semibold text-slate-300">
                    {daysList.find((d) => d.key === selectedDayKey)?.label} {daysList.find((d) => d.key === selectedDayKey)?.num}. {t.phone.month}
                  </span>
                  <span className="text-[10px] font-mono text-orange-400">
                    {scheduleEvents.filter((e) => e.day === selectedDayKey).length} Events
                  </span>
                </div>

                {scheduleEvents
                  .filter((e) => e.day === selectedDayKey)
                  .map((evt) => (
                    <div
                      key={evt.id}
                      onClick={() => setSelectedCourse(evt)}
                      className={`p-2.5 rounded-xl border cursor-pointer hover:border-orange-500/50 transition-all ${evt.bgClass} ${evt.borderClass}`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white tracking-wide truncate pr-2">
                          {evt.code} · {evt.title}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-medium shrink-0 ${evt.tagClass}`}>
                          {evt.type}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {evt.startTime} - {evt.endTime}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-white">
                          <MapPin className="w-3 h-3 text-orange-400" />
                          {evt.room}
                        </span>
                      </div>
                    </div>
                  ))}

                {scheduleEvents.filter((e) => e.day === selectedDayKey).length === 0 && (
                  <div className="py-12 text-center text-xs text-slate-400">
                    Keine Lehrveranstaltungen an diesem Tag.
                  </div>
                )}
              </div>
            )}

            {/* List View */}
            {activeTab === 'liste' && (
              <div className="pt-2 px-1 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-400 px-1 mb-1">
                  Alle Vorlesungen der Woche
                </div>
                {scheduleEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => setSelectedCourse(evt)}
                    className="p-2 rounded-lg bg-[#121624] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] uppercase font-mono px-1 py-0.2 rounded-xs bg-white/10 text-white font-bold">
                          {evt.day.toUpperCase()}
                        </span>
                        <span className="text-xs font-bold text-white truncate">
                          {evt.title}
                        </span>
                      </div>
                      <div className="text-[9px] text-slate-400 mt-0.5 font-mono">
                        {evt.startTime} - {evt.endTime} · {evt.room}
                      </div>
                    </div>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono shrink-0 ${evt.tagClass}`}>
                      {evt.code}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Interactive Modal inside Phone */}
          {selectedCourse && (
            <div className="absolute inset-x-0 bottom-0 bg-[#101524] border-t border-slate-700/80 rounded-t-2xl p-3.5 shadow-2xl z-30 animate-in fade-in slide-in-from-bottom duration-150">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                <span className="text-[11px] font-mono font-semibold text-orange-400">
                  {selectedCourse.code} · {selectedCourse.type}
                </span>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-full transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="mt-1.5 text-xs font-bold text-white leading-snug">
                {selectedCourse.title}
              </h3>

              <div className="mt-2 grid grid-cols-2 gap-1.5 text-[11px]">
                <div className="bg-[#171f33] p-1.5 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-400 block font-mono">
                    {t.phone.room}
                  </span>
                  <span className="font-bold text-white font-mono flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-orange-400" />
                    {selectedCourse.room}
                  </span>
                </div>
                <div className="bg-[#171f33] p-1.5 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-400 block font-mono">
                    {t.phone.time}
                  </span>
                  <span className="font-bold text-white font-mono flex items-center gap-1 mt-0.5">
                    <Clock className="w-2.5 h-2.5 text-cyan-400" />
                    {selectedCourse.startTime} - {selectedCourse.endTime}
                  </span>
                </div>
                <div className="bg-[#171f33] p-1.5 rounded-lg border border-white/5 col-span-2">
                  <span className="text-[9px] text-slate-400 block font-mono">
                    {t.phone.lecturer}
                  </span>
                  <span className="font-medium text-slate-200 flex items-center gap-1 mt-0.5">
                    <User className="w-2.5 h-2.5 text-slate-400" />
                    {selectedCourse.lecturer} ({selectedCourse.credits})
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Interactive footer note inside phone */}
          <div className="py-1.5 px-3 bg-[#0d101a] border-t border-white/5 text-[9px] text-slate-400 text-center flex items-center justify-center gap-1 shrink-0">
            <Info className="w-3 h-3 text-orange-400 shrink-0" />
            <span className="truncate">{t.phone.allDayNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
