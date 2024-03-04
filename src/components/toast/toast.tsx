import { FC, useMemo, useState } from "react";
import "./toast.scss";
import { ToastContext } from "./context";
import { useTimeout } from "../../hooks/useTimeout";

interface IProps {
    massage: string;
    close: () => void;
}

type ToastProviderPropirties = {
    children: React.ReactElement;
};

type ToastType = {
    massage: string;
    id: number;
};

export const Toast: FC<IProps> = ({ massage, close }) => {
    useTimeout(() => {
        close();
    });
    return (
        <div>
            <p>{massage}</p>
            <button onClick={close}>x</button>
        </div>
    );
};

export const ToastProvider = ({ children }: ToastProviderPropirties) => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const closeToast = (id: number) => {
        setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
    };

    const openToast = (massage: string) => {
        const newToast = {
            id: Date.now(),
            massage,
        };
        setToasts((prevState) => [...prevState, newToast]);
    };

    const contextValue = useMemo(
        () => ({ open: openToast, close: closeToast }),
        []
    );

    return (
        <>
            <ToastContext.Provider value={contextValue}>
                {children}
                {toasts &&
                    toasts.map((toast) => {
                        return (
                            <Toast
                                key={toast.id}
                                massage={toast.massage}
                                close={() => closeToast(toast.id)}
                            />
                        );
                    })}
            </ToastContext.Provider>
        </>
    );
};
