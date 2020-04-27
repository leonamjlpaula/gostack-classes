
interface TechObject{
  title: string;
  experience: number;
}


interface User{
  name?: string,
  email: string;
  password: string;
  techs: Array<string | TechObject>; // string[]
}

// export default function createUser(name = '', email: string, password: string) {

export default function createUser({name = '', email, password}: User) {
  const user = {
    name, email, password,
  }

  return user;
}