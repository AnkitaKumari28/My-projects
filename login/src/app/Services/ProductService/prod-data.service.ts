import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class ProductDataService implements InMemoryDbService{

    createDb(){

        return{
          ListOfProducts:[
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "electronic", name: "tv", color:"black", code:'e123', quantity:20, price:30000, description:"latest model" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "electronic", name: "fridge", color:"grey",  code:'e323', quantity:10, price:45000, description:"fast cooling" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "fashion", name: "adidas", color:"black",  code:'f123', quantity:12, price:55000, description:"latest fashion" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "fashion", name: "puma", color:"pink", code:'f2123',quantity:20, price:52000, description:"new" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "mobile",name: "realme", color:"black",  code:'m123', quantity:2, price:40000, description:"latest model" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "mobile",name: "samsung", color:"black",  code:'e223',  quantity:3, price:30000, description:"new features" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "book", name: "maths", color:"white",  code:'b123', quantity:20, price:4000, description:"3rd edition" },
                {image:"https://m.media-amazon.com/images/I/616NaqQIeKL._AC_SY400_.jpg" ,category: "book",name: "science", color:"black", code:'b323', quantity:30, price:5000, description:"2nd edition" }
            
            ]
        };
        
    }

}