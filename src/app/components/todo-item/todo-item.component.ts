import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Todo} from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //Set Dynamic classes
  setClasses(){
    let classes: {
      todo: boolean;
      'is-complete': boolean | undefined
    };

    classes = {
      todo: true,
      'is-complete': this.todo.compeleted
    };

    return classes;
  }

  // onToggle
  onToggle(todo: Todo){
    // Toggle in UI
    todo.compeleted = !todo.compeleted;

    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo){
    this.deleteTodo.emit(todo);
  }





}
