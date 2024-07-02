// export const API_KEY =`AIzaSyCk8wtr97bHPu9katweLhlfJxpffOBTkP0`;
export const API_KEY ='AIzaSyBMeXLrmc7b1n7P6oD23QKnQK3p1H8l-rk';




export const Count_value =(val)=>{
if(val>=1000000){
    return Math.floor(val/1000000)+"M";
}else if(val>=1000)
{
    return Math.floor(val/1000)+"k"
}
else{
    return val;
}
}