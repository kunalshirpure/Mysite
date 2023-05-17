function product(prodectName,productCost,productDesc)
{
    this.prodectName=prodectName
    this.productCost=productCost
    this.productDesc=productDesc
this.showProdDetails =function()
    {
        console.log(this.prodectName,this.productCost,this.productDesc)
    }
}
let obj=new product("sparx",8999,"it is good prodcut")
obj.showProdDetails()