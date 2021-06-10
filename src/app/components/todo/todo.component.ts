import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  @Input('itemTodo') todo: { key: Date; done: false; text: any; } | undefined;
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();
  @Output() edit = new EventEmitter<{key:Date,text:string}>();
//در مورد این ممکن سوال پیش بیاد چطور کار میکنه
//وقتی روی ادیت کلیک میکنیم ترو میشه و وارد کامپونت ادیت میشه
//حال وقتی روی سیو تو کامپونت ادیت زدیم دوباره بر میگرده اینجا و انگار دوباره این کامپونت نیو میشه که در این 
//حالت بازم مقدار پیش فرض فالس هست
  editstatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(key: any) {
    this.delete.emit(key);
  }
  onDone(key: any) {
    this.done.emit(key);
  }

  //چون در توتوز نیاز دارم کدام ایتم بوده تا تغییر کند
  editHandler(key:any,text:string)
  {
    this.edit.emit({key:key,text:text});
  }
}
