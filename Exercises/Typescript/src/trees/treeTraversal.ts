// this is the depth-first search approach with recursion

function maxDepth(root: TreeNode | null): number {

     if(!root) return 0;
     const leftDepht : number = maxDepth(root.left);
     const rightDepht : number = maxDepth(root.right);
 
    return Math.max(leftDepht, rightDepht) +1 ;
 };



// breadt first search
function maxDepth(root: TreeNode | null) : number {
    
     let counter = 0
     const q : TreeNode [] = [root]

     while (q){

          let length = q.length;
          for(let x = 0; x < length; x++){
               let node = q.shift() // remove from the  front
               if(node.left) q.push(node.left); // add to the back 
               if(node.right) q.push(node.right);
          }

          counter  +=1;

     }

     return counter;
}