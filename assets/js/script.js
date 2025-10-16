// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 移动菜单切换
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.flexDirection = 'column';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.querySelectorAll('.feature-card, .use-case-card, .testimonial-card, .faq-item').forEach(card => {
    observer.observe(card);
});

// FAQ 折叠效果
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // 关闭所有FAQ
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // 如果当前FAQ未激活，则激活它
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// 表单提交处理（如果有表单）
/*const ctaButton = document.querySelector('.cta-button');
const productCta = document.querySelector('.product-cta');
const productSecondaryCta = document.querySelector('.product-secondary-cta');
const navCta = document.querySelector('.nav-cta');

[ctaButton, productCta, productSecondaryCta, navCta].forEach(button => {
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以添加注册或登录的逻辑
            alert('感谢您的兴趣！注册功能即将推出，敬请期待。');
        });
    }
});*/

// 页面加载完成后的动画
window.addEventListener('load', function() {
    document.querySelector('.hero-container').classList.add('fade-in');
});