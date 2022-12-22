interface Manager{
    name:string,
    subordinates:number
}
let storeManager:Manager={name:"Ali",subordinates:10}
console.log(storeManager.name);
console.log(storeManager["subordinates"]);

