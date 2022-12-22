interface Student{std_name:string,std_id:number};
interface Teacher{tch_name:string,tch_id:number};
let inter_type:Student & Teacher;
inter_type={std_name:"ALI",std_id:897,tch_name:"Umar",tch_id:76};
console.log(inter_type.tch_name);
console.log(inter_type.tch_id);
console.log(inter_type["std_name"]);
console.log(inter_type["std_id"]);

