import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import { CartProvider } from '../hooks/useCart';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='select-none w-screen h-screen flex flex-col p-2'>
      <CartProvider>
        <Header />
        <section className='grow overflow-hidden'>
          <Component {...pageProps} />
        </section>
        <Toaster />
      </CartProvider>
    </div>
  );
}

export default MyApp;
