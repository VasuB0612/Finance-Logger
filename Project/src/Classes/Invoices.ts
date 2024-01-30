export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  display() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
