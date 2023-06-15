import { useContext } from "react";
import { LanguageContext, Language } from "../LanguageContext";

function Button({ setLanguage }: { setLanguage: React.Dispatch<React.SetStateAction<Language>> }) {
    const language = useContext(LanguageContext);
    return (
        <button onClick={() => setLanguage(language === "spanish" ? "english" : "spanish")}>
            {language === "spanish" ? "Cambiar idioma al inglés" : "Change language to Spanish"}
        </button>
    );
}
export default Button;
