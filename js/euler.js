// PROJECT EULER 

// QUESTION 1 

// for (var mult3 = 0, mult5 = 0, n = 0; n < 1000; n += 1) {
// 	if (n % 3 === 0) {
// 		mult3 = mult3 + n;
// 	} 
// 	else if (n % 5 === 0) {
// 		mult5 = mult5 + n;
// 	}
// } 

// console.log(mult3 + mult5);


// QUESTION 2

// for (var n1 = 1, n2 = 2, total = 0; n2 < 4000000; ) {
// 	if (n2 % 2 === 0) {
// 		total = total + n2
// 	}
// 	n2 = [n1, n1 = n2][0]; //swap the values of n1 and n2
// 	n2 = n2 + n1;
// }

// console.log(total);


// QUESTION 3

var isEven = function(n) {
    return (n % 2 === 0);
}

// var isPrime = function(n) {
//     if (isEven(n)) {
//          return n === 2;
//     } else {
//         for (i = 3; i <= (n/2) + 1;) {
//             if (n % i === 0) {
//                 return false;   
//             } else {
//                 i = i + 2;
//             }
//         } return true;
//     } return true;
// }

function range(i){
    return i ? range(i - 1).concat(i) : []
}

var isPrime = function(n) {
    if (n === 2) return true;
    if (!(n % 2)) {
        return false;
    } else {
        var numbers = range((~~Math.pow(n, 0.5)) + 1);
        console.log(numbers)
        numbers.shift();
        numbers.shift();
        console.log(numbers)
            debugger
        for (var i=0;i<numbers.length; i++) {
            if (n%numbers[i]===0) {
                return false;
            } else {
                // remove all multiples
                for (var j=0; j<numbers.length; j++) {
                    if ((~~(numbers[j] / numbers[i])) === numbers[j] / numbers[i]) {
                        numbers.splice(j, 1);
                    }
                }
            }
        }
        console.log(numbers);
        return true
    }
}

function otherIsPrime(n) {
    if (n%2===0) return n===2;
    
    var upperLimit = (~~Math.pow(n, 0.5) + 1);
    for (var i=3;i<=upperLimit; i += 2) {
        if (n%i===0) return false
    }
    return true
}


function largestPrimeFactor(n) {
    factors = [];
    for (var i = 2; i <= ~~(Math.pow(n,0.5) + 1); i++) {
        if (n%i===0 && otherIsPrime(i)) {
            factors.push(i);
            if (factors.indexOf( n / i ) === -1 && otherIsPrime(n / i)) {
                factors.push(n/i);
            }
        }

    }
    console.log(factors);
    if (factors.length===0) {
        return n;
    }
    return Math.max.apply(null, factors)
}

function checkThisOut(a,b) {
    console.log(a + b);
    return this;
}

// function fact(n) {
//     if (n < 2) {
//         return 1
//     }
//     return n * fact(n - 1);
// }


var primeFactors = function (n) {
    for (var primes = [], i = 2; i <= (n/2)+1; i++) {
        if (isPrime(i)) {
            if (n % i === 0) {
                primes.push(i);
            }
        } 
    } return primes;
}


var primeFinder = function () {

}


// Q4 - largest palindrime product of two 3 digit numbers

function biggestPal() {
    var choices = [];
    for (var i = 100; i <= 999; i++) {
        for (j=100; j<=999; j++) {
            var candidate = i*j;
            if (choices.indexOf(candidate) === -1) {
                var numString = (candidate).toString();
                var back = numString.split('');
                back.reverse();
                back = back.join('');
                if (back === numString) {
                    choices.push(candidate)
                }
        }

    } }

    console.log(choices)
    return Math.max.apply(this, choices)
    

}


