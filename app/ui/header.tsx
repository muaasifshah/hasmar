import { useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";
import cx from "clsx";
import { PrimaryButtonLink } from "./Buttons";
import Icon from "./Icon/Icon";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    // Add more dropdown states as needed
  });
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
      setIsNavOpen(isLargeScreen);
      setDropdownStates((prevState) => {
        const nextState = {};
        for (const key in prevState) {
          nextState[key] = isLargeScreen;
        }
        return nextState;
      });
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
          <img
            width={85}
            height={70}
            src="/img/hasmar-lg.png"
            alt="Hasmar"
          ></img>
        </NavLink>
        <div className="flex items-center space-x-1 md:order-2 md:ml-8 md:space-x-2 rtl:space-x-reverse">
          <PrimaryButtonLink
            prefetch="intent"
            to="/btn"
            className="ml-2 w-full xl:order-1"
            icon={true}
            children="Log In"
          />
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
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
        </div>
        <nav
          className={cx(
            "main-nav w-full items-center justify-between transition-all duration-300 max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[100%] max-md:mt-[-1px] max-md:h-full max-md:min-h-[100vh] max-md:border-t max-md:border-gray-100 max-md:bg-white max-md:dark:border-gray-700 max-md:dark:bg-gray-900 md:order-1 md:flex md:w-auto",
            {
              hidden: !isNavOpen,
            },
          )}
          aria-label="Main"
        >
          <ul className="flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <HeaderLink to="/" className="active:text-blue-brand">
                Who we are
              </HeaderLink>
            </li>
            <li className="group/item relative">
              <HeaderLink to="#">
                Individuals and Couples{" "}
                <button
                  type="button"
                  onClick={() => toggleDropdown("dropdown1")}
                  className="ms-2 h-7 w-7 text-center leading-[0.6] max-md:relative max-md:z-[1] max-md:cursor-pointer max-md:border max-md:border-gray-100 max-md:dark:border-gray-700 md:h-3.5 md:w-3.5"
                >
                  <Icon
                    id="arrow-bottom"
                    width={24}
                    height={24}
                    className="inline-block h-3.5 w-3.5 fill-inherit align-middle"
                    aria-hidden="true"
                  />
                  {/* <svg
                    className="inline-block h-2.5 w-2.5 align-middle"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    ></path>
                  </svg> */}
                </button>
              </HeaderLink>
              <div
                className={cx(
                  "w-auto transition duration-300 md:invisible md:absolute md:top-[100%] md:z-10 md:block md:min-w-[14rem] md:translate-y-[-5%] md:opacity-0 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100",
                  {
                    hidden: !dropdownStates.dropdown1,
                  },
                )}
              >
                <ul className="text-md md:mt-4 md:rounded-lg md:border md:border-blue-100 md:bg-white md:p-1.5 md:shadow-lg md:dark:border-gray-700 md:dark:bg-gray-700">
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      Sub Menu Item 1
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      Sub Menu Item 2
                    </HeaderLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group/item relative">
              <HeaderLink to="#">
                Facilitators{" "}
                <button
                  type="button"
                  onClick={() => toggleDropdown("dropdown2")}
                  className="ms-2 h-7 w-7 text-center leading-[0.6] max-md:relative max-md:z-[1] max-md:cursor-pointer max-md:border max-md:border-gray-100 max-md:dark:border-gray-700 md:h-3.5 md:w-3.5"
                >
                  <Icon
                    id="arrow-bottom"
                    width={24}
                    height={24}
                    className="inline-block h-3.5 w-3.5 fill-inherit align-middle"
                    aria-hidden="true"
                  />
                </button>
              </HeaderLink>
              <div
                className={cx(
                  "w-auto transition duration-300 md:invisible md:absolute md:top-[100%] md:z-10 md:block md:min-w-[14rem] md:translate-y-[-5%] md:opacity-0 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100",
                  {
                    hidden: !dropdownStates.dropdown2,
                  },
                )}
              >
                <ul className="text-md md:mt-4 md:rounded-lg md:border md:border-blue-100 md:bg-white md:p-1.5 md:shadow-lg md:dark:border-gray-700 md:dark:bg-gray-700">
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      Sub Menu Item 1
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      Sub Menu Item 2
                    </HeaderLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group/item relative">
              <HeaderLink to="#">
                Language{" "}
                <button
                  type="button"
                  onClick={() => toggleDropdown("dropdown3")}
                  className="ms-2 h-7 w-7 text-center leading-[0.6] max-md:relative max-md:z-[1] max-md:cursor-pointer max-md:border max-md:border-gray-100 max-md:dark:border-gray-700 md:h-3.5 md:w-3.5"
                >
                  <Icon
                    id="arrow-bottom"
                    width={24}
                    height={24}
                    className="fill-red inline-block h-3.5 w-3.5 align-middle"
                    aria-hidden="true"
                  />
                </button>
              </HeaderLink>
              <div
                className={cx(
                  "w-auto transition duration-300 md:invisible md:absolute md:top-[100%] md:z-10 md:block md:min-w-[14rem] md:translate-y-[-5%] md:opacity-0 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100",
                  {
                    hidden: !dropdownStates.dropdown3,
                  },
                )}
              >
                <ul className="text-md md:mt-4 md:rounded-lg md:border md:border-blue-100 md:bg-white md:p-1.5 md:shadow-lg md:dark:border-gray-700 md:dark:bg-gray-700">
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      ESPAÑOL
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      FRANÇAIS
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      to="/h"
                    >
                      FRANÇAIS
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_spanish/spanish_go_fof.html"
                    >
                      ESPAÑOL
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_frenchc/frenchc_go_fof.html"
                    >
                      FRANÇAIS
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_korean/korean_go_fof.html"
                    >
                      KOREAN (한국어)
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_german/german_go_fof.html"
                    >
                      GERMAN (DEUTSCH)
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_germansw/germansw_go_fof.html"
                    >
                      GERMAN (SWISS)
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_chinese/chinese_go_fof.html"
                    >
                      CHINESE (简体中文)
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_romanian/romanian_go_fof.html"
                    >
                      ROMANIAN
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_taiwantr/taiwantr_go_fof.html"
                    >
                      TAIWAN (繁體中文)
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_italian/italian_go_fof.html"
                    >
                      ITALIANO
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_japanese/japanese_go_fof.html"
                    >
                      JAPANESE (日本語)
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink
                      className="text-sm opacity-90 hover:opacity-100 md:rounded md:px-3 md:py-2 md:hover:bg-gray-400/10 md:hover:text-gray-900"
                      target="_blank"
                      rel="noopener"
                      to="/fof/launch/_portuguesebr/portuguesebr_go_fof.html"
                    >
                      PORTUGUÊS
                    </HeaderLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({
  to,
  children,
  className = "",
  prefetch = "none",
  target,
  rel,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: "none" | "intent";
  target?: string;
  rel?: string;
}) {
  return (
    <NavLink
      prefetch={prefetch}
      x-comp="HeaderLink"
      className={cx(
        "flex items-center justify-between border-b border-gray-100 px-8 py-2 leading-relaxed text-gray-900 transition last:mr-0 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-brand md:border-0 md:p-0 md:hover:text-blue-brand md:dark:hover:bg-transparent",
        className,
      )}
      to={to}
      target={target}
      rel={rel}
      children={children}
    />
  );
}
