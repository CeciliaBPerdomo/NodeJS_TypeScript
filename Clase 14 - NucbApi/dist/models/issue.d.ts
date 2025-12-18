import { Model, type Types } from "mongoose";
export interface IIssue {
    title: String;
    description: String;
    priority: Number;
    user: Types.ObjectId;
    createdAt: Date;
}
declare const Issue: Model<IIssue>;
export default Issue;
//# sourceMappingURL=issue.d.ts.map