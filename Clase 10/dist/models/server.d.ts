import type { Express } from "express";
export declare class Server {
    app: Express;
    constructor();
    conexionBD(): Promise<void>;
    middlewares(): void;
    routes(): void;
    listen(): void;
}
//# sourceMappingURL=server.d.ts.map