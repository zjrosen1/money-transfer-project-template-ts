class BankingClient {

  hostname: string

  constructor(host: string) {
    this.hostname = host;
  }

  withdraw(amount:number, fromAccount:string): string {
    return this.transfer("w", amount, fromAccount);
  }

  deposit(amount:number, toAccount:string): string {
    return this.transfer("d", amount, toAccount);
  }

  /* A mock implementation that returns a unique identifer */
  transfer(type:string, _amount: number, _account: string): string {
    let result           = type;
    const characters       = '0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }


}
export default BankingClient;