import { compileClassMetadata } from '@angular/compiler';
import{Component, IterableDiffers} from '@angular/core'

@Component({
    selector:'dep',
    template:`Department:{{dept}}`
})
export class DepartmentComponent{
    dept:string="IT";
}