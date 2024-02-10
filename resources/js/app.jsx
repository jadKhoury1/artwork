import './bootstrap';
import '../css/app.css';

import { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeContext } from '@/Context/StateContext';
import registerCustomValidationRules from '@/Validation/setCutomRules';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

registerCustomValidationRules();

const BaseComponent = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const changeTheme = theme => {
        document.documentElement.className = theme;
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <BaseComponent>
                    <App {...props} />
                </BaseComponent>
           </StrictMode>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
