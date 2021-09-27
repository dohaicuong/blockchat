type MessageGroup = {
  authorId: string
  messages: string[]
}
export const parseMessagesToGroups = (messages: any) => {
  return (messages as any[]).reduce<MessageGroup[]>((total, { node: message }) => {
    const lastGroup = total[total.length - 1]
    const isNewGroup = !lastGroup || lastGroup.authorId !== message.authorId

    if(isNewGroup) {
      total.push({
        authorId: message.authorId,
        messages: [message.message]
      })
      return total
    }

    lastGroup.messages.push(message.message)
    return total
  }, [])
}