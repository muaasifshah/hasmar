import { useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";
import cx from "clsx";
import { PrimaryButtonLink } from "./buttons";

export function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [dropdownStates, setDropdownStates] = useState({
      dropdown1: false,
      dropdown2: false,
      // Add more dropdown states as needed
    });
    useEffect(() => {
      const handleResize = () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          setIsNavOpen(true); // Ensure nav is open on larger screens
        } else {
          setIsNavOpen(false); // Ensure nav is closed on smaller screens
        }
      };
  
      handleResize(); // Initial call to set the initial state based on window size
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const toggleNav = () => {
      setIsNavOpen((prevState) => !prevState);
    };
    const toggleDropdown = (dropdown) => {
      if (window.innerWidth < 768) {
        setDropdownStates((prevState) => ({
          ...prevState,
          [dropdown]: !prevState[dropdown],
        }));
      }
    };
    return (
      <header className="py-5 text-gray-900 dark:text-white bg-white dark:bg-gray-900 relative">
          <div className="container mx-auto max-[600px]:px-4 flex flex-wrap items-center justify-between">
              <NavLink
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse">
                  HasMAR
              </NavLink>
              <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse md:ml-8">
                <PrimaryButtonLink
                  prefetch="intent"
                  to="/btn"
                  className="w-full xl:order-1 ml-2"
                  children="Log In"
                />
                <button onClick={() => document.documentElement.classList.toggle('dark')}
                    className="inline-block min-h-9 min-w-9 rounded-full p-2 
                    hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </button>
                <button type="button" 
                onClick={toggleNav}
                className="inline-flex items-center p-2 min-w-9 min-h-9 justify-center 
                text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none 
                focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:focus:ring-gray-600" 
                aria-expanded={isNavOpen ? "true" : "false"}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
                </button>
              </div>
              <nav 
              className={cx(
                "main-nav items-center justify-between w-full transition-all duration-300 md:flex md:w-auto md:order-1 max-md:absolute max-md:top-[100%] max-md:h-full max-md:min-h-[100vh] max-md:left-0 max-md:right-0 max-md:mt-[-1px] max-md:bg-white max-md:dark:bg-gray-900 max-md:border-t max-md:border-gray-100 max-md:dark:border-gray-700",
                {
                  'hidden': !isNavOpen,
                }
              )}
              aria-label="Main">
                <ul className="flex flex-col font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                  <li><HeaderLink to="/" className="active:text-blue-brand">Who we are</HeaderLink></li>
                  <li className="group/item relative">
                    <HeaderLink to="#">Sub Menus <button type="button" onClick={() => toggleDropdown("dropdown1")} 
                    className="max-md:cursor-pointer max-md:relative max-md:z-[1] max-md:border max-md:border-gray-100 max-md:dark:border-gray-700 w-7 h-7 leading-[0.6] text-center md:w-2.5 md:h-2.5 ms-2"><svg className="w-2.5 h-2.5 inline-block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"></path></svg></button></HeaderLink>
                    <div className={cx("md:opacity-0 md:invisible md:block md:absolute md:top-[100%] md:translate-y-[-5%] md:group-hover/item:opacity-100 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:z-10 md:min-w-[220px] w-auto transition duration-300",
                      {
                        'hidden' : !dropdownStates.dropdown1,
                      }
                    )}>
                      <ul className="md:space-y-1 md:p-4 md:mt-4 text-md md:bg-white md:border md:border-gray-100 md:rounded-lg md:shadow-md md:dark:border-gray-700 md:dark:bg-gray-700">
                        <li><HeaderLink to="/h" className="opacity-80 hover:opacity-100">Sub Menu Item 1</HeaderLink></li>
                        <li><HeaderLink to="/h" className="opacity-80 hover:opacity-100">Sub Menu Item 2</HeaderLink></li>
                      </ul>
                    </div>
                  </li>
                  <li className="group/item relative">
                    <HeaderLink to="#">Sub Menus <button type="button" onClick={() => toggleDropdown("dropdown2")} 
                    className="max-md:cursor-pointer max-md:relative max-md:z-[1] max-md:border max-md:border-gray-100 max-md:dark:border-gray-700 w-7 h-7 leading-[0.6] text-center md:w-2.5 md:h-2.5 ms-2"><svg className="w-2.5 h-2.5 inline-block align-middle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"></path></svg></button></HeaderLink>
                    <div className={cx("md:opacity-0 md:invisible md:block md:absolute md:top-[100%] md:translate-y-[-5%] md:group-hover/item:opacity-100 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:z-10 md:min-w-[220px] w-auto transition duration-300",
                      {
                        'hidden' : !dropdownStates.dropdown2,
                      }
                    )}>
                      <ul className="md:space-y-1 md:p-4 md:mt-4 text-md md:bg-white md:border md:border-gray-100 md:rounded-lg md:shadow-md md:dark:border-gray-700 md:dark:bg-gray-700">
                        <li><HeaderLink to="/h" className="opacity-80 hover:opacity-100">Sub Menu Item 1</HeaderLink></li>
                        <li><HeaderLink to="/h" className="opacity-80 hover:opacity-100">Sub Menu Item 2</HeaderLink></li>
                      </ul>
                    </div>
                  </li>
                  <li><HeaderLink to="/e">About</HeaderLink></li>
                  <li><HeaderLink to="/d">Contact</HeaderLink></li>
                </ul>
              </nav>
          </div>
      </header>
    )
}

function HeaderLink({
    to,
    children,
    className = "",
    prefetch = "none",
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
    prefetch?: "none" | "intent";
  }) {
    return (
      <NavLink
        prefetch={prefetch}
        x-comp="HeaderLink"
        className={cx(
            "leading-relaxed py-2 px-8 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-brand md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-brand md:dark:hover:bg-transparent dark:border-gray-700 transition last:mr-0 flex items-center justify-between",
            className,
        )}
        to={to}
        children={children}
      />
    );
  }