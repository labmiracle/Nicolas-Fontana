import { useState } from "react";
import Button from "./Button";
import MainText from "./MainText";
import { LanguageContext, Language } from "./LanguageContext";

function Context() {
    const [language, setLanguage] = useState<Language>("spanish");
    return (
        <LanguageContext.Provider value={language}>
            <MainText />
            <Button setLanguage={setLanguage} />
        </LanguageContext.Provider>
    );
}
export default Context;
