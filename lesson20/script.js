function PublicService (){
    this.service = []
    this.rates = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6,
      }
}

PublicService.prototype.addMeterReadings = function(amount, tarifName){
 if(!Object.keys(this.rates).includes(tarifName)){
    throw new Error(`Service ${tarifName} is unavailble.`)
 } 
  if(this.service.some(({key}) => key === tarifName)){
    throw new Error(`Service ${tarifName} is already included`)
 }

 this.service.push({key:tarifName, amount})
}
PublicService.prototype.deleteMeterReadings = function(tarifName){
this.service = this.service.filter(({key}) => key !== tarifName)
}
PublicService.prototype.getSum = function(){
let sum = 0;
this.service.forEach(({key, amount}) =>{sum += this.rates[key] * amount})
return sum
}

let service = new PublicService();

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(300, "electricity");

const result = service.getSum()
console.log(result)