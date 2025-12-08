import { Model } from "mongoose";
export interface ICamada {
    nombre: string;
    diasDeCursada: string;
    modulo: string;
}
declare const Camada: Model<ICamada>;
export default Camada;
//# sourceMappingURL=camada.d.ts.map