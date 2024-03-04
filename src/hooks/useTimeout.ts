import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number = 3000) => {
    const saveCallback = useRef(callback);

    useEffect(() => {
        saveCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!delay && delay !== 0) {
            return;
        }

        const functionId = setTimeout(() => saveCallback.current(), delay);

        return () => clearTimeout(functionId);
    }, [delay]);
};
