import { HeaderLogo } from '@/components/header-logo';
import { Navigation } from '@/components/navigation';
import { SearchBar } from '@/components/search-bar';
import { ProfileButton } from '@/components/profile-button';

export const Header = () => {
  return (
    <header className="h-[98px] bg-[#13151b]">
      <div className="h-[37px] flex flex-row">
        <HeaderLogo />
        <Navigation />
        <ProfileButton />
      </div>
      <div className="h-[60px]">
        <SearchBar />
      </div>
    </header>
  );
};
