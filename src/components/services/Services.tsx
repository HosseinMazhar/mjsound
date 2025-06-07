import { Wrench, Headphones, Truck } from "lucide-react";

const services = [
  {
    icon: <Wrench size={60} className="text-yellow-500" />,
    title: "نصب حرفه‌ای",
    description: "نصب تخصصی انواع سیستم‌های صوتی",
  },
  {
    icon: <Headphones size={60} className="text-yellow-500" />,
    title: "مشاوره خرید",
    description: "راهنمایی کامل برای خرید بهترین تجهیزات",
  },
  {
    icon: <Truck size={60} className="text-yellow-500" />,
    title: "ارسال سریع",
    description: "تحویل فوری در سراسر کشور",
  },
];

export default function ServicesCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-4 max-w-5xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-2xl font-light mb-2 text-neutral-200 font-lalezar">{service.title}</h3>
          <p className="text-neutral-400 font-lalezar font-light text-lg">{service.description}</p>
        </div>
      ))}
    </div>
  );
}