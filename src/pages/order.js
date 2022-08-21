import { useCart } from '../hooks/useCart';

export default function Order() {
  const { billItems } = useCart();

  if (billItems.length < 1)
    return <div className='h-full grid place-items-center'>No orders yet.</div>;
  return (
    <div className='p-2'>
      <h2 className='text-lg font-bold'>Your Order</h2>
      <h4 className='text-xs text-orange-400'>
        Please pay first from bill section.
      </h4>
      {billItems.map((item) => (
        <section key={item.name} className='py-2 border-b-2'>
          <h2 className='text-sm font-semibold'>{item.name}</h2>
          <div className='flex justify-between items-center'>
            <span className='text-xs'>रू{item.pricePerUnit}</span>
            <aside className='font-semibold'>Qty. {item.quantity}</aside>
          </div>
        </section>
      ))}
    </div>
  );
}
