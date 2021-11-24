import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

function Header() {
  return (
    <header className="header bg-white">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}

export default Header;
