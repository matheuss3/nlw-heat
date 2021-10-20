import prisma from '../prisma'

class GetLast3MessagesService {
  async execute() {
    const messages = await prisma.message.findMany({
      take: 3,
      orderBy: {
        create_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages
  }
}

export { GetLast3MessagesService }
