import { HeaderLogo } from '@/components/header-logo';
import { Navigation } from '@/components/navigation';
import { SearchBar } from '@/components/search-bar';

export const Header = () => {
  return (
    <header className="h-[98px] bg-[#1c1e27]">
      <div className="h-[37px] flex flex-row">
        <HeaderLogo />
        <Navigation />
      </div>
      <div className="h-[60px] px-5">
        <SearchBar />
      </div>
    </header>
  );
};
