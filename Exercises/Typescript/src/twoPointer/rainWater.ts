function trap(height: number[]): number {
    
    let res = 0;
    let left = 0;
    let right = 1;

    while (right < height.length) {

        if(height[left] > height[right]) {
            let previous;
            while(height[right] < height[left]){
                if(!previous){
                    previous = height[right];
                }
                if(height[right] <= previous){
                    right += 1;
                }else{
                    break;
                }
            }
            //right +=1;
            let sliced = height.slice(left, right +1)
            console.log(sliced);
            let calc = calcArea(sliced);
            console.log(calc);
            res += calc;

            left = right;
            right += 1;

        }else{
            left += 1;
            right += 1;
        }

    }

    return res;
};

function calcArea (subarray: number []): number {
        let limit = Math.min(subarray[0], subarray[subarray.length -1]);
        let res =0; 
        for(let  i = 1; i < subarray.length -1; i++){
            res += Math.abs(subarray[i] - limit);
        }

        return res;
}

trap([0,1,0,2,1,0,1,3,2,1,2,1]);

//console.log(calcArea([2,1,0,1,3]));
//console.log(calcArea([1,0,0,1]));