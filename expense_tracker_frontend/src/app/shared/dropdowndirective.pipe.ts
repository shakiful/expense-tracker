import { ElementRef, HostBinding, HostListener, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropdowndirective'
})
export class DropdowndirectivePipe {

  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click',['$event']) toggleOpen(event:Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
  }

  constructor(private elRef:ElementRef) { }

}
