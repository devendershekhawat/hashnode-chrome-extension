import React, { useEffect, useRef, useState } from 'react';
import {  Moon, Sun, IconButton, Campfire, WeatherRain, WeatherStorm,
    WeatherWind, Tree, Stream, CoffeeCup, Button } from '@team-hashnode/matrix-ui';

import * as Tooltip from '@radix-ui/react-tooltip'

export default function Music() {
    const audioRef = useRef<HTMLAudioElement>();
    const [currentSound, setCurrentSound] = useState<string | null>(null);

    const sounds = [
        {
            key: 'campfire',
            Icon: Campfire,
        },
        {
            key: 'rain',
            Icon: WeatherRain,
        },
        {
            key: 'storm',
            Icon: WeatherStorm,
        },
        {
            key: 'forest',
            Icon: Tree,
        },
        {
            key: 'wind',
            Icon: WeatherWind,
        },
        {
            key: 'stream',
            Icon: Stream,
        },
        {
            key: 'cafe',
            Icon: CoffeeCup,
        },
    ]

    useEffect(() => {
        if (currentSound) {
            audioRef.current.play();
        }
    }, [currentSound]);

    return (
        <>
        {
            currentSound && <audio ref={audioRef} src={`https://d1y13ciwmrixum.cloudfront.net/mp3s/${currentSound}.mp3`} loop preload="auto" />
        }
        <div className="flex mt-10 mb-5 w-full justify-center items-center gap-x-3">
            {sounds.map(({ key, Icon }) => (
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <button
                                onClick={() => setCurrentSound(prev => prev === key ? null : key)}
                                className={`${key === currentSound ? 'dark:bg-slate-800 bg-slate-400' : ''} flex bg-slate-200 dark:text-slate-100 dark:hover:bg-slate-800 rounded-full cursor-pointer hover:bg-slate-400 dark:bg-slate-700 items-center justify-center p-3`}
                            >
                                <Icon size="md" />
                        </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                        <Tooltip.Content
                            className="z-50 px-2 text-sm leading-snug text-white py-0.5 font-medium font-heading bg-black rounded"
                        >
                            <Tooltip.Arrow />
                            <p>{key} sound</p>
                        </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>
            ))}
            
        </div>
        </>
    )
}