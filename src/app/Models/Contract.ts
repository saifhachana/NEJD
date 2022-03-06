import { Ad } from "./Ad";
import { Client } from "./Client";
import { Companie } from "./Companie";

export class Contract{
    constructor(
        public id_contract: string,
        public client: Client,
        public companie: Companie,
        public ad: Ad,
        public loop:number,
        public days:number,
        public start_date:Date,
        public end_date:Date,
    ){}
}