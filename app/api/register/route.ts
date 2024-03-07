import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from '../../libs/prismaDb'


export async function POST(request:Request){
try{

    const body = await request.json();
    const {
        name,
        email,
        password
    } = body;
    console.log(email,name,password,'inside roiter')
    if(!email || !password || !name){
        return new NextResponse('Missing info',{status:400});
    }
    
    const encryptedPass = await bcrypt.hash(password,10);
    
    const users = await prisma.user.create({
        data:{
            name,
            email,
            password:encryptedPass
        }
    });
    return NextResponse.json(users)
}
catch(error:any){
    console.log(error,'REGISTER')
    return new NextResponse('Internal Error',{status:500})
}
}