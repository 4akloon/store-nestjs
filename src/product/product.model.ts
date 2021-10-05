import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ProductModel extends Base { }

export class ProductModel extends TimeStamps {
    @prop()
    title: string;

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop({ type: () => [String] })
    images: string[];

    @prop()
    description: string;

    @prop()
    category: string;

    @prop()
    subCategory?: string;

}
