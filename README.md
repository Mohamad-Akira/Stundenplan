# Stundenplan Landing Page

تطبيق صفحة هبوط حديثة وسريعة لتطبيق Stundenplan مبنية باستخدام React + Vite + Tailwind CSS.

---

## 🚀 كيفية تشغيل المشروع على جهازك (Local Development)

سبب عدم عمل الصفحة عند الضغط المزدوج على `index.html` هو أن تطبيقات **React & TypeScript** تحتاج إلى تشغيل خادم تطوير محلي (Node.js) لتجميع ملفات `.tsx`.

### الخطوات:
1. تأكد من تثبيت **Node.js** على جهازك (من [nodejs.org](https://nodejs.org/)).
2. افتح مجلد المشروع في الـ Terminal / موجه الأوامر (Command Prompt).
3. اكتب الأمرين التاليين بالترتيب:

```bash
# 1. تثبيت الحزم المطلوبة
npm install

# 2. تشغيل الموقع محلياً
npm run dev
```

4. افتح المتصفح على الرابط الذي سيظهر لك:
`http://localhost:3000`

---

## 🌐 رفع المشروع على GitHub ونشره مجاناً في دقيقتين (بدون تعقيدات)

### الخطوة 1: الرفع على GitHub
1. افتح [GitHub.com](https://github.com) وأنشئ مستودعاً جديداً (New Repository).
2. يمكنك ببساطة سحب وإفلات جميع ملفات المشروع (ما عدا مجلد `node_modules` إن وجد) إلى المستودع، أو باستخدام أوامر Git:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### الخطوة 2: النشر المجاني عبر Vercel أو Netlify
1. افتح [Vercel.com](https://vercel.com) أو [Netlify.com](https://netlify.com) وسجل الدخول بحساب GitHub الخاص بك.
2. اضغط على **"Add New Project"** واختر مستودع `Stundenplan`.
3. اضغط على **Deploy** دون الحاجة لتغيير أي إعدادات! سيتكفل الموقع ببناء ملفات Vite ونشرها فوراً وإعطائك رابطاً مباشراً وسريعاً ومجانياً مدى الحياة.
