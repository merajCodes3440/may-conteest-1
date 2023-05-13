let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
   arr.map(function(student){
        if(student.marks>50){
            console.log(student);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(student){
        if(student.marks>50){
            console.log(student);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
   
    let addStu = {id:4,name:"meraj",age:'23',marks:47};
    arr.push(addStu);
    console.log(arr);
  }
  function removeFailedStudent() {
    //Write your code here, just console.log
    let failedStu = arr.filter((student)=>
        student.marks<50);
    console.log(failedStu);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let newArray = [{ id:5,name:"sheeraz", age:'24',marks:68 },
    { id:6,name:"sameer", age:'20',marks:60 },
    { id:7,name:"shivam", age:'21',marks:80 }  ];

    let concatinatedArray = arr.concat(newArray);
    console.log(concatinatedArray);
  };
