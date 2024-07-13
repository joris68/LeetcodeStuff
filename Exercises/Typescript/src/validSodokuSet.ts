function isValidSudoku(board: string[][]): boolean {

    let quadrantKeeper : {[key : number]: Set<number>} = {};

    board.forEach((item, index) => {
        item.forEach((innerItem, innerIndex) => {
            if(innerItem !== '.'){
                let quadrant = mapToQuadrants3([index, innerIndex]);
                if(quadrant in quadrantKeeper && quadrantKeeper[quadrant].has(+innerItem)) {
                    return false;
                }
            }
        })
    })

    return true;
};

function mapToQuadrants3(tuple : [number, number]): number {
    if(tuple [0] <= 2 && tuple[1] <=2 ) return 0;
    if(tuple [0] <= 2 && tuple[1] <=5 ) return 1;
    if(tuple [0] <= 2 && tuple[1] <=8 ) return 2;

    if(tuple [0] <= 5 && tuple[1] <=2 ) return 3;
    if(tuple [0] <= 5 && tuple[1] <=5 ) return 4;
    if(tuple [0] <= 5 && tuple[1] <=8 ) return 5;

    if(tuple [0] <= 8 && tuple[1] <=2 ) return 6;
    if(tuple [0] <= 8 && tuple[1] <=5 ) return 7;
    if(tuple [0] <= 8 && tuple[1] <=8 ) return 8;

    return -1;
}