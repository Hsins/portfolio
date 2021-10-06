import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <section className="container mx-auto px-6 flex-grow max-w-5xl">
        <Navbar />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
}
