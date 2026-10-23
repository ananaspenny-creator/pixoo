const translations = {
  ar: {
    navCreate: 'إنشاء حساب',
    eyebrow: 'موارد مجانية للمبدعين',
    title: 'صُنع محتواك بسهولة.<br />ابدأ الآن مع Pixoo',
    subtitle: 'مولّدات الصوت، الصور والفيديوهات مجانًا، مصممة لمساعدتك على إنتاج محتوى قوي بسرعة وبدون تعقيد.',
    primaryBtn: 'ابدأ مجانًا',
    secondaryBtn: 'استكشف الأدوات',
    stat1: 'أنواع المحتوى',
    stat2: 'مجاني',
    stat3: 'متاح',
    cardAudio: 'توليد صوت',
    cardImage: 'إنشاء صور',
    cardVideo: 'إنتاج فيديو',
    toolsEyebrow: 'الأدوات',
    toolsTitle: 'كل ما تحتاجه لتطوير محتواك',
    toolAudioTitle: 'مولّد الصوت',
    toolAudioText: 'حوّل الفكرة إلى نص منطوق بجودة احترافية.',
    toolImageTitle: 'مولّد الصور',
    toolImageText: 'أنشئ مشاهد ورسومات مخصصة بسرعة وبأفكار جديدة.',
    toolVideoTitle: 'مولّد الفيديو',
    toolVideoText: 'قم بإنشاء عروض قصيرة ومقاطع جذابة من أفكارك.',
    toolIdeasTitle: 'مساعد الفكر',
    toolIdeasText: 'اكتشف أفكارًا جديدة، سيناريوهات ومحتوى جاهز.',
    freeEyebrow: 'مجاني بالكامل',
    freeTitle: 'لا رسوم، لا اشتراكات، لا حواجز.',
    freeButton: 'أنشئ حسابك الآن',
    accountEyebrow: 'إبدأ الآن',
    accountTitle: 'أنشئ حسابك في Pixoo',
    accountText: 'ابدأ بتجربة أدواتك المفضلة، احفظ المشاريع، واستمتع بإمكانية الوصول المجاني.',
    labelName: 'الاسم الكامل',
    labelEmail: 'البريد الإلكتروني',
    labelPassword: 'كلمة المرور',
    signupBtn: 'إنشاء الحساب',
    formNote: 'مجاني دائمًا — بدون اشتراك.',
    signupSuccess: 'تم إنشاء حسابك بنجاح.',
    requiredFields: 'يرجى ملء جميع الحقول أولاً.'
  },
  en: {
    navCreate: 'Create account',
    eyebrow: 'Free resources for creators',
    title: 'Create your content effortlessly.<br />Start with Pixoo',
    subtitle: 'Free audio, image, and video generators designed to help you produce high-impact content quickly and easily.',
    primaryBtn: 'Get started free',
    secondaryBtn: 'Explore tools',
    stat1: 'content types',
    stat2: 'free',
    stat3: 'available',
    cardAudio: 'Audio generation',
    cardImage: 'Image creation',
    cardVideo: 'Video production',
    toolsEyebrow: 'Tools',
    toolsTitle: 'Everything you need to build your content',
    toolAudioTitle: 'Voice Generator',
    toolAudioText: 'Turn ideas into polished spoken audio with professional quality.',
    toolImageTitle: 'Image Generator',
    toolImageText: 'Create custom scenes and artwork quickly with fresh ideas.',
    toolVideoTitle: 'Video Generator',
    toolVideoText: 'Generate engaging shorts and clips from your concepts.',
    toolIdeasTitle: 'Creative Assistant',
    toolIdeasText: 'Discover new ideas, scripts, and ready-to-use content.',
    freeEyebrow: '100% free',
    freeTitle: 'No fees, no subscriptions, no blockers.',
    freeButton: 'Create your account',
    accountEyebrow: 'Get started',
    accountTitle: 'Create your Pixoo account',
    accountText: 'Begin using your favorite tools, save projects, and enjoy free access from day one.',
    labelName: 'Full name',
    labelEmail: 'Email address',
    labelPassword: 'Password',
    signupBtn: 'Create account',
    formNote: 'Always free — no subscription needed.',
    signupSuccess: 'Your account has been created successfully.',
    requiredFields: 'Please fill in all fields.'
  },
  fr: {
    navCreate: 'Créer un compte',
    eyebrow: 'Ressources gratuites pour les créateurs',
    title: 'Créez votre contenu sans effort.<br />Commencez avec Pixoo',
    subtitle: 'Générateurs gratuits de son, d’images et de vidéos pour produire rapidement un contenu puissant.',
    primaryBtn: 'Commencer gratuitement',
    secondaryBtn: 'Découvrir les outils',
    stat1: 'types de contenu',
    stat2: 'gratuit',
    stat3: 'disponible',
    cardAudio: 'Génération audio',
    cardImage: 'Création d’images',
    cardVideo: 'Production vidéo',
    toolsEyebrow: 'Outils',
    toolsTitle: 'Tout ce qu’il faut pour créer votre contenu',
    toolAudioTitle: 'Générateur vocal',
    toolAudioText: 'Transformez vos idées en voix parlée professionnelle.',
    toolImageTitle: 'Générateur d’images',
    toolImageText: 'Créez des scènes personnalisées et des visuels innovants rapidement.',
    toolVideoTitle: 'Générateur vidéo',
    toolVideoText: 'Produisez des courts clips et des vidéos captivantes à partir de vos idées.',
    toolIdeasTitle: 'Assistant créatif',
    toolIdeasText: 'Découvrez de nouvelles idées, scénarios et contenus prêts à utiliser.',
    freeEyebrow: '100 % gratuit',
    freeTitle: 'Aucun frais, aucun abonnement, aucune barrière.',
    freeButton: 'Créer votre compte',
    accountEyebrow: 'Commencer',
    accountTitle: 'Créez votre compte Pixoo',
    accountText: 'Commencez à utiliser vos outils favoris, enregistrez vos projets et profitez d’un accès gratuit.',
    labelName: 'Nom complet',
    labelEmail: 'Adresse e-mail',
    labelPassword: 'Mot de passe',
    signupBtn: 'Créer le compte',
    formNote: 'Toujours gratuit — aucun abonnement requis.',
    signupSuccess: 'Votre compte a été créé avec succès.',
    requiredFields: 'Veuillez remplir tous les champs.'
  }
};

const html = document.documentElement;
const langButtons = document.querySelectorAll('.lang-btn');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const toast = document.getElementById('toast');

function localize(lang) {
  const dictionary = translations[lang] || translations.ar;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function scrollToSection(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(button.dataset.scrollTarget);
  });
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    localize(lang);
  });
});

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    showToast(translations[html.lang]?.requiredFields || translations.ar.requiredFields);
    return;
  }

  const account = { name, email, password, createdAt: new Date().toISOString() };
  localStorage.setItem('pixoo-account', JSON.stringify(account));
  showToast(translations[html.lang]?.signupSuccess || translations.ar.signupSuccess);
  signupForm.reset();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

localize('ar');
