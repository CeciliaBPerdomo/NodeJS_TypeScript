import type { Express } from "express";
export declare class Server {
    app: Express;
    port: string | number | undefined;
    authPath: string;
    orderPath: string;
    issuesPath: string;
    constructor();
    conectarDB(): Promise<void>;
    middlewares(): void;
    routes(): void;
    listen(): void;
}
//# sourceMappingURL=server.d.ts.map