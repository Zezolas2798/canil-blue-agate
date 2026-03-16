import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, lifestyle, experience } = body;

    // Validate inputs
    if (!name || !email || !phone || !interest) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        interest,
        status: "NOVO",
        answers: JSON.stringify({ lifestyle, experience }),
      },
    });

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
