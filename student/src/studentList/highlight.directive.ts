import{Directive, ElementRef, HostBinding, Input} from '@angular/core'


@Directive({
    selector:'[HighLight]'
})

    export class HighLightDirective {
        @Input() foreColor:string="";
        @Input() backgroundColor:string="";
    
        @HostBinding('style.backgroundColor') bgColor:string='';
        @HostBinding('style.color') color:string='';
        
    
      ngOnInit() {
        
        this.bgColor=this.backgroundColor;
        this.color=this.foreColor;
      }
    }
    
 