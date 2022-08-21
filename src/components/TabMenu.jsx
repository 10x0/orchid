import Pill from './Pill';

export default function TabMenu({ active, setActive }) {
  return (
    <section className='w-full max-h-16 p-3 gap-2 flex flex-nowrap overflow-auto'>
      <Pill
        active={active == 'momo'}
        setActive={() => setActive('momo')}
        name='MoMo'
        id='burgers'
      />
      <Pill
        active={active == 'burger'}
        setActive={() => setActive('burger')}
        name='Burgers'
        id='biryani'
      />
      <Pill
        active={active == 'chowmein'}
        setActive={() => setActive('chowmein')}
        name='Chowmein'
        id='chowmein'
      />
      <Pill
        active={active == 'khana'}
        setActive={() => setActive('khana')}
        name='Khana'
        id='khana'
      />
      <Pill
        active={active == 'drink'}
        setActive={() => setActive('drink')}
        name='Drinks'
        id='drink'
      />
    </section>
  );
}
