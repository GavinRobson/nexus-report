import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center pt-2 px-2">
        <Image src="/logo.svg" alt="logo" height={15} width={15} />
        <p className="font-semibold text-white text-xs ml-2">REPORT</p>
      </div>
    </Link>
  );
};
