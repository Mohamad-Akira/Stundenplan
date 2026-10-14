export type Language = 'de' | 'en' | 'ar';

export interface TranslationContent {
  nav: {
    download: string;
    getApp: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    downloadAndroid: string;
    downloadAndroidSub: string;
    iosComingSoon: string;
    iosBadge: string;
    easGuideLink: string;
  };
  phone: {
    month: string;
    kw: string;
    today: string;
    weekTab: string;
    dayTab: string;
    listTab: string;
    days: { [key: string]: { name: string; day: number } };
    courseDetailsTitle: string;
    close: string;
    room: string;
    type: string;
    lecturer: string;
    time: string;
    allDayNote: string;
  };
  apkModal: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    downloadNow: string;
    customUrlLabel: string;
    customUrlPlaceholder: string;
    saveUrl: string;
    copied: string;
    copyLink: string;
    close: string;
    easNotice: string;
  };
  iosModal: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    notifyMe: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    close: string;
  };
  footer: {
    rights: string;
    expoBuilt: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  de: {
    nav: {
      download: 'Herunterladen',
      getApp: 'App holen',
    },
    hero: {
      badge: 'Stundenplan App',
      title: 'Dein Uni-Stundenplan.',
      titleHighlight: 'Klar und schnell.',
      subtitle: 'Alle Vorlesungen, Übungen und Raumcodes mit einem Klick im Blick.',
      downloadAndroid: 'Android APK herunterladen',
      downloadAndroidSub: 'Direkter Download · Expo EAS Build',
      iosComingSoon: 'iOS App Store',
      iosBadge: 'Demnächst',
      easGuideLink: 'Wie installiere ich die APK auf Android?',
    },
    phone: {
      month: 'Oktober 2026',
      kw: 'KW 42',
      today: 'Heute',
      weekTab: 'Woche',
      dayTab: 'Tag',
      listTab: 'Liste',
      days: {
        mo: { name: 'Mo', day: 12 },
        di: { name: 'Di', day: 13 },
        mi: { name: 'Mi', day: 14 },
        do: { name: 'Do', day: 15 },
        fr: { name: 'Fr', day: 16 },
      },
      courseDetailsTitle: 'Veranstaltungsdetails',
      close: 'Schließen',
      room: 'Raum',
      type: 'Art',
      lecturer: 'Dozent',
      time: 'Uhrzeit',
      allDayNote: 'Tippe auf eine Veranstaltung für Details',
    },
    apkModal: {
      title: 'Android APK Installation (Expo EAS)',
      subtitle: 'So installierst du die bereitgestellte APK-Datei auf deinem Android-Smartphone:',
      step1Title: '1. APK herunterladen',
      step1Desc: 'Lade die .apk Datei direkt über den Button unten herunter oder verwende deinen eigenen EAS-Download-Link.',
      step2Title: '2. "Unbekannte Apps" erlauben',
      step2Desc: 'Android fragt beim Öffnen nach der Berechtigung. Tippe auf Einstellungen und aktiviere den Schalter.',
      step3Title: '3. Installieren',
      step3Desc: 'Tippe auf "Installieren" und die Stundenplan-App ist sofort einsatzbereit.',
      downloadNow: 'APK jetzt herunterladen',
      customUrlLabel: 'EAS Build Download-Link anpassen:',
      customUrlPlaceholder: 'https://expo.dev/artifacts/eas/...',
      saveUrl: 'Speichern',
      copied: 'Kopiert!',
      copyLink: 'Link kopieren',
      close: 'Verstanden',
      easNotice: 'Expo Application Services (EAS Build)',
    },
    iosModal: {
      title: 'iOS App Store Benachrichtigung',
      subtitle: 'Die iOS-Version befindet sich aktuell in der Vorbereitung für Apple TestFlight',
      emailLabel: 'Deine E-Mail-Adresse',
      emailPlaceholder: 'studium@universitaet.de',
      notifyMe: 'Vorregistrieren & Benachrichtigen',
      submitting: 'Wird eingetragen...',
      successTitle: 'Vielen Dank! Du bist auf der Liste.',
      successDesc: 'Wir schicken dir eine E-Mail, sobald die TestFlight-Beta oder die finale iOS-App verfügbar ist.',
      close: 'Schließen',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      expoBuilt: 'Entwickelt mit React Native & Expo',
    },
  },
  en: {
    nav: {
      download: 'Download',
      getApp: 'Get App',
    },
    hero: {
      badge: 'Stundenplan App',
      title: 'Your University Timetable.',
      titleHighlight: 'Clear and fast.',
      subtitle: 'All your lectures, courses, and room codes in one clean view.',
      downloadAndroid: 'Download Android APK',
      downloadAndroidSub: 'Direct Download · Expo EAS Build',
      iosComingSoon: 'iOS App Store',
      iosBadge: 'Coming Soon',
      easGuideLink: 'How to install the APK on Android?',
    },
    phone: {
      month: 'October 2026',
      kw: 'Week 42',
      today: 'Today',
      weekTab: 'Week',
      dayTab: 'Day',
      listTab: 'List',
      days: {
        mo: { name: 'Mon', day: 12 },
        di: { name: 'Tue', day: 13 },
        mi: { name: 'Wed', day: 14 },
        do: { name: 'Thu', day: 15 },
        fr: { name: 'Fri', day: 16 },
      },
      courseDetailsTitle: 'Course Details',
      close: 'Close',
      room: 'Room',
      type: 'Type',
      lecturer: 'Instructor',
      time: 'Time',
      allDayNote: 'Tap any course block for details',
    },
    apkModal: {
      title: 'Android APK Installation (Expo EAS)',
      subtitle: 'How to install the APK build directly on your Android phone:',
      step1Title: '1. Download APK',
      step1Desc: 'Download the .apk file using the button below or paste your direct EAS download link.',
      step2Title: '2. Allow "Unknown Sources"',
      step2Desc: 'When opened, Android will prompt for permission. Tap Settings and toggle the switch on.',
      step3Title: '3. Install',
      step3Desc: 'Tap "Install" and Stundenplan is ready on your home screen.',
      downloadNow: 'Download APK Now',
      customUrlLabel: 'Custom EAS Build Download URL:',
      customUrlPlaceholder: 'https://expo.dev/artifacts/eas/...',
      saveUrl: 'Save',
      copied: 'Copied!',
      copyLink: 'Copy Link',
      close: 'Got it',
      easNotice: 'Expo Application Services (EAS Build)',
    },
    iosModal: {
      title: 'iOS App Store Notification',
      subtitle: 'The iOS version is currently preparing for Apple TestFlight and App Store submission.',
      emailLabel: 'Your Email Address',
      emailPlaceholder: 'student@university.edu',
      notifyMe: 'Pre-Register for iOS Launch',
      submitting: 'Saving...',
      successTitle: "You're on the early list!",
      successDesc: "We'll notify you via email the moment TestFlight beta or the final App Store release goes live.",
      close: 'Close',
    },
    footer: {
      rights: 'All rights reserved.',
      expoBuilt: 'Built with React Native & Expo',
    },
  },
  ar: {
    nav: {
      download: 'تحميل',
      getApp: 'احصل على التطبيق',
    },
    hero: {
      badge: 'تطبيق Stundenplan',
      title: 'جدولك الجامعي Stundenplan.',
      titleHighlight: 'بسيط وسريع.',
      subtitle: 'جميع محاضراتك وقاعاتك الدراسية في مكان واحد وبنقرة واحدة.',
      downloadAndroid: 'تحميل ملف APK للأندرويد',
      downloadAndroidSub: 'تحميل مباشر · مبني بواسطة Expo EAS',
      iosComingSoon: 'متجر آبل (iOS)',
      iosBadge: 'قريباً',
      easGuideLink: 'كيف أقوم بتثبيت ملف APK على هاتفي الأندرويد؟',
    },
    phone: {
      month: 'أكتوبر 2026',
      kw: 'الأسبوع 42',
      today: 'اليوم',
      weekTab: 'أسبوع',
      dayTab: 'يوم',
      listTab: 'قائمة',
      days: {
        mo: { name: 'الإثنين', day: 12 },
        di: { name: 'الثلاثاء', day: 13 },
        mi: { name: 'الأربعاء', day: 14 },
        do: { name: 'الخميس', day: 15 },
        fr: { name: 'الجمعة', day: 16 },
      },
      courseDetailsTitle: 'تفاصيل المحاضرة',
      close: 'إغلاق',
      room: 'القاعة',
      type: 'النوع',
      lecturer: 'المحاضر',
      time: 'التوقيت',
      allDayNote: 'اضغط على أي مادة لمعرفة التفاصيل',
    },
    apkModal: {
      title: 'طريقة تثبيت ملف APK على أندرويد (Expo EAS)',
      subtitle: 'خطوات سريعة وبسيطة لتثبيت التطبيق على جهازك بنجاح:',
      step1Title: '1. تحميل ملف APK',
      step1Desc: 'اضغط على زر التحميل المباشر أدناه أو انسخ رابط التنزيل الخاص بك.',
      step2Title: '2. تفعيل التثبيت من مصادر غير معروفة',
      step2Desc: 'سيطلب أندرويد الإذن "السماح بالتثبيت من هذا المصدر". اضغط على الإعدادات وقم بتفعيل الخيار.',
      step3Title: '3. تأكيد التثبيت',
      step3Desc: 'اضغط "تثبيت" وسيكون التطبيق جاهزاً على هاتفك فوراً.',
      downloadNow: 'تحميل APK الآن',
      customUrlLabel: 'تعديل رابط تنزيل EAS APK الخاص بك:',
      customUrlPlaceholder: 'https://expo.dev/artifacts/eas/...',
      saveUrl: 'حفظ الرابط',
      copied: 'تم النسخ!',
      copyLink: 'نسخ الرابط',
      close: 'فهمت ذلك',
      easNotice: 'تم البناء بواسطة Expo Application Services (EAS Build)',
    },
    iosModal: {
      title: 'إشعار توفر نسخة الآيفون (iOS)',
      subtitle: 'نسخة الآيفون قيد الإعداد للاختبار التجريبي عبر Apple TestFlight ومتجر App Store.',
      emailLabel: 'بريدك الإلكتروني',
      emailPlaceholder: 'student@university.edu',
      notifyMe: 'سجلني لإشعاري فور الإطلاق',
      submitting: 'جارِ الحفظ...',
      successTitle: 'تم تسجيلك بنجاح في قائمة الانتظار!',
      successDesc: 'سنرسل لك دعوة فورية بمجرد توفر نسخة TestFlight التجريبية أو رابط متجر App Store.',
      close: 'إغلاق',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      expoBuilt: 'مبني باستخدام React Native و Expo EAS',
    },
  },
};
