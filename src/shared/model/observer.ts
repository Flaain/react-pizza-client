export class Observer<T> {
    protected subscribers: Array<(data: T) => void>;

    constructor() {
        this.subscribers = [];
    }

    subscribe = (subscriber: (data: T) => void) => {
        this.subscribers.push(subscriber);

        return () => {
            this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
        };
    };

    protected notify = (data: T) => {
        this.subscribers.forEach((subscriber) => subscriber(data));
    };
}