import Banner from "./home/Banner/banner";
import Header from "./home/Header/header";
import HeroSection from "./home/HeroSection/heroSection";
import ProductList from "./home/ProductList/product_list";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Header />
      <HeroSection />
      <ProductList />
    </div>
  );
}
