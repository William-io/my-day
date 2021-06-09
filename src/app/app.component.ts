import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: Task[] = [];
  public title: String = 'My Days';
  /**Testando lista de inpunt no task
   */
  constructor() {
    this.tasks.push(new Task(1, 'Prioridade', false));

  }
  changeText() {
    this.title = 'Texto foi alterado';
  }
  // title = 'myDay';
}
