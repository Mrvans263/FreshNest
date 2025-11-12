import React, { createContext, useContext, useMemo, useState } from "react";

const translations = {
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      booking: "Запись",
      contact: "Контакты",
      bookNow: "Записаться"
    },
    hero: {
      title: "Профессиональная уборка дома",
      subtitle: "Надёжные специалисты. Быстро и аккуратно.",
      ctaBook: "Записаться",
      ctaQuote: "Получить смету"
    },
    services: {
      heading: "Наши услуги",
      title: "Услуги",
      intro:
        "Выберите подходящий вид уборки. Все работы выполняются профессионально, аккуратно и с вниманием к деталям.",
      includes: "Что входит:",
      not_included: "Не входит:",
      prices: "Стоимость:",

      s1_title: "Поддерживающая уборка",
      s1_desc: "Регулярная уборка для поддержания чистоты и порядка в доме.",
      s1_includes: [
        "Сухая и влажная уборка всех доступных поверхностей",
        "Протирка фасадов шкафов, стекол и зеркал",
        "Застилание кровати, смена белья",
        "Уборка санузлов и кухни",
        "Мытье полов, плинтусов, обработка пылесосом",
        "Мытье посуды и раковины",
        "Вынос мусора"
      ],
      s1_not: [
        "Химчистка мебели, ковров, штор",
        "Уборка труднодоступных мест",
        "Перемещение крупной мебели",
        "Мытье стен и потолков",
        "Уборка в кладовках и шкафах"
      ],
      s1_price: [
        "1-комнатная до 40 м² — от 3 000 ₽",
        "2-комнатная до 60 м² — от 4 000 ₽",
        "3-комнатная до 80 м² — от 5 000 ₽",
        "80+ м² — по договоренности"
      ],

      s2_title: "Генеральная уборка",
      s2_desc:
        "Глубокая уборка перед праздниками, приездом гостей или сдачей жилья.",
      s2_includes: [
        "Тщательная уборка всех помещений",
        "Очистка труднодоступных мест",
        "Мойка дверей, подоконников, освещения",
        "Очистка фасадов кухонной мебели снаружи и внутри",
        "Полная дезинфекция сантехники",
        "Мытье стекол, зеркал",
        "Пылесос и влажная уборка полов"
      ],
      s2_not: [
        "Уборка строительной пыли",
        "Мытье стен и потолка по всей площади",
        "Химчистка мебели, ковров, штор",
        "Перемещение крупной мебели"
      ],
      s2_price: [
        "1-комнатная до 40 м² — от 9 000 ₽",
        "2-комнатная до 60 м² — от 12 000 ₽",
        "3-комнатная до 80 м² — от 15 000 ₽",
        "80+ м² — по договоренности"
      ],

      s3_title: "Уборка после ремонта",
      s3_desc:
        "Глубокая очистка помещения от строительной пыли и следов ремонтных работ.",
      s3_includes: [
        "Очистка строительной пыли, включая труднодоступные места",
        "Удаление следов краски, шпаклевки, клея",
        "Сухое и влажное обеспыливание",
        "Мойка дверей, подоконников, выключателей, плинтусов",
        "Мойка окон и рам изнутри",
        "Дезинфекция ванных комнат",
        "Обработка полов подходящими средствами"
      ],
      s3_not: [
        "Мытье стен и потолков полностью",
        "Химчистка мебели, ковров, штор",
        "Перемещение крупной мебели",
        "Работы снаружи выше 2 этажа без доступа"
      ],
      s3_price: [
        "1-комнатная до 40 м² — от 12 000 ₽",
        "2-комнатная до 60 м² — от 16 000 ₽",
        "3-комнатная до 80 м² — от 20 000 ₽",
        "80+ м² — по договоренности"
      ],

      s4_title: "Дополнительные услуги",
      s4_items: [
        "Мытье окон — от 500 ₽/створка",
        "Мытье духовки — от 400 ₽",
        "Мытье микроволновки — от 300 ₽",
        "Мытье холодильника внутри — от 500 ₽",
        "Обезжиривание вытяжки — от 400 ₽",
        "Мытье кухонных шкафов внутри — 600 ₽",
        "Глажка белья — от 600 ₽/час",
        "Уход за лотком питомца — 250 ₽",
        "Уборка балкона/террасы — по договоренности",
        "Забрать ключи — 500 ₽",
        "Привезти ключи — 500 ₽",
        "Аренда стремянки — 500 ₽"
      ],

      note:
        "Окончательная стоимость уточняется после осмотра объекта. Постоянным клиентам — скидки."
    },
    about: {
      title: "О себе",
      intro:
        "Здравствуйте! Меня зовут Анастасия. Я клининг-леди с опытом более 8 лет. Работаю лично или с надежной аккуратной командой.",
      f1: "8+ лет опыта",
      f2: "Москва, Подмосковье, Красногорск",
      f3: "Работаю 7 дней в неделю",
      f4: "Экологичная и безопасная химия",
      f5: "Свой инвентарь, пылесос, парогенератор",
      f6: "Аккуратность и честность",
      subtitle: "Почему клиенты выбирают меня",
      text1:
        "Навожу чистоту в квартирах и домах Москвы и Подмосковья, работаю внимательно и бережно — как у себя дома.",
      text2:
        "Использую только профессиональные и безопасные средства, приезжаю со всем необходимым оборудованием.",
      text3:
        "Гарантирую честность, порядочность и уважительное отношение к вашему дому и времени.",
      ctaTitle: "Готовы к чистоте и порядку?",
      ctaText: "Оставьте заявку — я подстроюсь под удобное для вас время.",
      ctaButton: "Записаться"
    },
    booking: {
      title: "Оставьте заявку на уборку",
      name: "Ваше имя",
      phone: "Телефон",
      chooseService: "Выберите услугу",
      date: "Дата уборки",
      comment: "Комментарий (необязательно)",
      submit: "Отправить заявку"
    },
    contact: {
      title: "Связаться с нами",
      send: "Отправить",
      message: "Сообщение"
    },
    testimonials: {
      heading: "Отзывы клиентов",
      t1: "Компания FreshNest сделала мою квартиру идеально чистой!",
      t2: "Очень вежливые сотрудники и безупречная работа!",
      t3: "Доступно, быстро и качественно!",
      n1: "Мария С.",
      n2: "Алексей П.",
      n3: "Елена К."
    },
    stats: {
      years: "лет опыта",
      clients: "довольных клиентов",
      homes: "убранных домов"
    }
  },

  /* ---------- English ---------- */
  en: {
    nav: {
      home: "Home",
      about: "About",
      booking: "Booking",
      contact: "Contact",
      bookNow: "Book Now"
    },
    hero: {
      title: "Professional Home Cleaning",
      subtitle: "Trusted pros. Fast and spotless.",
      ctaBook: "Book Now",
      ctaQuote: "Get a Quote"
    },
    services: {
      heading: "Our Services",
      title: "Services",
      intro:
        "Choose the right cleaning type. Every task is done professionally, carefully, and with attention to detail.",
      includes: "Includes:",
      not_included: "Not included:",
      prices: "Prices:",

      s1_title: "Regular Cleaning",
      s1_desc: "Routine cleaning to maintain freshness and order in your home.",
      s1_includes: [
        "Dry and wet cleaning of all accessible surfaces",
        "Wiping cabinet fronts, mirrors, and glass",
        "Making the bed and changing linens",
        "Bathroom and kitchen cleaning",
        "Mopping floors, baseboards, and vacuuming carpets",
        "Washing dishes and sink",
        "Taking out trash"
      ],
      s1_not: [
        "Upholstery or carpet dry cleaning",
        "Hard-to-reach areas",
        "Moving large furniture",
        "Washing walls or ceilings",
        "Cleaning closets or pantries"
      ],
      s1_price: [
        "1-room up to 40 m² — from 3,000 ₽",
        "2-room up to 60 m² — from 4,000 ₽",
        "3-room up to 80 m² — from 5,000 ₽",
        "80+ m² — upon request"
      ],

      s2_title: "Deep Cleaning",
      s2_desc:
        "Comprehensive cleaning before holidays, guest visits, or apartment rental.",
      s2_includes: [
        "Thorough cleaning of all rooms",
        "Dust removal in hard-to-reach areas",
        "Door, sill, and lighting cleaning",
        "Kitchen furniture and appliance cleaning (inside/out)",
        "Full disinfection of bathroom fixtures",
        "Glass and mirror washing",
        "Vacuum and wet floor cleaning"
      ],
      s2_not: [
        "Construction dust cleaning",
        "Full wall or ceiling washing",
        "Upholstery or carpet dry cleaning",
        "Moving large furniture"
      ],
      s2_price: [
        "1-room up to 40 m² — from 9,000 ₽",
        "2-room up to 60 m² — from 12,000 ₽",
        "3-room up to 80 m² — from 15,000 ₽",
        "80+ m² — upon request"
      ],

      s3_title: "Post-Renovation Cleaning",
      s3_desc:
        "Complete removal of construction dust and paint traces after repair work.",
      s3_includes: [
        "Dust removal, including hard-to-reach areas",
        "Removing paint, putty, or glue traces",
        "Two-stage dry and wet cleaning",
        "Cleaning doors, sills, switches, and baseboards",
        "Window and frame washing (inside)",
        "Bathroom disinfection",
        "Proper floor treatment for all materials"
      ],
      s3_not: [
        "Full wall or ceiling washing",
        "Upholstery or carpet dry cleaning",
        "Moving large furniture",
        "Exterior work above 2nd floor without access"
      ],
      s3_price: [
        "1-room up to 40 m² — from 12,000 ₽",
        "2-room up to 60 m² — from 16,000 ₽",
        "3-room up to 80 m² — from 20,000 ₽",
        "80+ m² — upon request"
      ],

      s4_title: "Additional Services",
      s4_items: [
        "Window cleaning — from 500 ₽/section",
        "Oven cleaning — from 400 ₽",
        "Microwave cleaning — from 300 ₽",
        "Refrigerator interior cleaning — from 500 ₽",
        "Hood degreasing — from 400 ₽",
        "Cabinet interior cleaning — 600 ₽",
        "Ironing — from 600 ₽/hour",
        "Pet litter box cleaning — 250 ₽",
        "Balcony or terrace cleaning — upon request",
        "Pick up keys — 500 ₽",
        "Return keys — 500 ₽",
        "Step ladder rental — 500 ₽"
      ],
      note:
        "Final cost is confirmed after reviewing the space. Regular clients receive discounts."
    },
    about: {
      title: "About Me",
      intro:
        "Hello! My name is Anastasia — a professional cleaning lady with over 8 years of experience. I work personally or with a reliable and careful team.",
      f1: "8+ years of experience",
      f2: "Moscow, Moscow Region, Krasnogorsk",
      f3: "Available 7 days a week",
      f4: "Eco-friendly and safe products",
      f5: "Own equipment, vacuum and steamer",
      f6: "Honest and detail-oriented",
      subtitle: "Why clients trust me",
      text1:
        "I bring cleanliness and order to homes and apartments in Moscow and the region — carefully and respectfully, as if it were my own home.",
      text2:
        "I use only professional, health-safe cleaning products and provide all necessary equipment.",
      text3:
        "I guarantee honesty, integrity, and a respectful attitude toward your space.",
      ctaTitle: "Ready for a sparkling home?",
      ctaText: "Leave a request — I’ll adjust to a convenient time for you.",
      ctaButton: "Book Now"
    },
    booking: {
      title: "Book a Cleaning",
      name: "Your Name",
      phone: "Phone Number",
      chooseService: "Select a Service",
      date: "Date",
      comment: "Comment (optional)",
      submit: "Submit Request"
    },
    contact: {
      title: "Contact Us",
      send: "Send",
      message: "Message"
    },
    testimonials: {
      heading: "What Our Clients Say",
      t1: "FreshNest made my apartment perfectly clean!",
      t2: "Very polite staff and impeccable work!",
      t3: "Affordable, fast and high quality!",
      n1: "Maria S.",
      n2: "Alexey P.",
      n3: "Elena K."
    },
    stats: {
      years: "years of experience",
      clients: "happy clients",
      homes: "homes cleaned"
    }
  }
};

/* ---------- Context ---------- */
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ru");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (path) => path.split(".").reduce((a, k) => a && a[k], translations[lang])
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
