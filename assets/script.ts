let isComplated: boolean = false;

const decimal: number = 6;
const integer: number = 1.5;

const text: string = 'text';

const u: undefined = undefined;
const n: null = null;

const greatUser = (): void => {
    console.log('Hello, nice to see you!');
};

greatUser();


/**
 * Array
 */


 let list: number[] = [1,2,3];
 let x: [String, number];
 x = ['Hello', 10]
 let y: [any, any] = ['hello', 12];
 let z: Array<any> = [10, 'hello'];

 let notSure: any = true;


 /**
  * Enum
  */

 enum Directions {
     Up = 2,
     Down = 4,
     Left = 6,
     Right
 }

 Directions.Up;     //2
 Directions.Down;   //4
 Directions.Left;   //6
 Directions.Right;  //7 ?????????????

 Directions.Up;
 Directions.Down;
 Directions[6];

 enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
 }

 links.vk;
 links.facebook;


 /**
  * Never (never return result)
  * 
  */

 //Function return Error
 const msg = 'hello';
 const error = (msg: string): never => {
     throw new Error(msg)
 }

 //Funtions loop
 const infiniteLoop = ():never => {
     while (true){
     }
 }

 /**
  * Objects
  */

const create = (o: object | null):void => { console.log('Hello')}

/**
 * Type
 */

type Name = string;
let id: Name;

id = "42";


/**
 * Function
 */
const  createPassword = (name:string  = 'Max', age: number | string = 20) => `${name} - ${age}`;
const  createPassword2 = (name:string, age?: number | string) => `${name} - ${age}`;

createPassword('Rus', 33);
createPassword('Rus', '33');

const createSkills = ( name: string, ...skills: Array<string>) => `${name}, my skils are ${skills.join()}`;
createSkills('React', 'NextJS',  'ES5', 'ES6');


//Result

const  createPass = (name:string  = 'Max', age: number | string = 20):string => `${name}${age}`;
const  sum = (a:number, b: number):number => a + b;
const  createEmptyObject = ():object => ({});

let myFunc: (firstArg: string) => void ;

function oldFunc(name: string): void {console.log('Hello')}

myFunc = oldFunc;


/**
 * Object types
 */
type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
}

let user: Person = {
    name: 'Rus',
    age: 33,
    nickName: 'rusl'
}

let admin: Person = {
    name: 'Ruslan',
    age: 33,
    getPass(): string { return this.name }
}

/**
 * Classes
 */

class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string){
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}
const ruslan = new User( 'RUslan', 33, 'rusl');