import { PrismaClient } from '@/app/generated/prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

const _prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = _prisma

export default _prisma;