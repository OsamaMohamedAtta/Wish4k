// تشغيل قايمة الموبايل
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    if(navLinks.classList.contains("active")) {
        menuIcon.classList.remove("ri-menu-4-line");
        menuIcon.classList.add("ri-close-line");
    } else {
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-4-line");
    }
});

// إغلاق القايمة لما المستخدم يضغط على أي رابط (في الموبايل)
document.querySelectorAll('.nav__links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-4-line");
    });
});

// تأثير سكرول على شريط الـ Navbar
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// تشغيل حركة الأسئلة الشائعة (Accordion)
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});

// تشغيل سلايدر التقييمات التلقائي
const reviews = document.querySelectorAll('.review__box');
let currentReview = 0;

if (reviews.length > 0) {
    setInterval(() => {
        // إخفاء التقييم الحالي
        reviews[currentReview].classList.remove('active');
        
        // الانتقال للتقييم اللي بعده (ولما يوصل للآخر يرجع للأول تاني)
        currentReview = (currentReview + 1) % reviews.length;
        
        // إظهار التقييم الجديد
        reviews[currentReview].classList.add('active');
    }, 4000); // 4000 يعني التقييم هيتغير كل 4 ثواني (تقدر تعدلها)
}