import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-8 lg:px-12">
        <div className="flex items-center gap-12">
          <NavLogo />

          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />

          {/* <WishlistButton />

          <CartButton />

        //    */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
