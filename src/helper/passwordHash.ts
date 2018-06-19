import { createHash } from 'crypto';
const mysalt = "fastcampus";

export default function(password){
    return createHash('sha512').update( password + mysalt).digest('base64');
};