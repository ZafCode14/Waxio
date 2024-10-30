import Link from "next/link";
import Image from "next/image";

interface Props {
  href: string;
  imageSrc: string;
  name: string;
}
function Collection({ href, imageSrc, name }:Props) {
  return (
    <Link 
      href={href} 
      className={`
        relative
        overflow-hidden
        flex flex-col justify-end items-center 
        h-[240px] sm:h-[300px] w-[600px] max-w-full min-w-full sm:min-w-[auto] lg:w-[49%]
        sm:my-2
      `}
    >
      <Image 
        src={imageSrc} 
        alt="waxio" 
        width={2000} 
        height={1080} 
        className="cursor-pointer absolute h-full object-cover sm:rounded-md" 
        priority
      />
      <p className="text-[white] text-[14px] sm:text-[18px] mb-6 relative">{name}</p>
    </Link>
  );
}

export default Collection;