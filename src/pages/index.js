import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='w-full h-full my-4 bg-gradient-to-r from-gray-300 to-orange-100'>
        <div
          className='w-1/2 h-60 rounded-r-full'
          style={{
            background: 'url(/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='my-4 animate-pulse'>
          <p className='text-orange-500 text-6xl font-black font-cf'>SUPER</p>
          <p className='text-6xl font-black font-cf'>DELICIOUS</p>
          <p className='text-orange-500 text-6xl font-black font-cf'>
            FOOD MENU
          </p>
          <p className='font-cf'>Starting @ Rs.199</p>
        </div>
        <Link href='/menu'>
          <button className='text-xl font-semibold tracking-wider w-1/2 float-right rounded-l-full bg-orange-500 px-4 py-2 text-white rounded-lg'>
            Order now
          </button>
        </Link>
      </section>
    </>
  );
}
