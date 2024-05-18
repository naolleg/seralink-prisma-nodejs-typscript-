import { object, string } from 'zod';

const userschema = {
  post: object({
    firstname: string(),
    lastname: string(),
    password: string().min(6),
    email: string(),
    role: string(),
    Image: string()
  })
};

export default userschema;