import React, { useContext, useEffect, useRef, useState } from 'react';
import HashnodeLogoSVG from '../components/Logos/HashnodeLogoSVG';
import {
    PenEdit, BlogManage, SettingsGear, Button, Sun, Moon
} from '@team-hashnode/matrix-ui';
import ThemeProvider, { ThemeContext } from '../components/ThemeProvider';
import { RixSearch } from './RixSearch';
import Music from './Music';
import Preferences from './Preferences';

export default function Hero() {
    const { theme, setTheme } = useContext(ThemeContext);
    chrome.identity.getProfileUserInfo(console.log);

    useEffect(() => {
        chrome.identity.getProfileUserInfo(console.log);
    }, []);

    return (
        <div className="relative">
        {/* <Preferences open={true} /> */}
        <div className={`w-full h-auto bg-no-repeat bg-cover bg-center px-10 py-8 dark:bg-slate-950 ${theme === 'dark' ? 'bg-[url(https://cdn.hashnode.com/res/hashnode/image/upload/v1696099286408/ZVNu5eLk9.png?auto=format)]' : 'bg-[url(https://cdn.hashnode.com/res/hashnode/image/upload/v1696005253331/UPp1dFXS9.png?auto=format)]'}`}>
            <div className="flex justify-between items-center">
                <div>
                    <HashnodeLogoSVG theme={theme} icon={false} className="w-32 fill-current hidden sm:block" />
                    <HashnodeLogoSVG theme={theme} icon={true} className="w-8 fill-current block sm:hidden" />
                </div>
                <div className="flex gap-x-4">
                    <Button onClick={() => window.location.href = 'https://hashnode.com/draft'} appearance="link-slate" className="flex items-center gap-x-2">
                        <PenEdit size="sm" />
                        Write Article
                    </Button>
                    <Button onClick={() => window.location.href = 'https://hashnode.com/settings/blogs'} appearance="link-slate" className="flex items-center gap-x-2">
                        <BlogManage size="sm" />
                        Manage Blogs
                    </Button>
                    <button
                        className="self-center dark:text-white text-slate-600 rounded-full dark:hover:bg-slate-800 hover:bg-slate-100 p-1"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        { theme === 'dark' ? <Sun size="lg" /> : <Moon size="lg" />}
                    </button>
                </div>
            </div>
            <RixSearch />
            <Music />
        </div>
        </div>
    )
}