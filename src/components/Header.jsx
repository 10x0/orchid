import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='p-3 flex justify-between items-center'>
      <div className='font-bold text-lg'>Orchid Thakali</div>
      <Navigation />
    </header>
  );
}
