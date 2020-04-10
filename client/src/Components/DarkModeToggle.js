import React from 'react';
import useDarkMode from 'use-dark-mode';

import Toggle from './Toggle';

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div>
            <button type="button" onClick={darkMode.disable}>
                Light Mode
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button type="button" onClick={darkMode.enable}>
                Dark Mode
            </button>
        </div>
    );
};

export default DarkModeToggle;
