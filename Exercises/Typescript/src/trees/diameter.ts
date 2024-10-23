function diameterOfBinaryTree(root: TreeNode | null): number {

     let res = 0;

     function dfs(root : TreeNode) : number{
          if(!root) return 0;

          const leftDepth = dfs(root.left);
          const rightDepth = dfs(root.right);

          res = Math.max(res, leftDepth, rightDepth);

          return 1 + Math.max(leftDepth, rightDepth);
     }(root);

     return res;


}