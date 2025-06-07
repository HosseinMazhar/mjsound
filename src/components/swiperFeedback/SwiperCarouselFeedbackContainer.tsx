import SwiperCarouselFeedback from "./SwiperCarouselFeedback";

export default function SwiperCarouselFeedbackContainer() {
  const feedbacks = [
    {
      userName: "علی رضایی",
      comment:
        "قبل از اینکه بیام این فروشگاه، کلی جا رو گشتم ولی هیچ‌جا هم قیمت‌ها مناسب نبود، هم نصبشون تمیز و حرفه‌ای باشه. الان یه ضبط خوب با باند قوی دارم که عالی کار می‌کنه. ممنونم از تیم حرفه‌ای‌تون.",
      avatar: "/landingPage/feedbacks/1.jpg",
    },
    {
      userName: "مهدی قربانی",
      comment:
        "من دنبال یه جایی بودم که هم مشاوره بده، هم کار نصب رو بدون دردسر انجام بده. انتخاب این فروشگاه باعث شد بدون سردرگمی یه سیستم صوتی دقیقاً مناسب ماشینم بگیرم و نصبش هم بی‌نقص بود.",
      avatar: "/landingPage/feedbacks/2.jpg",
    },
    {
      userName: "نیما سهرابی",
      comment:
        "صدا برام خیلی مهمه و چند جا رفته بودم ولی نتیجه راضی‌کننده نبود. از وقتی سیستم صوتی رو اینجا نصب کردم، کیفیت صدا فوق‌العاده شده. برخورد پرسنل هم خیلی خوب بود و وقت گذاشتن تا مطمئن بشم همه چیز درسته.",
      avatar: "/landingPage/feedbacks/3.jpg",
    },
  ];
  return <SwiperCarouselFeedback slides={feedbacks} />;
}
