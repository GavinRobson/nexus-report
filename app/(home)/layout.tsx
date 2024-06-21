import { Header } from '@/components/nav/header';

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-14">{children}</main>
    </>
  );
};

export default HomeLayout;
