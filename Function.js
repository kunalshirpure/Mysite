function pen(PenColor,Pencost)
{
    this.PenColor=PenColor
    this.Pencost=Pencost
    this. showdetail=function pen(PenColor,Pencost){
        console.log(this.PenColor,this.Pencost)                           
    }
}
let obj=new pen("blue",80)
console.log(obj.PenColor,obj.Pencost)
obj.showdetail()



let arr=[]
arr.push(new pen("blue",20))
arr.push(new pen("black",30))
arr.push(new pen("pink",10))

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}