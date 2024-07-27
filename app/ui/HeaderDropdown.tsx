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
    <li className="group/item relative">
      <HeaderLink to={link}>
        {title}
        <button
          type="button"
          onClick={() => toggleDropdown(dropdownKey)}
          className="ms-2 h-7 w-7 text-center leading-[0.6] max-md:relative max-md:z-[1] max-md:cursor-pointer max-md:border max-md:border-gray-100 max-md:dark:border-gray-700 md:h-3.5 md:w-3.5"
        >
          <Icon
            id="arrow-bottom"
            className="inline-block h-3.5 w-3.5 fill-inherit align-middle"
            aria-hidden="true"
          />
        </button>
      </HeaderLink>
      <div
        className={cx(
          "w-auto transition duration-300 md:invisible md:absolute md:top-[100%] md:z-10 md:block md:min-w-[14rem] md:translate-y-[-5%] md:opacity-0 md:group-hover/item:visible md:group-hover/item:translate-y-0 md:group-hover/item:opacity-100",
          menuClassName,
          {
            hidden: !isOpen,
          },
        )}
      >
        <ul className="text-md md:mt-4 md:rounded-lg md:border md:border-blue-100 md:bg-white md:p-1.5 md:shadow-lg md:dark:border-gray-700 md:dark:bg-gray-700">
          {React.Children.map(children, (child) => child)}
        </ul>
      </div>
    </li>
  );
}
