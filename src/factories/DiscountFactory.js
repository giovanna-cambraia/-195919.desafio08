import { SummerDiscount } from '../discounts/SummerDiscount.js';
import { WinterDiscount } from '../discounts/WinterDiscount.js';
import { DefaultDiscount } from '../discounts/DefaultDiscount.js';

export class DiscoutFactory {
    static create(code) {
        if ( code === "SUMMER10") return new SummerDiscount();
        if (code === "WINTER15") return new WinterDiscount();
        return new DefaultDiscount();
    }
}