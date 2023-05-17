class product
{
constructor(prodectName, productCost,productDesc)
{
    this.prodectName=prodectName
    this.productCost=productCost
    this.productDesc=productDesc
}

 showProdDetails() {
     console.log(this.prodectName,this.productCost,this.productDesc)
 } 

}
let obj=new product("nayka",800,"it is a nice product")
obj.showProdDetails()