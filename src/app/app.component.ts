import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: Task[] = [];
  public title: String = 'My Days';
  public form: FormGroup;
  /**Testando lista de inpunt no task
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    // this.tasks.push(new Task(1, 'Prioridade', true));
    // this.tasks.push(new Task(2, 'Terminar trecho 20 do app.', true));
    // this.tasks.push(new Task(3, 'Terminar trecho 10 do app.', true));
    this.load();
  }

  clear() {
    this.form.reset();
  }

  //Metodo Remover
  remove(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1)
    }
    this.save();
  }

  markAsConclude(task: Task) {
    task.done = true;
    this.save();
  }

  maskAsUndone(task: Task) {
    task.done = false;
    this.save();
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.tasks.length + 1;
    this.tasks.push(new Task(id, title, false));
    this.save();
    this.clear();
  }

  save() {
    const data = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', data);
    
  }

  load() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    } else {
      this.tasks = [];
    }

  }



  /* changeText() {
    this.title = 'Texto foi alterado';
  }
  title = 'myDay'; */
}
