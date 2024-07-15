console.log(process.argv)

function add (nums : string []): number {
    let acc : number = 0;
    for (let  i = 2; i < nums.length; i++) {
        acc += Number(nums[i]);
    }
    return acc;

}

let res : number = add(process.argv);

process.stdout.write(res.toString());