import Link from 'next/link';

export default function NavigationMenu({ closeMenu }) {
  return (
    <div>
      <ul>
        <li
          className='font-bold text-blue-500 py-3 border-b block'
          onClick={closeMenu}
        >
          <Link href='/'>Home</Link>
        </li>
        <li
          className='font-bold text-blue-500 py-3 border-b block'
          onClick={closeMenu}
        >
          <Link href='/menu'>Explore Menu</Link>
        </li>
        <li
          className='font-bold text-blue-500 py-3 border-b block'
          onClick={closeMenu}
        >
          <Link href='/order'>Review Order</Link>
        </li>
        <li
          className='font-bold text-blue-500 py-3 border-b block'
          onClick={closeMenu}
        >
          <Link href='/bill'>Get Bill</Link>
        </li>
      </ul>
    </div>
  );
}
