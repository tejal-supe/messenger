import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "../../libs/prismaDb";
// Shlok@2024
export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const { userId, isGroup, members, name } = body;
        
        if (!currentUser?.id || !currentUser.email) {
            return new NextResponse('Unauthorized',{status:401})
        }
        if (isGroup && (!members || members.length < 2 || !name)) {
            return new NextResponse("Inavlid data", { status: 400 });
        }
        if (isGroup) {
            const newConvo = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({ id: member.value })),
                            {
                                id:currentUser.id
                            }
                        ]
                    }
                }, include: {
                    users:true
                }
            })

            return NextResponse.json(newConvo)
        }

        const existingConvos = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals:[currentUser.id,userId]
                        }
                    }, {
                        userIds: {
                            equals:[userId,currentUser.id]
                        }
                    }
                ]
            }
        })

        const singleConvo = existingConvos[0];
        if (singleConvo) {
            return NextResponse.json(singleConvo);
        }

        const newConvo = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        { id: currentUser.id },
                        {id:userId}
                    ]
                }
            }, include: {
                users:true
            }
        })
        return NextResponse.json(newConvo);
    } catch (error : any) {
        return new NextResponse('Internal Error',{status:500})
    }
}
