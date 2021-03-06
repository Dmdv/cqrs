import Service from "./Service";
import LockDataType from "./LockDataType";
declare const setdata: unique symbol;
declare const isLock: unique symbol;
declare const loadEvents: unique symbol;
export default class Actor {
    private latestLockTime;
    private lockData;
    __proto__: any;
    static toParse: any;
    protected service: Service;
    protected $: Function;
    constructor(data?: {});
    readonly data: any;
    refreshJSON(): any;
    refreshData(): any;
    readonly type: string;
    [setdata]: any;
    readonly id: any;
    static getType(): string;
    readonly json: any;
    readonly updater: any;
    subscribe(event: string, listenerType: any, listenerId: string, handleMethodName: string): void;
    unsubscribe(event: string, listenerId: string): void;
    [isLock](key: any): boolean;
    remove(): void;
    lock(data: LockDataType): boolean;
    [loadEvents](events: any): void;
    unlock(key: any): void;
    static toJSON(actor: Actor): any;
    static parse(json: any): Actor;
    unbind(): void;
}
export {};
