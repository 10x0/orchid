export default function Pill({ active, setActive, name, id }) {
  return (
    <div
      onClick={setActive}
      className={`rounded-full ${
        active ? 'bg-orange-500 text-white' : 'bg-gray-200'
      } py-2 px-4 inline font-semibold text-sm`}
    >
      {name}
    </div>
  );
}
