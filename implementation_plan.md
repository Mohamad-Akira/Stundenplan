# Stundenplan University App - Landing Page Implementation Plan

A sleek, dark-mode single-page landing site for the **Stundenplan** university schedule mobile app, built with the exact visual language of the application: obsidian canvas, vibrant lecture blocks (teal, orange, purple, olive), and the signature chevron logo. Provides direct Android APK download support with EAS guidance, and an iOS waitlist notification modal.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The design and functionality directly reflect your preferences from Phase 1:
> - **Aesthetic Identity**: Exact match to the mobile screenshot—deep slate obsidian background (`#0B0F19`), crisp typography, and colorful course chips (Digitaltechnik cyan, Mathematik olive/gold, Programmierung orange/terracotta, Modellierung purple).
> - **Language Posture**: German by default (matching the German university schedule KW 42), with an instant German / English / Arabic language switch.
> - **Android APK Action**: Primary direct APK download action with EAS build helper (including a friendly install guide modal explaining "Allow Unknown Sources" for EAS builds) and customizable APK URL config.
> - **iOS Action**: "Demnächst im App Store" (Coming Soon) with an interactive pre-registration & email notification modal.

- **Confirmed Decision 1**: Single-page focused experience matching the app screenshot without bloated AI slop or unnecessary filler sections.
- **Confirmed Decision 2**: EAS APK download button with direct download and instant installation guidance for students.

---

## 1. Overview & Core Concept

- **What It Does**: A high-conversion landing page presenting the Stundenplan app for university students. Features an interactive mobile frame displaying the realistic German university timetable (Oktober 2026, KW 42), download triggers for Android (APK) and iOS (waitlist), and an interactive schedule feature preview.
- **Target Audience**: University students (Informatik, Ingenieurwesen, Naturwissenschaften, etc.) needing a clean, rapid offline-capable lecture timetable without clunky university portals.
- **Key Value**: Instant clarity on lectures, rooms, exercise groups, and weekly schedules with one tap.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Hero Viewport**:
   - Header with Stundenplan brand wordmark + icon, navigation anchors (Funktionen, Zeitplan, Download), and a language switcher (DE / EN / AR).
   - Split layout: Left column with strong value proposition (*"Dein Uni-Stundenplan. Übersichtlich, schnell und immer griffbereit."*), primary Android APK download button, and secondary iOS App Store button.
   - Right column: High-fidelity phone mockup displaying the authentic dark-mode schedule (Woche / Tag / Liste view, KW 42, lectures with rooms like `FE006-H`, `ZU430-L`, `TR_A140-H`).
2. **Interactive Timetable Demo**:
   - Students can interact directly with the schedule preview: switch between **Woche (Week)**, **Tag (Day)**, and **Liste (List)** view modes, click course blocks to see room details and lecturer info, and test day navigation.
3. **Android APK Download & EAS Helper**:
   - Clicking **"APK herunterladen (Android)"** starts the download and offers an optional modal with 3 simple steps to install an Expo / EAS APK on Android devices (enabling package installer permissions).
4. **iOS Pre-Registration Modal**:
   - Clicking **"App Store (Demnächst)"** opens a clean waitlist dialog where students can submit their email or testflight request to receive an alert the moment the iOS version drops.
5. **Key Features Grid**:
   - Three razor-sharp feature cards: Offline-First Synchronisation, Raum- & Dozenten-Finder, and Farbcodierte Module.

### Visual Identity & Theme Tokens

- **Dominant Neutral Canvas (60%)**: `#0B0F19` (Obsidian Midnight) and `#0F172A` (Slate Navy).
- **Structural Surfaces (30%)**: `#161F30` (Card surface), `#1E293B` (Elevated borders and headers), hairline borders with `rgba(255, 255, 255, 0.08)`.
- **Accent Budget (10%)**:
  - Brand Orange: `#F97316` / `#EA580C` (matching the boomerang chevron icon).
  - Module Tag Accents: Cyan (`#06B6D4`), Amber/Gold (`#EAB308`), Violet (`#A855F7`), Warm Rust (`#C2410C`), Olive (`#84CC16`).
