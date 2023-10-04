import { useEffect, useState } from "react";

export default function useStorage(key: string, defaultValue?: any) {
    const [value, setValue] = useState<any |null>(defaultValue || null);

    useEffect(() => {
        const strigified = localStorage.getItem(key);
        setValue(JSON.parse(strigified));
    }, []);

    const setItem = (value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    const clearItem = () => {
        localStorage.setItem(key, JSON.stringify(null));
        setItem(null);
    }

    return { value, setItem, clearItem };
}