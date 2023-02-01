function getAllKeysOfObject(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
         console.log(key);
         }
    }
}
const user = {
    city: 'Moscow',
};
const userIvan = Object.create(user);
userIvan.name = "Ivan";

getAllKeysOfObject(userIvan);