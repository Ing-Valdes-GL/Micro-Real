import { Hero } from "@/components/home/Hero";
import { AphorismSection } from "@/components/home/AphorismSection";
import { SaleProducts } from "@/components/home/SaleProducts";
import { OrderOfTheDay } from "@/components/home/OrderOfTheDay";
import { PopularProducts } from "@/components/home/PopularProducts";
import { StariaSection } from "@/components/home/StariaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AphorismSection />
      <SaleProducts />
      <OrderOfTheDay />
      <PopularProducts />
      <StariaSection />
      <TestimonialsSection />
    </>
  );
}
