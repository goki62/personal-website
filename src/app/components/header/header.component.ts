import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll: ElementRef | undefined

  constructor() { }

  ngOnInit(): void {
  }

  scrollDown(){
    window.scrollTo({
      top: 2800,
      behavior: 'smooth'
    })
  }
}
