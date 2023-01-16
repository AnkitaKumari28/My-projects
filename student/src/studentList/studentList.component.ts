import { Component } from "@angular/core";
@Component({
    selector:'slist',
    templateUrl:'./studentList.component.html'
})

export class StudentList{
    totalmarks:number=0;
    list:any[]=[
        {name:"Emma", gender:"female", roll:"1", math:45, hindi:55, english:66, socialscience:78},
        {name:"Ana", gender:"female", roll:"2", math:33, hindi:23, english:68, socialscience:97},
        {name:"Jim", gender:"male", roll:"3", math:33, hindi:44, english:11, socialscience:19},
        {name:"Kety", gender:"female", roll:"4", math:34, hindi:55, english:87, socialscience:12},
        {name:"Rehan", gender:"male", roll:"5", math:86, hindi:54, english:44, socialscience:98},
        {name:"Sid", gender:"male", roll:"6", math:15, hindi:12, english:23, socialscience:17},
        {name:"Enayat", gender:"female", roll:"7", math:66, hindi:34, english:45, socialscience:65},
        {name:"Kim", gender:"male", roll:"8", math:23, hindi:44, english:66, socialscience:88},
        {name:"Aman", gender:"male", roll:"9", math:76, hindi:55, english:65, socialscience:98},
        {name:"Yami", gender:"female", roll:"10", math:23, hindi:54, english:47, socialscience:34},

    ];
}