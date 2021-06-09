import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: any[] = [];
  public title: String = 'My Days';
  /**Testando lista de inpunt no task
   */
  constructor() {
    this.tasks.push('1, Concluir o estudor de variaveis');
    this.tasks.push('2, Falta finalizar algo');
    this.tasks.push({message: 'Testando'});
    this.tasks.push(new Date());
    
  }
  changeText(){
    this.title = 'Texto foi alterado';
  }
  // title = 'myDay';
}
