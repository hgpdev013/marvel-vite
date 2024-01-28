import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/themes";

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeManagementProvider = ({ children }: PropsWithChildren) => {
  const localStorageTheme = localStorage.getItem("theme");

  const userSchema = window.matchMedia("(prefers-color-scheme: dark)");

  const browserTheme = userSchema.matches ? "dark" : "light";
  const [theme, setTheme] = useState(localStorageTheme || browserTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme, localStorageTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme as keyof typeof themes]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
