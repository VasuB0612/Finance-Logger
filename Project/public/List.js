"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoices_1 = require("./Classes/Invoices");
const form = document.querySelector(".form_container");
const type = document.querySelector("#to_from");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const invoice1 = new Invoices_1.Invoice("Alan", "work on the website", 500);
const invoice2 = new Invoices_1.Invoice("Charlie", "work on the website", 400);
const invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
invoices.forEach((inv) => {
    console.log(inv);
});
