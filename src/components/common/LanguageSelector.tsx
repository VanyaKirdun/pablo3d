import { cn } from "@/utils/cn";
import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslation } from 'react-i18next';
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./LanguageSelector.scss";

interface FlagIconProps {
  countryCode: string;
}

interface Language {
  key: string;
  name: string;
}

const focus = 'outline-none ring-2 ring-offset-2 ring-indigo-500'

function FlagIcon({ countryCode = "" }: FlagIconProps) {

  if (countryCode === "en") {
    countryCode = "gb";
  } else if (countryCode === 'ca') {
    countryCode = 'es-ct'
  }

  return (
    <span
      className={`fi fis text-[24] rounded-full border-none shadow-0x1 bg-white inline-block mr-2 fi-${countryCode}`}
    />
  );
}

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleLanguageChange = async (language: Language) => {
    await i18n.changeLanguage(language.key);
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    function updateSize() {
      setIsOpen(false)
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const languages: Language[] = [
    { key: 'es', name: 'Español' },
    { key: 'ca', name: 'Català' },
    { key: 'en', name: 'English' },
    { key: 'ru', name: 'Русский' },
  ]

  const LANGUAGE_SELECTOR_ID = 'language-selector';
  useEffect(() => {

    const handleWindowClick = (event: MouseEvent | null) => {
      if (event && event.target instanceof HTMLElement) {
        const target = event.target.closest('button');
        if (target && target.id === LANGUAGE_SELECTOR_ID) {
          return;
        }
        setIsOpen(false);
      }
    }
    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick);
    }
  }, []);
  const selectedLanguage = languages.find(language => language.key === i18n.language);
  if (!selectedLanguage) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={cn("inline-flex items-center justify-center w-full rounded-md border border-[#93ADAA] shadow-sm px-4 py-2 bg-[#93ADAA] text-sm font-medium text-gray-700 hover:bg-[#7E9491]",
          isOpen && focus
        )}
        id={LANGUAGE_SELECTOR_ID}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FlagIcon countryCode={selectedLanguage.key} />
        {selectedLanguage.name}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && <div
        className="origin-top-right max-sm:fixed absolute right-0 mt-2  max-sm:w-full w-96 md:rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-selector"
      >
        <div className="py-1 grid grid-cols-2 gap-2" role="none">
          {languages.map((language, index) => {
            return (
              <button
                key={language.key}
                onClick={() => handleLanguageChange(language)}
                className={`${selectedLanguage.key === language.key
                  ? "bg-[gray-100] text-gray-900"
                  : "text-gray-700"
                  } block px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                role="menuitem"
              >
                <FlagIcon countryCode={language.key} />
                <span className="truncate">{language.name}</span>
              </button>
            );
          })}
        </div>
      </div>}
    </div>
  );
};
