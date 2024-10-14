

/*
 * Complete the 'findPoint' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER px
 *  2. INTEGER py
 *  3. INTEGER qx
 *  4. INTEGER qy
 */

function findPoint(px: number, py: number, qx: number, qy: number): number[] {
    // Write your code here
    // edge case, same points:
    if (px === qx && py === qy){
        return [px, py];
    }
    
    const newPoint : number [] = [];
    
    const diffX = qx - px;
    const diffY = qy - py; 
    
    const newX = px + 2 * diffX;
    const newY = py + 2 * diffY;
    
    newPoint[0] = newX;
    newPoint[1] = newY;
    
    return newPoint;

}


