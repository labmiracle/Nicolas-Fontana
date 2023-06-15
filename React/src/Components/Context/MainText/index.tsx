import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import EnglishText from "./EnglishText";
import SpanishText from "./SpanishText";

function MainText() {
    const language = useContext(LanguageContext);
    return language === "english" ? <EnglishText /> : <SpanishText />;
}

export default MainText;
