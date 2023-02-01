function getObjectNameStr(str, obj){
    if(obj.hasOwnProperty(str)){
        return true;
    }else{
        return false;
    }
}    
const testObj = {
    name : 'Ivan',
    age: '22'
}
console.log(getObjectNameStr('name', testObj))