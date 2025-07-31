import React, {useState} from 'react';
import styles from './LanguageSelector.module.css';

import { useUser } from '../../../context/Context';
const LanguageSelector = () => {
  const { language, setLanguage } = useUser();
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };
   const languages = [
    { code: 'eng', label: 'English' },
    { code: 'arm', label: 'Հայերեն' },
  ];

  return (
    <div className={styles["lang-selector"]}>
      <div className={styles["lang-button"]} onClick={toggleDropdown}>
        {languages.find(l => l.code === language)?.label || 'English'}
      </div>

      {open && (
        <div className={styles["lang-dropdown"]}>
          {languages.map(({ code, label }) => (
            <button
              key={code}
              className={styles["lang-option"]}
              onClick={() => handleSelect(code)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;