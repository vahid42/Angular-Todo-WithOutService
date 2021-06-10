import { Component } from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [] as Array<any>;


  addTodo(todo: any) {
    let _todo = { key: Date.now(), done: false, text: todo };
    this.todos = [
      ... this.todos, _todo]

  }

  onDelete(key: Date) {
    this.todos = this.todos.filter(item => item.key != key);
  }
  onDone(key: Date) {

    this.todos = this.todos.map(item => {
      if (item.key == key) {
        return {

          ...item,
          done: !item.done
        }
      }
      return item;
    })
  }


  editHandler(todo:{ key: Date; text: string; }) {
    this.todos = this.todos.map(item => {
      if (item.key == todo.key) {
        return {
          ...item,
          text: todo.text
        }
      }
      return item;
    })
  }
}
