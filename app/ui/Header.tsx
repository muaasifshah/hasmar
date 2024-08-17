import { Fragment, useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";
import cx from "clsx";
import { Button } from "./Button";
import { Dropdown } from "./HeaderDropdown";
import Icon from "./Icon/Icon";
import HeaderLink from "./HeaderLink";

// Define the type for a single menu item
type MenuItem = {
  id: number;
  name: string;
  link: string;
  dropdown?: { id: number; name: string; link: string }[]; // Add this line to define the dropdown items
};

const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Couples",
    link: "/couples",
  },
  {
    id: 4,
    name: "Facilitators",
    link: "/facilitators",
  },

  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },

  {
    id: 6,
    name: "Quiz",
    link: "/quiz",
  },
];

// Define a type for the dropdown states
export type DropdownStates = {
  [key: `dropdown${number}`]: boolean;
};

// Function to create DropdownStates object
const createDropdownStates = (menuData: MenuItem[]): DropdownStates => {
  const dropdownStates: DropdownStates = {};

  menuData.forEach((item) => {
    if (item.dropdown) {
      dropdownStates[`dropdown${item.id}`] = false;
    }
  });

  return dropdownStates;
};

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>(
    createDropdownStates(menuData),
  );

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
      setIsNavOpen(isLargeScreen);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleResize(); // Initial call to set the initial state based on window size
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const toggleDropdown = (dropdown: keyof DropdownStates) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <header
      className={cx(
        "relative z-50 bg-white py-3 text-gray-900 transition-all duration-300 dark:bg-gray-900 dark:text-white [&.sticky]:top-0 [&.sticky]:border-b [&.sticky]:border-gray-200/30 [&.sticky]:shadow-sm",
        {
          sticky: isSticky,
        },
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between max-lg:max-w-full max-md:px-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img width={85} height={70} src="/img/hasmar-lg.png" alt="Hasmar" />
        </NavLink>
        <div className="flex items-center space-x-1 md:order-2 md:ml-8 md:space-x-2 rtl:space-x-reverse">
          <Button
            to="/signin"
            variant={"primary"}
            className="ml-2 w-full text-base md:order-1"
            prefetch="intent"
            icon={true}
          >
            Log In
            <Icon
              id="arrow-long-right"
              className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]`}
            />
          </Button>
          <ThemeToggleButton />
          <NavToggleButton isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
        <nav
          className={cx(
            "main-nav w-full items-center justify-between transition-all duration-300 max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[100%] max-md:mt-[-1px] max-md:h-full max-md:min-h-[100vh] max-md:border-t max-md:border-gray-100 max-md:bg-white max-md:dark:border-gray-700 max-md:dark:bg-gray-900 md:order-1 md:flex md:w-auto",
            { hidden: !isNavOpen },
          )}
          aria-label="Main"
        >
          <ul className="flex flex-col text-xl font-medium md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            {menuData.map((item) => (
              <Fragment key={item.id}>
                {item.dropdown ? (
                  <Dropdown
                    title={item.name}
                    link={item.link}
                    dropdownKey={`dropdown${item.id}` as keyof DropdownStates}
                    toggleDropdown={toggleDropdown}
                    isOpen={
                      dropdownStates[
                        `dropdown${item.id}` as keyof DropdownStates
                      ]
                    }
                  >
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="max-md:flex max-md:align-middle"
                      >
                        <HeaderLink
                          to={subItem.link}
                          className="opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-1.5 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                        >
                          {subItem.name}
                        </HeaderLink>
                      </li>
                    ))}
                  </Dropdown>
                ) : (
                  <li className="max-md:flex max-md:align-middle">
                    <HeaderLink
                      to={item.link}
                      className="active:text-blue-brand"
                    >
                      {item.name}
                    </HeaderLink>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setIsDarkMode(isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-block min-h-9 min-w-9 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <Icon id="moon" className={`hidden h-5 w-5 fill-current dark:block`} />
      <Icon id="sun" className={`block h-5 w-5 fill-current dark:hidden`} />
    </button>
  );
}

function NavToggleButton({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggleNav}
      className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      aria-expanded={isNavOpen ? "true" : "false"}
    >
      <span className="sr-only">Open main menu</span>
      <Icon id="bar" className={`h-5 w-5 fill-current`} aria-hidden="true" />
    </button>
  );
}
