// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client' // ✅ Correct import
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, budget, message } = body

    const contact = await prisma.contactRequest.create({
      data: { name, email, phone, budget, message }
    })

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    return NextResponse.json(
      { error: 'Database operation failed' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
