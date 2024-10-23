function isBalanced(root: TreeNode | null): boolean {
     function height(node: TreeNode | null): number {
         if (!node) {
             return 0; // The height of an empty tree is 0
         }
 
         const leftHeight = height(node.left);
         const rightHeight = height(node.right);

         if (leftHeight === -1) return -1;
         
         if (rightHeight === -1) return -1;
 
         if (Math.abs(leftHeight - rightHeight) > 1) {
             return -1;
         }

         return Math.max(leftHeight, rightHeight) + 1;
     }
     return height(root) !== -1;
 }
 