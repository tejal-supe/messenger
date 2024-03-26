import prisma from "../libs/prismaDb"
import getCurrentUser from "./getCurrentUser"

const getConversations = async()=>{
    const cuurentUser = await getCurrentUser();

    if(!cuurentUser?.id){
        return [];
    }
    try{
        const conversations = await prisma.conversation.findMany({
            orderBy:{
                lastMessageAt:'desc'
            },
            where:{
                userIds:{
                    has:cuurentUser.id
                }
            },
            include:{
                users:true,
                messages:{
                    include:{
                        sender:true,
                        seen:true
                    }
                }
            }
        })
        return conversations
    }catch(error:any){
        return [];
    }
}

export default getConversations;