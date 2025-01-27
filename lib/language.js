// Language translations
// Language translations
const translations = {
    en: {
        // Header and main content
        title: "Transform Your Business with Data",
        subtitle: "Data River WLL helps small business owners in Kuwait harness the power of their data.",
        mainText: "Transform your business insights into growth opportunities. We turn your valuable business data into automated, data-driven decisions that boost your bottom line – all while keeping your sensitive information protected. Our state-of-the-art systems make advanced data analysis accessible and actionable, giving your business the competitive edge it needs. Whether you're looking to understand customer patterns, optimize operations, or secure your business intelligence, Data River provides the expert solutions you need without the enterprise-level complexity.",
        
        // Action buttons
        learnMore: "Learn More About Data River",
        tryCoffee: "Try Our Coffee Shop Predictor",
        
        // Services section
        services: "Our Services",
        
        // Smart Business Decisions Card
        smartBusinessTitle: "Smart Business Decisions",
        smartBusinessList: [
            "Automated data processing systems",
            "Real-time performance dashboards",
            "AI-powered decision engines"
        ],
        
        // Data Security Card
        securityTitle: "Data Security",
        securityList: [
            "Enterprise-grade encryption",
            "Advanced access control",
            "Regular security audits"
        ],
        
        // Data Analytics Card
        analyticsTitle: "Data Analytics",
        analyticsList: [
            "Pattern & trend analysis",
            "Predictive modeling",
            "Custom reporting solutions"
        ],
        
        // Contact form section
        contactTitle: "Let's Transform Your Data Journey",
        contactSubtitle: "Ready to unlock the full potential of your business data? Our team of experts is eager to understand your unique challenges and craft a customized solution that drives real results.",
        
        // Form labels
        formFullName: "Full Name",
        formCompany: "Company Name",
        formEmail: "Email",
        formPhone: "Phone Number",
        formInterest: "I'm interested in:",
        formNeeds: "Tell us about your needs",
        formSubmit: "Start Your Data Journey",
        formResponse: "We typically respond within 24 hours",
        
        // Form dropdown options
        formChooseService: "Choose a service...",
        formOptionAnalysis: "Data Analysis & Mining",
        formOptionSecurity: "Data Security & Protection",
        formOptionAutomation: "Data Automation Solutions",
        formOptionOther: "Other Services",
        
        // Form success/error messages
        formSuccess: "Thank you for contacting us! We will get back to you soon.",
        formError: "Sorry, there was an error submitting the form. Please try again.",
        formSending: "Sending..."
    },
    ar: {
        // Header and main content
        title: "حوّل أعمالك باستخدام البيانات",
        subtitle: "تساعد داتا ريفر أصحاب الأعمال الصغيرة في الكويت على تسخير قوة بياناتهم",
        mainText: "حول رؤى أعمالك إلى فرص نمو. نحول بيانات عملك القيمة إلى قرارات آلية تعتمد على البيانات تعزز نتائجك النهائية - مع الحفاظ على حماية معلوماتك الحساسة. تجعل أنظمتنا المتطورة تحليل البيانات المتقدم في متناول اليد وقابلاً للتنفيذ، مما يمنح عملك الميزة التنافسية التي يحتاجها. سواء كنت تتطلع إلى فهم أنماط العملاء، أو تحسين العمليات، أو تأمين ذكاء الأعمال الخاص بك، توفر داتا ريفر الحلول الخبيرة التي تحتاجها دون تعقيد على مستوى المؤسسات.",
        
        // Action buttons
        learnMore: "تعرف أكثر على داتا ريفر",
        tryCoffee: "جرب متنبئ المقهى",
        
        // Services section
        services: "خدماتنا",
        
        // Smart Business Decisions Card
        smartBusinessTitle: "قرارات ذكية و مدروسة",
        smartBusinessList: [
            "أنظمة معالجة البيانات الآلية",
            "لوحات متابعة الأداء في الوقت الفعلي",
            "محركات قرار مدعومة بالذكاء الاصطناعي"
        ],
        
        // Data Security Card
        securityTitle: "بيانات آمنة",
        securityList: [
            "تشفير على مستوى المؤسسات",
            "تحكم متقدم في الوصول",
            "تدقيقات أمنية منتظمة"
        ],
        
        // Data Analytics Card
        analyticsTitle: "تحليل البيانات",
        analyticsList: [
            "تحليل الأنماط والاتجاهات",
            "النمذجة التنبؤية",
            "حلول تقارير مخصصة"
        ],
        
        // Contact form section
        contactTitle: "لنحول رحلة بياناتك",
        contactSubtitle: "هل أنت مستعد لإطلاق الإمكانات الكاملة لبيانات عملك؟ فريق خبرائنا متحمس لفهم تحدياتك الفريدة وتصميم حل مخصص يحقق نتائج حقيقية.",
        
        // Form labels
        formFullName: "الاسم الكامل",
        formCompany: "اسم الشركة",
        formEmail: "البريد الإلكتروني",
        formPhone: "رقم الهاتف",
        formInterest: "أنا مهتم بـ:",
        formNeeds: "أخبرنا عن احتياجاتك",
        formSubmit: "ابدأ رحلة بياناتك",
        formResponse: "نرد عليك خلال 24 ساعة!",
        
        // Form dropdown options
        formChooseService: "اختر خدمة...",
        formOptionAnalysis: "تحليل واستخراج البيانات",
        formOptionSecurity: "حماية وأمن البيانات",
        formOptionAutomation: "حلول أتمتة البيانات",
        formOptionOther: "خدمات أخرى",
        
        // Form success/error messages
        formSuccess: "شكراً لتواصلك معنا! سنعود إليك قريباً.",
        formError: "عذراً، حدث خطأ في تقديم النموذج. يرجى المحاولة مرة أخرى.",
        formSending: "جاري الإرسال..."
    }
};

// Initial setup when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check for stored preference
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        // Apply stored language
        setLanguage(storedLang);
    }
});

function setLanguage(lang) {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = direction;
    
    // Update button text
    const langBtn = document.querySelector('.lang-text');
    langBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
    
    // Update content
    updateContent(lang);
    
    // Store the preference
    localStorage.setItem('preferredLanguage', lang);
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

function updateContent(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (key.includes('.')) {
            // Handle array translations
            const [arrayKey, index] = key.split('.');
            if (translations[lang][arrayKey] && translations[lang][arrayKey][index]) {
                element.textContent = translations[lang][arrayKey][index];
            }
        } else if (translations[lang][key]) {
            // Handle regular translations
            element.textContent = translations[lang][key];
        }
    });
}