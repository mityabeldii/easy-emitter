// https://stackoverflow.com/a/38115936/9521040

const createEmitter = <T extends Function>(context = null) => {
    let listeners: T[] = [];
    return {
        listeners,
        addListener: (listener: T) => {
            listeners.push(listener);
        },
        removeListener: (listener: T) => {
            listeners = listeners.filter((listener_, index) => index !== listeners.indexOf(listener));
        },
        trigger: <T>(...args: any) => {
            listeners.forEach((listener) => listener.apply(context, args));
        },
        removeAllListeners: () => {
            listeners = [];
        },
    };
};

export default createEmitter;
