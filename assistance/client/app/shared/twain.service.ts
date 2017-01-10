export class TwainService {
  quote: string = 'Que pedo morros';
  getQuote(): Promise<string>{
    return Promise.resolve(this.quote);
  }
}
