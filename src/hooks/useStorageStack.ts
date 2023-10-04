import { useEffect, useState } from "react";

export default function useStorageStack(key: string, maximum: number, defaultValue?: any) {
    const [stack, setStack] = useState<any[]>(defaultValue || []);

    useEffect(() => {
        const stringified = localStorage.getItem(key);
        setStack(stringified ? JSON.parse(stringified) : []);
    }, []);

    const pushItem = (item: any) => {
        console.log('pushing in ', stack);
        const stringified = localStorage.getItem(key);
        const currentStack = stringified ? JSON.parse(stringified) : [];
        if (currentStack.length === maximum) {
            currentStack.shift();
        }
        currentStack.push(item);
        localStorage.setItem(key, JSON.stringify(currentStack));
        setStack(currentStack);
    }

    return { stack, pushItem };
}