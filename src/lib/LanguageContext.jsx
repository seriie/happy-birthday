import React, { createContext, useState, useContext, useCallback } from 'react';
import en from '../language/en.json';
import id from '../language/id.json';

const TRANSLATIONS = { en, id };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('hb_lang') || 'id';
    });

    const switchLang = useCallback((newLang) => {
        setLang(newLang);
        localStorage.setItem('hb_lang', newLang);
    }, []);

    const t = useCallback((path) => {
        const keys = path.split('.');
        let value = TRANSLATIONS[lang];
        for (const key of keys) {
            if (value === undefined) return path;
            value = value[key];
        }
        return value ?? path;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, switchLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
};
