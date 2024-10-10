export const BLOG_TITLE = "olgierd.dev";
export const COLOR_THEME_COOKIE_NAME = "color-theme";

export const LIGHT_COLORS = {
  "--color-text": "hsl(239deg 90% 49%)",
  "--color-primary": "hsl(239deg 90% 49%)",
  "--color-primary-contrast": "white",
  "--color-secondary": "hsl(328deg 100% 50%)",
  "--color-decorative": "hsl(48deg 33% 97%)",
  "--color-gray-0": "white",
  "--color-gray-100": "hsl(50deg 20% 90%)",
  "--color-gray-300": "hsl(50deg 10% 70%)",
  "--color-gray-500": "hsl(50deg 4% 50%)",
  "--color-gray-700": "hsl(50deg 10% 25%)",
  "--color-gray-900": "hsl(50deg 20% 10%)",
  "--color-gray-1000": "black",
};

export const DARK_COLORS = {
  "--color-text": "hsl(20deg 30% 96%)",
  "--color-primary": "hsl(48deg 33% 97%)",
  "--color-primary-contrast": "black",
  "--color-secondary": "hsl(328deg 100% 50%)",
  "--color-decorative": "hsl(228deg 83% 6%)",
  "--color-gray-0": "black",
  "--color-gray-100": "hsl(256deg 20% 10%)",
  "--color-gray-300": "hsl(256deg 10% 30%)",
  "--color-gray-500": "hsl(256deg 4% 50%)",
  "--color-gray-700": "hsl(256deg 10% 75%)",
  "--color-gray-900": "hsl(256deg 20% 90%)",
  "--color-gray-1000": "white",
};

LIGHT_COLORS["--color-primary"] = LIGHT_COLORS["--color-primary"];
LIGHT_COLORS["--color-secondary"] = LIGHT_COLORS["--color-secondary"];
LIGHT_COLORS["--color-inline-code-bg"] = "hsl(45deg 74% 85%)";
LIGHT_COLORS["--color-selection-text"] = LIGHT_COLORS["--color-secondary"];
LIGHT_COLORS["--color-selection-background"] =
  LIGHT_COLORS["--color-primary"];
LIGHT_COLORS["--color-backdrop"] = LIGHT_COLORS["--color-decorative"];
LIGHT_COLORS["--color-backdrop-highlight"] =
  LIGHT_COLORS["--color-decorative"];
LIGHT_COLORS["--color-page-background"] =
  LIGHT_COLORS["--color-decorative"];
LIGHT_COLORS["--color-page-border"] = "hsl(239deg 90% 49% / 0.2)";
LIGHT_COLORS["--color-card-background"] = LIGHT_COLORS["--color-gray-0"];
LIGHT_COLORS["--color-card-border"] = LIGHT_COLORS["--color-page-border"];

DARK_COLORS["--color-primary"] = DARK_COLORS["--color-primary"];
DARK_COLORS["--color-secondary"] = DARK_COLORS["--color-secondary"];
DARK_COLORS["--color-inline-code-bg"] = "hsl(256deg 30% 22%)";
DARK_COLORS["--color-selection-text"] = DARK_COLORS["--color-secondary"];
DARK_COLORS["--color-selection-background"] =
  DARK_COLORS["--color-primary"];
DARK_COLORS["--color-backdrop"] = DARK_COLORS["--color-decorative"];
DARK_COLORS["--color-backdrop-highlight"] =
  DARK_COLORS["--color-decorative"];
DARK_COLORS["--color-page-background"] = "transparent";
DARK_COLORS["--color-page-border"] = "hsl(256deg 30% 50% / 0.2)";
DARK_COLORS["--color-card-background"] = DARK_COLORS["--color-backdrop"];
DARK_COLORS["--color-card-border"] = DARK_COLORS["--color-page-border"];

export const LIGHT_SHADOWS = {
  "--shadow-page": `
  none
  `,
  "--shadow-card": `
  none
  `,
};
export const DARK_SHADOWS = {
  "--shadow-page": "none",
  "--shadow-card": "none",
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};
