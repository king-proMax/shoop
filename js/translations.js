// ============================================
// TRANSLATIONS & LOCALIZATION
// ============================================

const translations = {
    ar: {
        // Header & Navigation
        "search_placeholder": "ابحث عن المنتجات...",
        "all_categories": "جميع الفئات",
        "electronics": "الإلكترونيات",
        "fashion": "الأزياء",
        "home_garden": "المنزل والحديقة",
        "beauty": "الجمال",
        "sports": "الرياضة",
        "hot_deals": "عروض ساخنة",
        "account": "حسابي",
        "wishlist": "المفضلة",
        "cart": "السلة",

        // Top Bar
        "free_shipping": "شحن مجاني للطلبات فوق 50$!",

        // Hero Section
        "new_collection": "مجموعة جديدة",
        "shop_now": "تسوق الآن",
        "learn_more": "اعرف المزيد",
        "discover_future": "اكتشف مستقبل التقنية",
        "hero_desc": "استكشف أحدث مجموعة الإلكترونيات مع تقنية متطورة وأسعار لا تُقاوَم.",

        // Value Props
        "fast_delivery": "توصيل سريع",
        "fast_delivery_desc": "شحن مجاني للطلبات فوق 50$",
        "secure_payment": "دفع آمن",
        "secure_payment_desc": "معاملات محمية 100%",
        "support_24": "دعم على مدار الساعة",
        "support_24_desc": "خدمة عملاء مخصصة",
        "easy_returns": "إرجاع سهل",
        "easy_returns_desc": "سياسة إرجاع 30 يوم",

        // Categories
        "shop_by_category": "تسوق حسب الفئة",
        "view_all": "عرض الكل",
        "products": "منتج",

        // Flash Sale
        "flash_sale": "🔥 تخفيضات سريعة",
        "days": "أيام",
        "hours": "ساعات",
        "minutes": "دقائق",
        "seconds": "ثواني",

        // Products
        "new_arrivals": "وصل حديثاً",
        "best_sellers": "الأكثر مبيعاً",
        "add_to_cart": "أضف للسلة",
        "buy_now": "اشتري الآن",
        "add_to_wishlist": "أضف للمفضلة",
        "quick_view": "عرض سريع",

        // Product Page
        "description": "الوصف",
        "specifications": "المواصفات",
        "reviews": "التقييمات",
        "write_review": "اكتب تقييم",
        "color": "اللون",
        "size": "المقاس",
        "quantity": "الكمية",
        "in_stock": "متوفر",
        "out_of_stock": "غير متوفر",
        "sku": "رمز المنتج",
        "category": "الفئة",
        "tags": "الوسوم",
        "you_may_like": "قد يعجبك أيضاً",
        "secure_checkout": "دفع آمن",
        "free_shipping_badge": "شحن مجاني",
        "day_returns": "إرجاع خلال 30 يوم",

        // Cart
        "shopping_cart": "سلة التسوق",
        "product": "المنتج",
        "price": "السعر",
        "subtotal": "المجموع الفرعي",
        "order_summary": "ملخص الطلب",
        "shipping": "الشحن",
        "tax": "الضريبة",
        "total": "الإجمالي",
        "coupon_code": "رمز الخصم",
        "apply": "تطبيق",
        "proceed_checkout": "إتمام الشراء",
        "continue_shopping": "متابعة التسوق",
        "cart_empty": "سلتك فارغة",
        "cart_empty_desc": "يبدو أنك لم تضف أي شيء لسلتك بعد.",

        // Checkout
        "checkout": "إتمام الشراء",
        "account_info": "معلومات الحساب",
        "guest_checkout": "الشراء كضيف",
        "sign_in": "تسجيل الدخول",
        "continue_without_account": "المتابعة بدون حساب",
        "already_have_account": "لديك حساب؟",
        "first_name": "الاسم الأول",
        "last_name": "الاسم الأخير",
        "email": "البريد الإلكتروني",
        "phone": "رقم الهاتف",
        "shipping_info": "معلومات الشحن",
        "street_address": "العنوان",
        "apartment": "الشقة / الوحدة",
        "city": "المدينة",
        "state": "المنطقة / المحافظة",
        "zip_code": "الرمز البريدي",
        "country": "الدولة",
        "shipping_method": "طريقة الشحن",
        "standard_shipping": "شحن عادي",
        "express_shipping": "شحن سريع",
        "overnight_shipping": "شحن ليلي",
        "business_days": "أيام عمل",
        "next_day": "اليوم التالي",
        "payment_method": "طريقة الدفع",
        "credit_card": "بطاقة ائتمان",
        "card_number": "رقم البطاقة",
        "expiry_date": "تاريخ الانتهاء",
        "name_on_card": "الاسم على البطاقة",
        "cash_on_delivery": "الدفع عند الاستلام",
        "cod_note": "ادفع نقداً عند استلام طلبك. رسوم إضافية 2.99$",
        "review_order": "مراجعة الطلب",
        "shipping_address": "عنوان الشحن",
        "place_order": "تأكيد الطلب",
        "order_confirmed": "تم تأكيد الطلب!",
        "thank_you": "شكراً لشرائك.",
        "confirmation_email": "تم إرسال بريد التأكيد.",
        "order_number": "رقم الطلب",
        "back": "رجوع",
        "continue": "متابعة",

        // Dashboard
        "dashboard": "لوحة التحكم",
        "my_orders": "طلباتي",
        "addresses": "العناوين",
        "account_details": "تفاصيل الحساب",
        "logout": "تسجيل الخروج",
        "dashboard_overview": "نظرة عامة",
        "total_orders": "إجمالي الطلبات",
        "pending": "قيد الانتظار",
        "wishlist_items": "عناصر المفضلة",
        "reviews_given": "التقييمات المقدمة",
        "recent_orders": "الطلبات الأخيرة",
        "order_id": "رقم الطلب",
        "date": "التاريخ",
        "status": "الحالة",
        "action": "الإجراء",
        "view": "عرض",
        "processing": "قيد المعالجة",
        "shipped": "تم الشحن",
        "delivered": "تم التسليم",
        "cancelled": "ملغي",
        "saved_addresses": "العناوين المحفوظة",
        "default": "الافتراضي",
        "home": "المنزل",
        "office": "المكتب",
        "edit": "تعديل",
        "delete": "حذف",
        "add_address": "إضافة عنوان جديد",
        "save_changes": "حفظ التغييرات",
        "current_password": "كلمة المرور الحالية",
        "new_password": "كلمة المرور الجديدة",
        "confirm_password": "تأكيد كلمة المرور",
        "my_wishlist": "قائمة المفضلة",

        // Footer
        "about_us": "من نحن",
        "contact_us": "اتصل بنا",
        "help_center": "مركز المساعدة",
        "returns_refunds": "الإرجاع والاسترداد",
        "shipping_info": "معلومات الشحن",
        "payment_methods": "طرق الدفع",
        "privacy_policy": "سياسة الخصوصية",
        "terms_service": "شروط الخدمة",
        "newsletter": "النشرة البريدية",
        "newsletter_desc": "اشترك للحصول على عروض حصرية.",
        "enter_email": "أدخل بريدك الإلكتروني",
        "subscribe": "اشترك",
        "customer_service": "خدمة العملاء",
        "quick_links": "روابط سريعة",
        "all_rights": "جميع الحقوق محفوظة",

        // About Page
        "our_story": "قصتنا",
        "our_values": "قيمنا",
        "customer_first": "العميل أولاً",
        "quality_products": "منتجات عالية الجودة",
        "trust_transparency": "الثقة والشفافية",
        "meet_team": "تعرف على فريقنا",
        "happy_customers": "عملاء سعداء",
        "products_available": "منتج متوفر",
        "countries_served": "دولة يتم خدمتها",

        // Contact Page
        "get_in_touch": "تواصل معنا",
        "our_location": "موقعنا",
        "phone_number": "رقم الهاتف",
        "email_address": "البريد الإلكتروني",
        "live_chat": "الدردشة المباشرة",
        "send_message": "أرسل رسالة",
        "subject": "الموضوع",
        "your_message": "رسالتك",
        "order_inquiry": "استفسار عن طلب",
        "product_question": "سؤال عن منتج",
        "other": "أخرى",

        // FAQ
        "faq": "الأسئلة الشائعة",
        "search_answers": "ابحث عن إجابات...",
        "orders": "الطلبات",
        "payments": "المدفوعات",
        "still_questions": "لا زلت لديك أسئلة؟",
        "contact_support": "تواصل مع الدعم",

        // Shop Page
        "filters": "الفلاتر",
        "clear_all": "مسح الكل",
        "categories": "الفئات",
        "price_range": "نطاق السعر",
        "brand": "العلامة التجارية",
        "rating": "التقييم",
        "sort_by": "ترتيب حسب",
        "featured": "مميز",
        "newest": "الأحدث",
        "price_low_high": "السعر: من الأقل للأعلى",
        "price_high_low": "السعر: من الأعلى للأقل",
        "best_rating": "الأعلى تقييماً",
        "showing_results": "عرض",
        "results": "نتيجة",
        "all_products": "جميع المنتجات",

        // Misc
        "and_up": "وأكثر",
        "sale": "تخفيض",
        "new": "جديد",
        "off": "خصم",
        "save": "وفر"
    },

    en: {
        // Header & Navigation
        "search_placeholder": "Search for products...",
        "all_categories": "All Categories",
        "electronics": "Electronics",
        "fashion": "Fashion",
        "home_garden": "Home & Garden",
        "beauty": "Beauty",
        "sports": "Sports",
        "hot_deals": "Hot Deals",
        "account": "Account",
        "wishlist": "Wishlist",
        "cart": "Cart",

        // Top Bar
        "free_shipping": "Free Shipping on orders over $50!",

        // Hero Section
        "new_collection": "New Collection",
        "shop_now": "Shop Now",
        "learn_more": "Learn More",
        "discover_future": "Discover the Future of Tech",
        "hero_desc": "Explore our latest electronics collection with cutting-edge technology and unbeatable prices.",

        // Value Props
        "fast_delivery": "Fast Delivery",
        "fast_delivery_desc": "Free shipping on orders over $50",
        "secure_payment": "Secure Payment",
        "secure_payment_desc": "100% protected transactions",
        "support_24": "24/7 Support",
        "support_24_desc": "Dedicated customer service",
        "easy_returns": "Easy Returns",
        "easy_returns_desc": "30-day return policy",

        // Categories
        "shop_by_category": "Shop by Category",
        "view_all": "View All",
        "products": "Products",

        // Flash Sale
        "flash_sale": "🔥 Flash Sale",
        "days": "Days",
        "hours": "Hours",
        "minutes": "Min",
        "seconds": "Sec",

        // Products
        "new_arrivals": "New Arrivals",
        "best_sellers": "Best Sellers",
        "add_to_cart": "Add to Cart",
        "buy_now": "Buy Now",
        "add_to_wishlist": "Add to Wishlist",
        "quick_view": "Quick View",

        // Product Page
        "description": "Description",
        "specifications": "Specifications",
        "reviews": "Reviews",
        "write_review": "Write a review",
        "color": "Color",
        "size": "Size",
        "quantity": "Quantity",
        "in_stock": "In Stock",
        "out_of_stock": "Out of Stock",
        "sku": "SKU",
        "category": "Category",
        "tags": "Tags",
        "you_may_like": "You May Also Like",
        "secure_checkout": "Secure Checkout",
        "free_shipping_badge": "Free Shipping",
        "day_returns": "30-Day Returns",

        // Cart
        "shopping_cart": "Shopping Cart",
        "product": "Product",
        "price": "Price",
        "subtotal": "Subtotal",
        "order_summary": "Order Summary",
        "shipping": "Shipping",
        "tax": "Tax",
        "total": "Total",
        "coupon_code": "Coupon code",
        "apply": "Apply",
        "proceed_checkout": "Proceed to Checkout",
        "continue_shopping": "Continue Shopping",
        "cart_empty": "Your cart is empty",
        "cart_empty_desc": "Looks like you haven't added anything to your cart yet.",

        // Checkout
        "checkout": "Checkout",
        "account_info": "Account Information",
        "guest_checkout": "Guest Checkout",
        "sign_in": "Sign In",
        "continue_without_account": "Continue without an account",
        "already_have_account": "Already have an account?",
        "first_name": "First Name",
        "last_name": "Last Name",
        "email": "Email Address",
        "phone": "Phone Number",
        "shipping_info": "Shipping Information",
        "street_address": "Street Address",
        "apartment": "Apartment, Suite, etc.",
        "city": "City",
        "state": "State/Province",
        "zip_code": "ZIP Code",
        "country": "Country",
        "shipping_method": "Shipping Method",
        "standard_shipping": "Standard Shipping",
        "express_shipping": "Express Shipping",
        "overnight_shipping": "Overnight Shipping",
        "business_days": "business days",
        "next_day": "Next business day",
        "payment_method": "Payment Method",
        "credit_card": "Credit/Debit Card",
        "card_number": "Card Number",
        "expiry_date": "Expiry Date",
        "name_on_card": "Name on Card",
        "cash_on_delivery": "Cash on Delivery",
        "cod_note": "Pay with cash when your order is delivered. Additional fee of $2.99 applies.",
        "review_order": "Review Your Order",
        "shipping_address": "Shipping Address",
        "place_order": "Place Order",
        "order_confirmed": "Order Confirmed!",
        "thank_you": "Thank you for your purchase.",
        "confirmation_email": "A confirmation email has been sent.",
        "order_number": "Order",
        "back": "Back",
        "continue": "Continue",

        // Dashboard
        "dashboard": "Dashboard",
        "my_orders": "Orders",
        "addresses": "Addresses",
        "account_details": "Account Details",
        "logout": "Logout",
        "dashboard_overview": "Dashboard Overview",
        "total_orders": "Total Orders",
        "pending": "Pending",
        "wishlist_items": "Wishlist Items",
        "reviews_given": "Reviews Given",
        "recent_orders": "Recent Orders",
        "order_id": "Order ID",
        "date": "Date",
        "status": "Status",
        "action": "Action",
        "view": "View",
        "processing": "Processing",
        "shipped": "Shipped",
        "delivered": "Delivered",
        "cancelled": "Cancelled",
        "saved_addresses": "Saved Addresses",
        "default": "Default",
        "home": "Home",
        "office": "Office",
        "edit": "Edit",
        "delete": "Delete",
        "add_address": "Add New Address",
        "save_changes": "Save Changes",
        "current_password": "Current Password",
        "new_password": "New Password",
        "confirm_password": "Confirm Password",
        "my_wishlist": "My Wishlist",

        // Footer
        "about_us": "About Us",
        "contact_us": "Contact Us",
        "help_center": "Help Center",
        "returns_refunds": "Returns & Refunds",
        "shipping_info": "Shipping Info",
        "payment_methods": "Payment Methods",
        "privacy_policy": "Privacy Policy",
        "terms_service": "Terms of Service",
        "newsletter": "Newsletter",
        "newsletter_desc": "Subscribe for exclusive deals.",
        "enter_email": "Enter your email",
        "subscribe": "Subscribe",
        "customer_service": "Customer Service",
        "quick_links": "Quick Links",
        "all_rights": "All rights reserved",

        // About Page
        "our_story": "Our Story",
        "our_values": "Our Values",
        "customer_first": "Customer First",
        "quality_products": "Quality Products",
        "trust_transparency": "Trust & Transparency",
        "meet_team": "Meet Our Team",
        "happy_customers": "Happy Customers",
        "products_available": "Products Available",
        "countries_served": "Countries Served",

        // Contact Page
        "get_in_touch": "Get in Touch",
        "our_location": "Our Location",
        "phone_number": "Phone Number",
        "email_address": "Email Address",
        "live_chat": "Live Chat",
        "send_message": "Send us a Message",
        "subject": "Subject",
        "your_message": "Your Message",
        "order_inquiry": "Order Inquiry",
        "product_question": "Product Question",
        "other": "Other",

        // FAQ
        "faq": "FAQ",
        "search_answers": "Search for answers...",
        "orders": "Orders",
        "payments": "Payments",
        "still_questions": "Still have questions?",
        "contact_support": "Contact Support",

        // Shop Page
        "filters": "Filters",
        "clear_all": "Clear All",
        "categories": "Categories",
        "price_range": "Price Range",
        "brand": "Brand",
        "rating": "Rating",
        "sort_by": "Sort By",
        "featured": "Featured",
        "newest": "Newest",
        "price_low_high": "Price: Low to High",
        "price_high_low": "Price: High to Low",
        "best_rating": "Best Rating",
        "showing_results": "Showing",
        "results": "results",
        "all_products": "All Products",

        // Misc
        "and_up": "& Up",
        "sale": "Sale",
        "new": "New",
        "off": "Off",
        "save": "Save"
    }
};

