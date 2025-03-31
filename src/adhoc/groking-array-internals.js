// node --watch groking-array-internals.js
let fib = [1,1,2,3,5,8,13,21,34]

/* Insight into how the various Array methods work
    Array methods typically take a callback function as the argument/parameter
    - forEach(callback)
    - find(callback)
    - push(value)  park(space, license)
    - pop()        leave(space)
 */

const ParkingLot = class {
    #size;
    #spaces = [];
    constructor(size) {
        this.#size = size;
        this.#spaces.length = size;
        this.#spaces.fill(null);
    }

    forEach(callback) {
        for(let i = 0; i < this.#size; i++) {
            let parkingStall = this.#spaces[i];
            callback(parkingStall, i, this.#spaces);
        }
    }

    /* Methods */
    find(license) {
        let stallNumber = 0;
        for(let i = 0; i < this.#size; i++) {
            let stall = this.#spaces[i];
            if(stall === license) {
                stallNumber = i + 1;
            }
        }
        return stallNumber;
    }

    park(stallNumber, licenseNumber) {
        if(this.#spaces[stallNumber - 1]) {
            return -1;
        }
        this.#spaces[stallNumber - 1] = licenseNumber;
        return this.emptyCount;
    } // end of .park()

    get emptyCount() {
        let empty = this.#spaces.filter(spot => spot == null);
        return empty.length;
    }

    leave(stallNumber) {
        this.#spaces[stallNumber - 1] = null;
    }
} // end of ParkingLot class

let parkade = new ParkingLot(5);
let free = parkade.emptyCount;
console.log(`\t${free} empty spaces`);
parkade.park(1, 'CGI 234');
free = parkade.park(4, 'ABC 123');

console.log('10 AM Check');
parkade.forEach(report);
console.log(`\t${free} empty spaces`);
parkade.leave(4);
console.log('\n2 PM Check');
parkade.forEach(report);
function report(item, index) {
    let license = item ?? '<empty>';
    console.log(`Stall # ${index + 1}: ${license}`);
}

// console.log(fib);
// fib.length = 12;
// console.log(fib);
// fib.length = 3; // resizing to a small size
// console.log(fib);
// fib.length = 20;
// console.log(fib);