// Dropdown.tsx
import React from "react";
import cx from "clsx";
import Icon from "./Icon/Icon";
import HeaderLink from "./HeaderLink";
import { DropdownStates } from "./Header";

type DropdownProps = {
  isOpen: boolean;
  toggleDropdown: (dropdown: keyof DropdownStates) => void;
  dropdownKey: keyof DropdownStates;
  children: React.ReactNode;
  title: string;
  link: string;
  menuClassName?: string;
};

export function Dropdown({
  isOpen,
  toggleDropdown,
  dropdownKey,
  children,
  title,
  link,
  menuClassName,
}: DropdownProps) {
  return (
    <li className="group/item relative max-md:flex max-md:flex-wrap max-md:align-middle">
      <HeaderLink to={link}>
        {title}
        <Icon
          id="arrow-bottom"
          className="ms-1.5 inline-block h-5 w-5 fill-current align-middle max-md:hidden"
          aria-hidden="true"
        />
      </HeaderLink>
      <button
        type="button"
        onClick={() => toggleDropdown(dropdownKey)}
        className="relative z-[1] mb-[-1px] mt-[-1px] h-[3.18rem] w-[3.18rem] cursor-pointer border border-r-0 border-gray-100 text-center leading-[0.6] dark:border-gray-700 md:hidden"
      >
        <Icon
          id="arrow-bottom"
          className="inline-block h-5 w-5 fill-current align-middle"
          aria-hidden="true"
        />
      </button>
      <div
        className={cx(
          "w-auto transition duration-300 max-md:w-full max-md:flex-[100%] md:invisible md:absolute md:top-[100%] md:z-10 md:block md:min-w-[14rem] md:translate-y-[-5%] md:opacity-0 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100",
          menuClassName,
          {
            hidden: !isOpen,
          },
        )}
      >
        <ul className="text-lg md:mt-4 md:rounded-lg md:border md:border-blue-100 md:bg-white md:p-1.5 md:shadow-lg md:dark:border-gray-700 md:dark:bg-gray-700">
          {React.Children.map(children, (child) => child)}
        </ul>
      </div>
    </li>
  );
}
