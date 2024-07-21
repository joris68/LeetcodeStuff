function dailyTemperatures(temperatures: number[]): number[] {
   const  stack : number[] = [];
   const result : number[] = [];

   for (let i = 0; i< temperatures.length; i++){
        let running : boolean = true;
        const element = temperatures[i];
        let counter = i +1;
        stack.push(1);
        while (running) {
            if(temperatures[counter] <= element ) {
                counter++;
                stack.push(1)
                continue;
            }
            running = false;
            result.push(stack.length);
            stack.length = 0;   
        }
   }

   return result;

};


