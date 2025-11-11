"use server";

type SendWhatsAppArgs = {
  to: string;
  nome?: string;
  status?: string;
  obraNome?: string;
publicid?: string;
};


function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("55")) return digits;
  if (digits.length === 11 || digits.length === 10) return `55${digits}`;
  return digits;
}

export async function sendWhatsAppMessage({ to, nome, status, obraNome , publicid}: SendWhatsAppArgs) {
  try {
    const token = process.env.WHAPI_TOKEN;
    const base = process.env.WHAPI_BASE ?? "https://gate.whapi.cloud";
    if (!token) throw new Error("WHAPI_TOKEN não definido");

    const phone = normalizePhone(to);
    const appUrl =`${process.env.NEXT_PUBLIC_HOST_URL}/user/${publicid}` ;

    const texto = status
  ? `🟣 *TROCA TELAS E MUITO +* 🟣\n\n` +
    `📲 Acompanhe seu orçamento direto no celular: ${appUrl}\n\n` +
    `Olá${nome ? ` ${nome}` : ""}! 👋\n\n` +
    `${obraNome ? `📱 *Orçamento:* ${obraNome}\n` : ""}` +
    `O status do seu orçamento foi atualizado para *${(status ?? "").toUpperCase()}*.\n\n` +
    `💜 Agradecemos por escolher nossa assistência!`
  : `🟣 *TROCA TELAS E MUITO +* 🟣\n\n` +
    `Olá${nome ? ` ${nome}` : ""}! 👋\n\n` +
    `Seu orçamento foi *criado com sucesso!* 🥳\n\n` +
    `${obraNome ? `📱 *Serviço:* ${obraNome}\n` : ""}` +
    `💜 Nossa equipe já está analisando e logo entraremos em contato.\n\n` +
    `📲 Acompanhe tudo por aqui: ${appUrl}`;



    const res = await fetch(`${base}/messages/text`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ to: phone, body: texto }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Erro Whapi:", data);
      return { success: false, error: data };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Erro sendWhatsAppMessage:", err);
    return { success: false, error: String(err) };
  }
}
