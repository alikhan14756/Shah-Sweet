import Hero from '../sections/Hero';
import Categories from '../sections/Categories';
import BestSellers from '../sections/BestSellers';
import SpecialItems from '../sections/SpecialItems';
import AboutPreview from '../sections/AboutPreview';
import Reviews from '../sections/Reviews';
import Gallery from '../sections/Gallery';
import ContactSection from '../sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <BestSellers />
      <SpecialItems />
      <AboutPreview />
      <Reviews />
      <Gallery />
      <ContactSection />
    </div>
  );
};

export default Home;
