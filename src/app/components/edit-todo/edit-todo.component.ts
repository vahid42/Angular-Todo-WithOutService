import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styles: [
  ]
})
export class EditTodoComponent implements OnInit {

  @Input('text') textTodo: string = '';
  @Input('key') keyTodo: undefined | Date = new Date();
  @Output() edit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  editHandler() {
    if (this.textTodo.length > 0) {
      this.edit.emit(this.textTodo);
    }

  }

}