// Currency configurations
const currencies = {
    YER: {
        code: "YER",
        symbol: "ر.ي",
        name: "ريال يمني",
        nameEn: "Yemeni Riyal",
        rate: 250.25 // Rate vs USD
    },
    SAR: {
        code: "SAR",
        symbol: "ر.س",
        name: "ريال سعودي",
        nameEn: "Saudi Riyal",
        rate: 3.75
    },
    USD: {
        code: "USD",
        symbol: "$",
        name: "دولار أمريكي",
        nameEn: "US Dollar",
        rate: 1
    }
};

// Localization state
let currentLang = localStorage.getItem('language') || 'ar';
let currentCurrency = localStorage.getItem('currency') || 'YER';

// Get translation
function t(key) {
    return translations[currentLang]?.[key] || translations['en'][key] || key;
}

// Format price with currency
function formatPrice(priceUSD) {
    const currency = currencies[currentCurrency];
    const convertedPrice = priceUSD * currency.rate;

    if (currentCurrency === 'USD') {
        return `${currency.symbol}${convertedPrice.toFixed(2)}`;
    }

    // For YER and SAR, show price then symbol (Arabic style)
    if (currentLang === 'ar') {
        return `${convertedPrice.toFixed(2)} ${currency.symbol}`;
    }
    return `${currency.symbol} ${convertedPrice.toFixed(2)}`;
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML direction and lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all translatable elements
    updatePageTranslations();

    // Update language selector
    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = lang;
}

