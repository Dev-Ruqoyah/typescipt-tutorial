const Intro = () => {
    // String
    let name:string;
  
    // number
    let age:number;
  
    // tuples(This will accept either number or string)
    let matricNo:number|string
  
    // Boolean
    let isActive:boolean
  
    // Array of string
    let hobbies:string[];
  
    // Array of number
    let ages:number[];
  
    // Declaring an object
    type Person ={
      name:string
      age:number
    }
    // Object
    let newUser:Person;
    // Array of Object
    let arrOfNewUser:Person[]
  
    interface Student{
      name:string;
      dept?:string;  //optional
      matricNo:number
    }
  
    // using an interface in another interface
    interface Department extends Student{
      courseCode:number
    }
    let dept :Department ={
      courseCode:311,
      name:"Hamzat",
      matricNo: 2021000886
  
    }
    console.log(dept);
  
  
    // Using multiple types
    type X= {
      a:number;
      b:string
    }
    
    type Y = X & {
      c:number;
      d:string
    }
    let coordinate : Y = {
      a:1,b:"go",c:2,d:"no"
    }
    console.log(coordinate);
  
    // funtion
    let printName:Function;
    
  
    return ( 
      <>
        <h3>Hello World</h3>
      </>
     );
  }
   
  export default Intro;