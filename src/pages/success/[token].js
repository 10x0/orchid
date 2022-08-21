import { FaWifi } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  const { token } = router.query;

  return (
    <>
      <h2 className='text-4xl text-center my-4'>Token No.</h2>
      <section className='w-full flex justify-center'>
        <span className='p-8 font-semibold text-8xl border-4 border-orange-500 rounded-full'>
          {token}
        </span>
      </section>
      <section className='text-center my-8'>
        <h3>Good things take time.</h3>
        <p>Please wait while we prepare food for you.</p>
      </section>
      <section className='w-full animate-bounce flex justify-evenly'>
        <span className='text-5xl'>
          <FaWifi />
        </span>
        <section className='font-semibold'>
          <p>
            <span className='font-normal italic'>SSID: </span>Orchid Restaurant
          </p>
          <p>
            <span className='font-normal italic'>Passphrase: </span> xitomitho
          </p>
        </section>
      </section>
    </>
  );
}
