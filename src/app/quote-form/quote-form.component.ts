import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Quotes } from '../model/quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  form: FormGroup;


  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: quotemark
  newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
// tslint:disable-next-line: quotemark
    this.newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.name]],
      author: [null, Validators.required],
      myQuote: [null, Validators.required],
      postDate: [null, Validators.required]

    });
  }

}
