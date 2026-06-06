import { siteConfig } from "@/lib/site";

type OrderNotification = {
  name: string;
  phone: string;
  serviceType: string;
  content: string;
  location: string;
  preferredAt?: string | null;
  memo?: string | null;
};

export async function sendTelegramNotification(order: OrderNotification) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram credentials missing; skipping notification.");
    return false;
  }

  const text = [
    `[${siteConfig.name} 신규 문의]`,
    "",
    `연락처 : ${order.phone}`,
    "",
    `내용 : ${order.content}`,
    "",
    `지역/주소 : ${order.location}`,
    "",
    `희망시간 : ${order.preferredAt || "미지정"}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Telegram notification failed:", error);
    return false;
  }

  return true;
}
