class Book{
    constructor(bname,bcost)
    {
        this.bname=bname;
        this.bcost=bcost
    } 
  
}
class technicalBook extends Book{
    constructor(bname,bcost,branch){
    super(bname,bcost)
    this.branch=branch


}
}
let obj=new technicalBook("java",800,"cs")
console.log(obj.bname,obj.bcost,obj.branch)
//let obj=new Book("Shubham the witter",999)
//console.log(obj.bname,obj.bcost)
let arr=[]
arr.push(new Book("www",90))
arr.push(new Book("sss",80))
arr.push(new Book("kkk",88))
let total=0
for(b of arr)
{
    total=total+b.bcost
}
console.log(total)