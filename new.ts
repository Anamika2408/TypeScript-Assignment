
/*
Question 1. Define an interface User with the following properties: 
id(number), name(string), email(string), age(number optional)
*/

interface User{
    id:number;
    name:string;
    email:string;
    age?:number;  
  }

  const user1:User={
    id:1,
    name:"Anamika Sharma",
    email:"anamika.sharma@example.com",
    age:23  
  };
  
  const user2:User={
    id:2,
    name:"Aniket Sharma",
    email:"aniket.sharma@example.com"
    age:18
  };

console.log(user1);
console.log(user2);

/*
Question 2. Create a class UserManager with:
A private array users: User[] to store user data.
A method addUser(user: User): void that adds a new user.
A method removeUser(id: number): void that removes a user by ID.
A method getUser(id: number): User | undefined that retrieves a user by ID.
A method getAllUsers(): User[] that returns all users.
*/

 Define the User class directly
 class User{
  constructor(
    public id: number,
    public name: string,
    public email: string
  ){}
}

class UserManager{
  private users:User[]=[];
  addUser(user:User):void{
    this.users.push(user);
  }
  removeUser(id:number):void{
    this.users=this.users.filter(user=>user.id!==id);
  }
  getUser(id:number):User|undefined{
    return this.users.find(user=>user.id===id);
  }  
  getAllUsers():User[]{
    return this.users;
  }
}
const userManager=new UserManager();
userManager.addUser(new User(1,'Anamika Sharma','anamika@example.com'));
userManager.addUser(new User(2,'Aniket Sharma','aniket@example.com'));
console.log(userManager.getAllUsers()); 
userManager.removeUser(1); 
console.log(userManager.getAllUsers()); 

/*
Question 3. Use Arrow Functions & Default Parameters
Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
*/

class UserManager {
  getUser = (name: string = "Guest"): string => {
    return `Hello, ${name}! Welcome to TTN`;
  };
}
const userManager = new UserManager();
console.log(userManager.getUser());  
console.log(userManager.getUser("Anamika"));  

/*
Question 4. Use Destructuring & Spread Operator
Create a function printUserDetails(user: User): void that logs user details using object destructuring.
*/

class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

function printUserDetails({ id, name, email }: User): void {
  console.log(`User ID: ${id}`);
  console.log(`User Name: ${name}`);
  console.log(`User Email: ${email}`);
}

const user1 = new User(1, 'Anamika Sharma', 'anamika@sharma.com');
const user2 = new User(2, 'Aniket Sharma', 'aniket@sharma.com');

printUserDetails(user1);
printUserDetails(user2);

function printUserWithAdditionalDetails(user: User): void {
  const additionalInfo = { ...user, role: 'Admin' };
  console.log(additionalInfo);
}

const user3 = new User(3, 'Swati Sharma', 'swati@sharma.com');
printUserWithAdditionalDetails(user3);
