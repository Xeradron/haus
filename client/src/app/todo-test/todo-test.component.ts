import { Component, OnInit } from '@angular/core';
import { TodoControllerService, InlineResponse200, Todo } from '../api_v4';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-test',
  templateUrl: './todo-test.component.html',
  styleUrls: ['./todo-test.component.scss'],
  providers: [TodoControllerService]
})
export class TodoTestComponent implements OnInit {

  private todoService: TodoControllerService

  private todoCount: number;
  private todos: Todo[];
  private displayedCoulmns = ["id","title", "desc"];
  private selectedID: number;
  private todoFormGroup: FormGroup;

  constructor(todoService: TodoControllerService) {
    this.todoService = todoService;

    this.todoFormGroup = new FormGroup({
      "title": new FormControl(),
      "desc": new FormControl()
    });
  }

  ngOnInit() {
    this.getTodoCount();
    this.getTodoList();
  }

  getTodoByID(id: number) {
    this.selectedID = id;
    this.todoService.todoControllerFindById(id, "body").subscribe((response: Todo) => {
      this.todoFormGroup.controls["title"].setValue(response.title);
      this.todoFormGroup.controls["desc"].setValue(response.desc);
    });
  }

  getTodoList () {
    this.todoService.todoControllerFind(null,"body").subscribe((response: Todo[]) => {
      this.todos = response;
    });
  }

  getTodoCount() {
    this.todoService.todoControllerCount(null, 'body').subscribe((response: InlineResponse200) => {
      this.todoCount = response.count;
    });
  }

  updateTodobyID(id: number) {
    this.todoService.todoControllerUpdateById(id, this.todoFormGroup.value, "body").subscribe((response) => {
      this.getTodoList();
    });
  }

  deleteTodoByID(id: number) {
    this.todoService.todoControllerDeleteById(id,"body").subscribe(() => {
      this.getTodoList();
      this.getTodoCount();
    });
  }

  addTodo() {
    this.todoService.todoControllerCreate(this.todoFormGroup.value, "body").subscribe((response: Todo) => {
      this.getTodoList();
      this.getTodoCount();
      this.getTodoByID(response.id);
    });
  }

}
