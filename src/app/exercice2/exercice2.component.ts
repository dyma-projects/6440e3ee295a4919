import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit, AfterViewInit {
  @ViewChild('mySquare') public squareRef: ElementRef<HTMLDivElement>;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.squareRef.nativeElement.addEventListener('click', () => {
      console.log('click');
    });
  }
}