- **Typography**: `Plus Jakarta Sans` for clean, contemporary European university app aesthetics; tabular numerals (`tabular-nums font-mono`) for timestamps (08:00 - 15:00) and room codes (`ZU430-L`).
- **Anti-Slop Discipline**: No decorative pulsing dots, no fake AI badges, no pills wrapping static metadata, no multi-level card clutter.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: EAS APK Distribution Architecture**
  - *Chosen Approach*: Provide a direct download button hooked to a pre-configured APK path (with easy configuration in the code or UI to paste the user's Expo EAS artifact URL), accompanied by an "Install Guide" modal that guides users through Android's APK sideloading steps.
  - *Why*: EAS builds generate `.apk` files directly. Students installing an APK need reassurance and instructions on how to install it smoothly.
- **Decision 2: Interactive In-Browser Timetable Mockup**
  - *Chosen Approach*: Build a live, interactive React component for the phone frame showing the exact schedule from `image.png`, allowing the user to click between Week, Day, and List views.
  - *Why*: Proves the app's real UX immediately without forcing the visitor to download blindly.
- **Decision 3: Trilingual Localization (DE / EN / AR)**
  - *Chosen Approach*: Native instant language switcher storing state in local memory, defaulting to German (the language of the app interface), with complete translations for English and Arabic (RTL support).
  - *Why*: University programs in Germany frequently host international students, and the user requested the landing page in Arabic.

---

## 4. Technical Architecture & Data Strategy

```
┌───────────────────────────────────────────────────────────────┐
│                     Stundenplan Landing Page                  │
├───────────────────────────────┬───────────────────────────────┤
│ Top Navigation                │ Language Selector (DE/EN/AR)  │
│ [Wordmark & Chevron Icon]     │ Quick Download Action         │
├───────────────────────────────┴───────────────────────────────┤
│ Hero Section                                                  │
│ ┌─────────────────────────────┐ ┌───────────────────────────┐ │
│ │ Value Proposition & Headline│ │ Realistic Mobile Mockup   │ │
│ │ Action 1: Android APK DL    │ │ - Tab switch (Woche/Tag)  │ │
│ │ Action 2: iOS Waitlist CTA  │ │ - Course blocks & rooms   │ │
│ └─────────────────────────────┘ └───────────────────────────┘ │
├───────────────────────────────────────────────────────────────┤
│ Core Feature Highlights                                       │
│ ┌───────────────┐ ┌───────────────────┐ ┌───────────────────┐ │
│ │ 01. Offline   │ │ 02. Raum- &       │ │ 03. Farbcodierte  │ │
│ │     Verfügbar │ │     Gebäude-Nav   │ │     Veranstaltungen││
│ └───────────────┘ └───────────────────┘ └───────────────────┘ │
├───────────────────────────────────────────────────────────────┤
│ Interactive Modals                                            │
│ ├─ EAS APK Android Installation Guide Modal                   │
│ └─ iOS TestFlight & App Store Waitlist Notification Modal     │
├───────────────────────────────────────────────────────────────┤
│ Minimalist Footer (Impressum, Datenschutz, EAS APK Help)      │
└───────────────────────────────────────────────────────────────┘
```

### Component Structure
- `App.tsx`: Main layout, state for language, active schedule view, and modal visibility.
- `components/Navbar.tsx`: Strict 3-zone header with single-line brand and language switch.
- `components/Hero.tsx`: Typography headline, dual CTAs (Android + iOS), student social proof.
- `components/PhoneFrame.tsx`: Interactive SVG/CSS phone bezel with realistic timetable view (matches `image.png`).
- `components/Features.tsx`: Editorial numbered benefits of the app.
- `components/ApkGuideModal.tsx`: Step-by-step EAS APK sideload guide with direct link copy.
- `components/IosWaitlistModal.tsx`: Form to capture email for iOS launch notification.
- `components/Footer.tsx`: Clean single-line footer.
- `data/translations.ts`: Translations for German, English, and Arabic.
- `data/scheduleData.ts`: Complete course entries matching the screenshot (Mathematik, Grundlagen der Programmierung, Digitaltechnik, Modellierung).

---

## 5. Verification Plan

- **Compilation**: Run `compile_applet` to ensure TypeScript and JSX build with zero errors.
- **Responsiveness**: Verify on desktop (1440px) and mobile viewport widths.
- **Interactivity**: Verify all buttons (APK download, iOS waitlist modal, timetable tab switches, language switch).
