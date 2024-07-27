import { Fragment, useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";
import cx from "clsx";
import { Button } from "./Button";
import { Dropdown } from "./HeaderDropdown";
import Icon from "./Icon/Icon";
import HeaderLink from "./HeaderLink";

const menuData = [
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
    name: "Services",
    link: "/services",
    dropdown: [
      {
        id: 1,
        name: "Web Design",
        link: "/services/web-design",
      },
      {
        id: 2,
        name: "Web Development",
        link: "/services/web-development",
      },
      {
        id: 3,
        name: "Graphic Design",
        link: "/services/graphic-design",
      },
    ],
  },
  {
    id: 4,
    name: "Team",
    link: "/team",
    dropdown: [
      {
        id: 1,
        name: "Team Member 1",
        link: "/team/member-1",
      },
      {
        id: 2,
        name: "Team Member 2",
        link: "/team/member-2",
      },
    ],
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

// Define a type for the dropdown states
export type DropdownStates = {
  [key: `dropdown${number}`]: boolean;
};

// Function to create DropdownStates object
const createDropdownStates = (menuData: any[]): DropdownStates => {
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
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>(
    createDropdownStates(menuData),
  );

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
      setIsNavOpen(isLargeScreen);
    };

    handleResize(); // Initial call to set the initial state based on window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
    <header className="relative z-50 bg-white py-3 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between max-[600px]:px-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img width={85} height={70} src="/img/hasmar-lg.png" alt="Hasmar" />
        </NavLink>
        <div className="flex items-center space-x-1 md:order-2 md:ml-8 md:space-x-2 rtl:space-x-reverse">
          <Button
            to="/"
            variant={"primary"}
            className="ml-2 w-full xl:order-1"
            prefetch="intent"
            icon={true}
          >
            Log In
            <Icon
              id="arrow-long-right"
              className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem]`}
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
          <ul className="flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
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
                      <li key={subItem.id}>
                        <HeaderLink
                          to={subItem.link}
                          className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                        >
                          {subItem.name}
                        </HeaderLink>
                      </li>
                    ))}
                  </Dropdown>
                ) : (
                  <li>
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
      <svg
        className="fill-violet-700 block dark:hidden"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <svg
        className="fill-yellow-500 hidden dark:block"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
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
      <svg
        className="h-4 w-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}
