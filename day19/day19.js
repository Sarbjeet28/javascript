// while loop 
let i = 0;
while (i <= 10) {
//    console.log(`${i}`);
   i++
}

// Do while loop
let score = 1;
do {
    // console.log(`${score}`);  
    score++ 
} while (score <= 10)

// filters function- used to filter values and fetch specific data
let array=[1,2,3,4,5]
let arr = array.filter((a) => a >3)                  
console.log(arr);

// filter example 2
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let mybook = books.filter((bk) => bk.genre === 'History')
console.log(mybook);

// && and || operation on filter queries
let mybook1= books.filter( (bk) => {                                 //If we write {} then we need to use return keyword.
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(mybook1);

// map function -using map function we can easily perform calculations
const a1= [1,2,3,4,5,6];
let b = a1.map( (num) => num - 1);
console.log("values of b", b);

// multiple map function
const a2 = [1,2,3,4,5,6];
let b1 = a2.map( (num) => num - 1).map((num) => num *2);
console.log("values of multiple map function ", b1);

// map and filter function
const a3 = [1,2,3,4,5,6];
let b2 = a3.map( (num) => num - 1)
            .map((num) => num *2)
            .filter((num) => num>6);
console.log("values of map and filter function ", b2);