// Set currency
function setCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('currency', currency);

    // Update all prices
    updatePrices();

    // Update currency selector
    const currencySelect = document.getElementById('currency-select');
    if (currencySelect) currencySelect.value = currency;
}

// Update all translatable elements on page
function updatePageTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        el.placeholder = t(key);
    });

    document.querySelectorAll('[data-translate-title]').forEach(el => {
        const key = el.getAttribute('data-translate-title');
        el.title = t(key);
    });
}

// Update all prices on page
function updatePrices() {
    document.querySelectorAll('[data-price-usd]').forEach(el => {
        const priceUSD = parseFloat(el.getAttribute('data-price-usd'));
        el.textContent = formatPrice(priceUSD);
    });
}

// Initialize localization
function initLocalization() {
    // Set initial language and direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Set up language selector
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Set up currency selector
    const currencySelect = document.getElementById('currency-select');
    if (currencySelect) {
        currencySelect.value = currentCurrency;
        currencySelect.addEventListener('change', (e) => {
            setCurrency(e.target.value);
        });
    }

    // Initial update
    updatePageTranslations();
    updatePrices();
}

// Export for use in other scripts
window.t = t;
window.formatPrice = formatPrice;
window.setLanguage = setLanguage;
window.setCurrency = setCurrency;
window.currentLang = () => currentLang;
window.currentCurrency = () => currentCurrency;
