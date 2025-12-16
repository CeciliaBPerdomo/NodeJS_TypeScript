import { type Model, type Types } from "mongoose";
interface IItem {
    desc: String;
    id: Number;
    price: Number;
    quantity: Number;
    title: String;
}
interface IShippingDetails {
    name: String;
    cellphone: String;
    location: String;
    address: String;
}
export interface IOrder {
    createdAt: Date;
    user: Types.ObjectId;
    price: Number;
    shippingCost: Number;
    items: IItem[];
    shippingDetails: IShippingDetails;
    status: String;
    total: Number;
}
declare const Order: Model<IOrder>;
export default Order;
//# sourceMappingURL=order.d.ts.map