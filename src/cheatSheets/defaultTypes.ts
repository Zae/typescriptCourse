
// Booleans
let boolean: boolean = true

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";

// Arays
let list: number[] = [1, 2, 3];
// tslint:disable-next-line: prefer-array-literal
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number]= ["hello", 10]; 


// enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// void
function warnUser(): void {
  console.log("This is my warning message");
}

// null and undefined
let u: undefined = undefined;
let n: null = null;


// Never
function error(message: string): never {
  throw new Error(message);
}


// Object
declare function create(o: object | null): void;
create({ prop: 0 }); 
create(null); 