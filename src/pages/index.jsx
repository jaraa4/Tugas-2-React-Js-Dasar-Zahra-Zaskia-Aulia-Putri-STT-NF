import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Team from "../components/shared/Team";

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
        <Header />

        {/* ===== HERO ===== */}
        <Hero />

        {/* ===== PRODUCTS LIST ===== */}
        <ProductList
          title="Buku Terpopuler"
          subtitle="Koleksi buku terpopuler dan rekomendasi pilihan editor kami untukmu."
        />

        {/* ===== TEAM ===== */}
        <Team />

        {/* ===== CONTACT ===== */}
        <Contact />

        {/* ===== FOOTER ===== */}
        <Footer />
    </>
  );
}