/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    var SX = parseInt(inputs[0]);
    var SY = parseInt(inputs[1]);
    var action = 'HOLD';
    var tallestMHPosition = 0, temp = 0;
    
    for (var i = 0; i < 8; i++) {
        var MH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        
        if (MH > 0 && MH > temp) {
            temp = MH;
            tallestMHPosition = i;
        }
    }
    
    if (SX === tallestMHPosition) {
        action = 'FIRE';
    }
    
    print (action);
    // Write an action using print()
    // To debug: printErr('Debug messages...');

    
}