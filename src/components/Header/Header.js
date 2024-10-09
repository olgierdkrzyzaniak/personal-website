"use client";
import React from "react";
import clsx from "clsx";
import { MoonIcon, SunIcon, BackpackIcon } from "@radix-ui/react-icons";
import Cookie from "js-cookie";

import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from "@/constants";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";
import * as Tooltip from "@radix-ui/react-tooltip";

import styles from "./Header.module.css";

function ResumeButton() {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
          <a className={styles.action} href="/Resume.pdf">
            <BackpackIcon size="1.5rem" />
            <VisuallyHidden>View Resume</VisuallyHidden>
          </a>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className={styles.TooltipContent} sideOffset={5}>
						View the Resume
						<Tooltip.Arrow className={styles.TooltipArrow} />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    });

    const newTokens = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <ResumeButton/>
        <button className={styles.action} onClick={handleToggleTheme}>
          {theme === "light" ? (
            <SunIcon size="1.5rem" />
          ) : (
            <MoonIcon size="1.5rem" />
          )}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
