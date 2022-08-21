import Router from 'next/router';
import toast from 'react-hot-toast';
import KhaltiCheckout from 'khalti-checkout-web';
import { useCart } from '../hooks/useCart';
import axios from 'axios';

export default function Bills() {
  const { billItems, makePayment } = useCart();
  let subtotal = 0;
  const publicKey = process.env.KHALTI;

  const processData = async () => {
    let token = Math.floor(Math.random() * 100 + 1);
    await axios
      .post('/api/order', { token, billItems })
      .then((success) => {
        console.log(success);
        Router.push(`/success/${token}`);
      })
      .catch((error) => console.log(error));
  };

  const notify = () => {
    toast.success('Payment successful!');
  };

  let config = {
    publicKey,
    productIdentity: '1234567890',
    productName: 'Drogon',
    productUrl: 'http://gameofthrones.com/buy/Dragons',
    eventHandler: {
      onSuccess(payload) {
        makePayment();
        processData();
        // notify();
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log('Widget is closing');
      },
    },
    paymentPreference: [
      'KHALTI',
      'EBANKING',
      'MOBILE_BANKING',
      'CONNECT_IPS',
      'SCT',
    ],
  };

  var checkout;

  if (typeof window !== undefined) {
    checkout = new KhaltiCheckout(config);
  }

  if (billItems.length < 1)
    return (
      <div className='h-full grid place-items-center'>No due amount yet.</div>
    );

  return (
    <div className='p-2'>
      <h2 className='text-lg font-bold'>Your Receipt</h2>
      {billItems.map((item) => {
        subtotal += item.pricePerUnit * item.quantity;
        return (
          <section key={item.name} className='p-2 border-b-2 bg-gray-100'>
            <h2 className='text-sm font-semibold'>{item.name}</h2>
            <div className='flex justify-between items-center'>
              <aside className='text-xs'>रू{item.pricePerUnit}</aside>
              <aside className='text-xs'>{item.quantity}x</aside>
              <aside className='font-semibold'>
                रू{item.quantity * item.pricePerUnit}
              </aside>
            </div>
          </section>
        );
      })}
      <section className='py-4'>
        <div className='flex justify-between text-xs'>
          <aside>Subtotal</aside>
          <aside>रू{subtotal}</aside>
        </div>
        <div className='flex justify-between text-xs'>
          <aside>Service charge</aside>
          <aside>10%</aside>
          <aside>रू{(subtotal * 0.1).toFixed(2)}</aside>
        </div>
        <div className='flex justify-between text-xs border-b-2'>
          <aside>Tax</aside>
          <aside>13%</aside>
          <aside>रू{(subtotal * 0.13).toFixed(2)}</aside>
        </div>
        <div className='flex justify-between font-semibold'>
          <aside>Grand Total</aside>
          <aside>
            रू{(subtotal * 0.13 + subtotal * 0.1 + subtotal).toFixed(2)}
          </aside>
        </div>
      </section>
      <button
        className='fixed bottom-0 left-0 w-full p-4 bg-purple-500 font-bold text-white'
        onClick={() => checkout.show({ amount: 1000 })}
      >
        Pay with Khalti
      </button>
    </div>
  );
}
