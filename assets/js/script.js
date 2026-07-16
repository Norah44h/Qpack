/* ============================================================== 
          لتشغيل ال3 خطوط للنيف بار الخاص بالجوال
   ============================================================== */
   
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show-menu');
    });
});


/* ============================================================== 
          لتشغيل زر "المزيد" في صفحة المنتجات
   ============================================================== */

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const textSpan = button.previousElementSibling.querySelector('.more-text');
        const isHidden = textSpan.style.display === 'none';
        
        textSpan.style.display = isHidden ? 'inline' : 'none';
        button.textContent = isHidden ? 'إغلاق ▲' : 'المزيد ▼';
    });
});


/* ============================================================== 
          لتشغيل زر "المزيد" في صفحة التوظيف
   ============================================================== */

   document.querySelectorAll('.value-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.more-content').style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.more-content').style.display = 'none';
    });
});


/* ============================================================== 
                  دالة التحقق من الفورم     
   ============================================================== */
   
function setupForm(formId, successMsgId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // منع الإرسال التقليدي
        // هنا يمكنك إضافة منطق التحقق (مثل التأكد من الإيميل)
        form.style.display = 'none';
        document.getElementById(successMsgId).style.display = 'block';
    });
}
// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    setupForm('job-form', 'job-success');
    setupForm('contact-form', 'contact-success');
});

