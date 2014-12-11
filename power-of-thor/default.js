/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var LX = parseInt(inputs[0]); // the X position of the light of power
var LY = parseInt(inputs[1]); // the Y position of the light of power
var TX = parseInt(inputs[2]); // Thor's starting X position
var TY = parseInt(inputs[3]); // Thor's starting Y position

var maxGridX = 39, maxGridY = 17;
//var nextTX = TX, nextTY = TY;
// game loop
var nextTX = TX, nextTY = TY;

var moveEast = function() {
    nextTX++;
    print('E');
};

var moveWest = function() {
    nextTX--;
    print('W');
};

var moveNorth = function() {
    nextTY--;
    print('N');
};

var moveNorthEast = function() {
    nextTY--;
    nextTX++;
    print('NE');
};

var moveNorthWest = function() {
    nextTY--;
    nextTX--;
    print('NW');
};

var moveSouth = function() {
    nextTY++;
    print('S');
};

var moveSouthEast = function() {
    nextTY++;
    nextTX++;
    print('SE');
};

var moveSouthWest = function() {
    nextTY++;
    nextTX--;
    print('SW');
};

var isBoundHit = function(x, y) {
    if (x === 0 || x === maxGridX || y === 0 || y === maxGridY ){
        return true;
    } else {
        return false;
    }
};

var getNextStep = function() {
    
    debug: printErr('Instruction', LX, LY, nextTX, nextTY);
    
    if (LY === nextTY) {
        if (LX > nextTX) {
            return 'E';
        } else {
            return 'W';
        }
    } else if (LX === nextTX) {
        if (LY > nextTY) {
            return 'S';
        } else {
            return 'N';
        }
    } else if (LX > nextTX) {
        if (LY > nextTY) {
            return 'SE';
        } else {
            return 'NE'
        }
        
    } else if (LX < nextTX) {
        if (LY > nextTY) {
            return 'SW';
        } else {
            return 'NW'
        }
    }
};

var step = getNextStep();

var moveNext = function(direction) {
    var nextStep = 'E';
    
    switch(direction) {
        case 'E':
            moveEast();
            break;
        
        case 'W':
            moveWest();
            break;
            
        case 'N':
            moveNorth();
            break;
            
        case 'S':
            moveSouth();
            break;
            
        case 'NW':
            moveNorthWest();
            break;
            
        case 'SW':
            moveSouthWest();
            break;
            
        case 'NE':
            moveNorthEast();
            break;
            
        case 'SE':
            moveSouthEast();
            break;
    }
    
    return getNextStep();
}

while (true) {
    var E = parseInt(readline()); // The level of Thor's remaining energy, representing the number of moves he can still make.
    step = moveNext(step);
}