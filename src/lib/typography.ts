// Typography system for consistent font sizing across the application

export const typography = {
  // Headings - Using Poppins font
  h1: {
    base: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none font-poppins",
    hero: "text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none font-poppins", // For homepage
    pageHero: "text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-none font-poppins", // For other pages
    projectHero: "text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold leading-none font-poppins", // For individual project pages
  },
  h2: {
    base: "text-2xl sm:text-3xl lg:text-[44px] font-bold leading-tight font-poppins",
    section: "text-2xl sm:text-3xl lg:text-[44px] font-bold leading-tight font-poppins",
  },
  h3: {
    base: "text-xl sm:text-2xl lg:text-2xl font-bold leading-tight font-poppins",
    subsection: "text-lg sm:text-xl lg:text-2xl font-semibold leading-tight font-poppins",
  },
  h4: {
    base: "text-lg sm:text-xl font-semibold leading-tight font-poppins",
  },
  h5: {
    base: "text-base sm:text-lg font-semibold leading-tight font-poppins",
  },
  h6: {
    base: "text-sm sm:text-base font-semibold leading-tight font-poppins",
  },

  // Body text - Using Inter font
  body: {
    large: "text-lg sm:text-xl leading-relaxed font-inter",
    base: "text-base sm:text-lg leading-relaxed font-inter",
    small: "text-sm sm:text-base leading-relaxed font-inter",
  },

  // Special text - Using Poppins font
  quote: {
    large: "text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed font-poppins",
    base: "text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed font-poppins",
  },

  // Labels and captions - Using Inter font
  label: {
    large: "text-sm sm:text-base font-medium font-inter",
    base: "text-xs sm:text-sm font-medium font-inter",
    small: "text-xs font-medium font-inter",
  },

  // Numbers and stats - Using Poppins font
  stat: {
    large: "text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins",
    base: "text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins",
    small: "text-xl sm:text-2xl font-bold font-poppins",
  },
} as const;

// Responsive spacing utilities
export const spacing = {
  section: "py-12 sm:py-16 lg:py-20 xl:py-24",
  subsection: "py-8 sm:py-12 lg:py-16",
  element: "py-4 sm:py-6 lg:py-8",
} as const;

// Container utilities
export const containers = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  content: "max-w-4xl mx-auto px-4 sm:px-6",
  narrow: "max-w-3xl mx-auto px-4 sm:px-6",
} as const;
