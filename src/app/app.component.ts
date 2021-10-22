import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public select1: any;
  public select2: any;
  public select3: any;

  public dataList: any = [
    { id: 1, name: 'mark', isSelected: false },
    { id: 2, name: 'kemp', isSelected: false },
    { id: 3, name: 'Gian', isSelected: false },
    { id: 4, name: 'Kekien', isSelected: false },
    { id: 5, name: 'Saballa', isSelected: false },
  ];

  public ngOnInit() {}

  public onChange(event) {
    console.log(event.target.value);
    let id = event.target.value;
    let index = this.dataList.findIndex((d) => Number(d.id) === Number(id));
    console.log(index, 'index');
    this.dataList[index].isSelected = true;
  }

  public numberFormatter(data) {
    return Number(data);
  }

  public testFunction() {
    
  }
}
