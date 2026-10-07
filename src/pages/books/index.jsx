import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";

export default function Books() {
  return (
    <>
    <Header />  
    <ProductList
      title="Daftar Buku"
      subtitle="Koleksi lengkap buku Bookstore dan rekomendasi editor untukmu."
    />
    <Footer />
    </>
  )
}