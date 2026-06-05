import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendTelegramNotification } from "@/lib/notify";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, content, location, preferredAt, agreed } = body;

    if (!phone?.trim() || !content?.trim() || !location?.trim()) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 },
      );
    }

    if (!agreed) {
      return NextResponse.json(
        { error: "개인정보 수집에 동의해 주세요." },
        { status: 400 },
      );
    }

    const order = await prisma.order.create({
      data: {
        name: "미입력",
        phone: phone.trim(),
        serviceType: "문의",
        content: content.trim(),
        location: location.trim(),
        preferredAt: preferredAt?.trim() || null,
        memo: null,
      },
    });

    await sendTelegramNotification(order);

    return NextResponse.json({ success: true, id: order.id });
  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json(
      { error: "문의 처리 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
