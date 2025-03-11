import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage } = useHeaderContex();
  
  const navItemsRaw = [
    {
      name: "HOME",
      icon: false,
      path: "/home-7",
      dropdown: null
    },
    {
      name: "ABOUT",
      icon: false,
      path: "/about",
      dropdown: null
    },
    {
      name: "FAQ",
      icon: false,
      path: "/faq",
      dropdown: null
    }
  ];

  const navItems = navItemsRaw?.map((navItem) => ({
    ...navItem,
    dropdown: null
  }));

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
