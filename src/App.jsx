import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app flex justify-center items-center p-5 bg-slate-300 dark:bg-[url(./bg-dark.png)] bg-cover bg-no-repeat dark:bg-[#0f172a]">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
