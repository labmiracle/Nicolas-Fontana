import { createContext } from "react";

export type Language = "spanish" | "english";

export const LanguageContext = createContext<Language>("spanish");
