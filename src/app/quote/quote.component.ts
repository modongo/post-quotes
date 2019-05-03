import { Component, OnInit } from '@angular/core';
import { Quotes } from '../model/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    // tslint:disable-next-line: quotemark
    new Quotes(1, "Mike", "The world is round", "Wazee",
      new Date(2 - 1 - 2019), 0, 0),
    // tslint:disable-next-line: quotemark
    new Quotes(1, "John", "The world is round", "Unkwown",
      new Date(2 - 1 - 2018), 0, 0),
    // tslint:disable-next-line: quotemark
    new Quotes(1, "Willie", "The world is round", "Unkwown2",
      new Date(2 - 1 - 2019), 0, 0),
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}'s quote`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);

  }

  constructor() { }

  ngOnInit() {
  }

}
