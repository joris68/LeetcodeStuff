function isValidSudoku(board: string[][]): boolean {
    
    let indexKeeper : {[key : string]: number []} = {};
    let quadrantKeeper : {[key : number]: number []} = {};

    board.forEach((item, index) => { // item corresponds to row
        item.forEach((innerItem, innerIndex)  => { // innerItem corresponds to column

            if(innerItem !== '.') {
                
                if(!indexKeeping(innerIndex ,  indexKeeper)) return false;
                if(!quadrantKeeping([index, innerIndex], +innerItem, quadrantKeeper)) return false;
            }

        })
    })

    return true;
};

function quadrantKeeping(indexTupel: [number, number], item : number, quadrants: {[key : number]: number []} ): boolean {
    let quadrant : number = mapToQuadrants(indexTupel);
    if(quadrant in quadrants ) {
        if(quadrants[quadrant].filter(x => x === item).length === 0){
            quadrants[quadrant].push(item);
            return true;
        }else{
            return false;
        }
    }else{
        quadrants[quadrant] = [item];
        return true;
    }
}

function indexKeeping(item : number,  map : {[key : string]: number []}): boolean {
    let modes : string[] = ['r', 'col'];
    for( let mode in modes){
        let key = item + mode ;
        if(key in map ){
            if(map[key].filter(x => x === item).length === 0){
                map.key.push(item);
                return true;
            }else{
                return false;
            }
        } else{
            map[key] = [item];
            return true;
        }
    }
    return true;
}

function mapToQuadrants(tuple : [number, number]): number {
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