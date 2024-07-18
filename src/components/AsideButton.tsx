import Image from 'next/image';
export default function AsideButton({ icon, label, onClick }: { icon: string; label: string; onClick?: () => void}) {
  return (
    <button className="bg-[#189F4E69] h-28 flex items-center pl-2 gap-3" onClick={onClick}>
      <Image src={icon} alt="" className="p-3" width={112} height={112}/>
      <label className="font-[poppins] italic">{label}</label>
    </button>
  );
}

