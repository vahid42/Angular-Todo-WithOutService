import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-todo',
  templateUrl: './form-add-todo.component.html',
  styles: [
  ]
})
export class FormAddTodoComponent implements OnInit {

  textTodo: string = "";
  @Output('add') addTodo = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
     if(this.textTodo.length>0)
    {
      this.addTodo.emit(this.textTodo);
      this.textTodo='';
    }

  }

}
