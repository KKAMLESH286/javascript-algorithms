function destroyer(arr){
    let args = Array.prototype.slice.call(arguments);
    for (let i= 0; i<arr.length; i++) {
        for (let j = 0; j<args.length; j++){
            if(arr[i]==args[j]){
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

 destroyer([1,2,3,4,5],4,5);
 // return [1,2,3]