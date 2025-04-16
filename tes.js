

const checkIsQuantityEnough= (kode_item,targetQuantity,arrays)=>{
   					let array=[...arrays];
   					let arrayEnough=[]
   					//kemungkinan quantity yg dibalikin lebih besar dri msg msg respon card
   					for (const obj of array){
   						obj.status=false
   						for (const stock of obj.asset_stock){
   							if(stock.quantity<=targetQuantity && stock.kode_item==kode_item){
   								
   								obj.status=true
   								
   								targetQuantity-=stock.quantity
   								
   								arrayEnough.push({
   								responsibility_id:obj.responsibility_id,
   								notes:"babibu",
   								asset_stock:[{
   								quantity:stock.quantity,
   								kode_item:stock.kode_item}]
   								})
   							}
   						}
   					}
   					
   					for (const obj of array){
   						for (const stock of obj.asset_stock){
   							if(stock.quantity>=targetQuantity && obj.status==true && stock.kode_item==kode_item){
   								arrayEnough.push({
   								responsibility_id:obj.responsibility_id,
   								notes:"babibu",
   								asset_stock:[{
   								quantity:targetQuantity,
   								kode_item:stock.kode_item}]
   								})
   							}
   						}
   					}
				  return arrayEnough; 
   }
   					
var numbers = checkIsQuantityEnough("wa",70,[
 {responsibility_id:"ww",asset_stock:[{kode_item:"wa",quantity:45}]},
 {responsibility_id:"ww",asset_stock:[{kode_item:"wa",quantity:4}]}, 
 {responsibility_id:"ww",asset_stock:[{kode_item:"wa",quantity:9}]}, 
 {responsibility_id:"ww",asset_stock:[{kode_item:"wa",quantity:16}]}, 
 {responsibility_id:"ww",asset_stock:[{kode_item:"wa",quantity:25}]}
 ]);

let txt = "";
//console.log(numbers,"w")
for (let x of numbers) {
  console.log(x) 
}





