import { Invoice } from "./Classes/Invoices";

const form = document.querySelector(".form_container") as HTMLFormElement;
const type = document.querySelector("#to_from") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const invoice1 = new Invoice("Alan", "work on the website", 500);
const invoice2 = new Invoice("Charlie", "work on the website", 400);

const invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

invoices.forEach((inv) => {
  console.log(inv);
});
