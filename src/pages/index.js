import toast from 'react-hot-toast';
import { useState } from 'react';
import TabMenu from '../components/TabMenu';
import { useCart } from '../hooks/useCart';
import { menuItems } from '../items/constants';

export default function Home() {
  const [active, setActive] = useState('momo');
  const { totalItems, cartItems, cost, addToCart, removeFromCart, placeOrder } =
    useCart();

  const findItem = (item) => {
    return cartItems.find((i) => i.name === item.name);
  };

  const showItems = (category) => (
    <section className='m-2 my-4'>
      {menuItems[category].map((item) => (
        <section key={item.name} className='py-2 border-b-2'>
          <h2 className='text-sm font-semibold'>{item.name}</h2>
          <div className='flex justify-between items-center'>
            <span className='text-xs'>रू{item.pricePerUnit}</span>
            {findItem(item)?.quantity > 0 ? (
              <section className='flex items-center'>
                <aside
                  className='text-xl py-1 px-2'
                  onClick={() => removeFromCart(item)}
                >
                  -
                </aside>
                <aside className='border-2 border-red-200 px-2 rounded'>
                  {findItem(item)?.quantity}
                </aside>
                <aside
                  className='text-xl py-1 px-2'
                  onClick={() => addToCart(item)}
                >
                  +
                </aside>
              </section>
            ) : (
              <div
                className='text-xl py-1 px-2'
                onClick={() => addToCart(item)}
              >
                +
              </div>
            )}
          </div>
        </section>
      ))}
    </section>
  );

  const notify = () => {
    placeOrder();
    toast.success('Order placed successfully!');
  };

  return (
    <>
      <TabMenu active={active} setActive={(value) => setActive(value)} />
      <section className='h-full overflow-auto'>{showItems(active)}</section>
      {cartItems.length > 0 && (
        <section
          onClick={notify}
          className='w-full px-4 py-2 bg-orange-500 fixed bottom-0 left-0 rounded-t-xl flex justify-between items-center'
        >
          <aside>{totalItems === 1 ? '1 item' : `${totalItems} items`}</aside>
          <aside className='font-semibold'>Place order</aside>
          <aside>Rs.{cost}</aside>
        </section>
      )}
    </>
  );
}
