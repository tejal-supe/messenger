"use client"
import React, { useState } from "react";
import { FullConversationType } from "../types";
import { useRouter } from "next/navigation";

interface ConversationListProps{
    initialItems : FullConversationType[];
}
const ConversationList:React.FC<ConversationListProps> = ({initialItems}) => {
    const [items,setItems] = useState(initialItems);
    const router = useRouter();
  return (
    <div>ConversationList</div>
  )
}

export default ConversationList