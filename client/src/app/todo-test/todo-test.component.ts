import { Component, OnInit } from '@angular/core';
import { TodoControllerService, InlineResponse200 } from '../api_v4';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-test',
  templateUrl: './todo-test.component.html',
  styleUrls: ['./todo-test.component.scss'],
  providers: [TodoControllerService]
})
export class TodoTestComponent implements OnInit {

  todoService: TodoControllerService
  todoCount

  constructor(todoService: TodoControllerService) {
    this.todoService = todoService;
  }

  ngOnInit() {
    this.todoService.todoControllerCount(null, 'body').subscribe((value) => {
      this.todoCount = value;
      console.log(value);
    })
  }

}
