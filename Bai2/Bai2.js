function checkNumber(arr,num){
    let count =0;
    for (let i = 0; i < arr.length; i++) {
        if(num==arr[i]){
            count++;
            return i;
        }
    }
    if(count==0) {
        return false;
    }
}
