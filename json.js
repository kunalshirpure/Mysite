let obj={personName:"shubham",personAge:22}
console.log(obj.personName,obj.personAge)


let arr=[]
arr.push({personName:"Shubham",personAge:22})
arr.push({personName:"kajal",personAge:23})
arr.push({personName:"vikrant",personAge:26})

console.log(arr)

//arr.forEach( (b)=>{ totalage=totalage+b.personAge})
//.log(totalage)
let total=0
for(b of arr)
{
   total=total+b.personAge
}
console.log(total)