import { HeaderLogo } from '@/components/nav/header-logo';
import { Navigation } from '@/components/nav/navigation';
import { SearchBar } from '@/components/nav/search-bar';
import { ProfileButton } from '@/components/nav/profile-button';

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
