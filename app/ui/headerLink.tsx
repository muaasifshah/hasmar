import { NavLink } from "@remix-run/react";
import cx from "clsx";
import React, { useState } from "react";

interface HeaderLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    prefetch?: "none" | "intent";
    onClick?: () => void;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
    to,
    children,
    className = "",
    prefetch = "none",
    onClick,
}) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setIsActive(!isActive);
      onClick && onClick();
    };
  
    return (
      <NavLink
        prefetch={prefetch}
        x-comp="HeaderLink"
        className={cx(
          "leading-relaxed py-2 px-8 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-brand md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-brand md:dark:hover:bg-transparent dark:border-gray-700 transition last:mr-0 flex items-center justify-between",
          className,
          { "active:text-blue-brand": isActive }
        )}
        to={to}
        onClick={handleClick}
      >
        {children}
      </NavLink>
    );
};
  
export default HeaderLink;