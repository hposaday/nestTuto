import {Document, SchemaOptions} from 'mongoose';

export interface Basemodel extends Document{
    createdAt ?: Date;
    updatedAt ?: Date;
}

export class BaseModelViewModel {
    createdAt ?: Date;
    updatedAt ?: Date;
    id ?: String;
}

export const schemaOptions: SchemaOptions = {
    toJSON: {
        virtuals: true,
        getters: true,
    },
}