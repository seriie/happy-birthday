import { useLanguage } from '../../lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
    const { lang, switchLang } = useLanguage();

    return (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full border border-rose-100 shadow-md p-1">
            {['id', 'en'].map((l) => (
                <button
                    key={l}
                    onClick={() => switchLang(l)}
                    className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${lang === l
                            ? 'text-white'
                            : 'text-rose-400 hover:text-rose-600'
                        }`}
                >
                    {lang === l && (
                        <motion.div
                            layoutId="lang-pill"
                            className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full z-0"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">
                        {l === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
