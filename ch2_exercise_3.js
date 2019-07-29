/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

let grid = " "
for (let row = 1 ; row <= 8; row+=1) {
   
    for (let col = 1 ; col<=8; col+=1){
        if (col%2 == 0){
            grid+= "#"
        }else{
            grid+=" "
        }
    }

    if (row%2 == 0){
        grid+="\n "
    }else{
        grid+="\n"
    }
    
};

console.log(grid)


