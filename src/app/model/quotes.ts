export class Quotes {
  public showDescription: boolean;

  constructor(public id: number, public name: string, public myquote: string,
              public author: string,
              public postdate: Date, public upvote: number,
              public downvote: number) {
// tslint:disable-next-line: semicolon
    this.showDescription = false
// tslint:disable-next-line: semicolon
    this.upvote = 0
// tslint:disable-next-line: semicolon
    this.downvote = 0

  }
}
