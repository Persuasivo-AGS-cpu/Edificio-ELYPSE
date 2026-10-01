import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmed(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  const body = data as Record<string, unknown>;

  // Honeypot: los formularios lo envían vacío. Si viene lleno, no se guarda.
  const honeypot = body.website;
  if (honeypot != null && String(honeypot).trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const name = asTrimmed(body.name);
  const email = asTrimmed(body.email);
  const phone = asTrimmed(body.phone);
  const company = asTrimmed(body.company);
  const phoneDigits = phone.replace(/\D/g, '');

  if (
    name.length < 2 ||
    name.length > 120 ||
    email.length > 254 ||
    !EMAIL_RE.test(email) ||
    phone.length > 30 ||
    phoneDigits.length < 8 ||
    phoneDigits.length > 15 ||
    company.length < 1 ||
    company.length > 120
  ) {
    return NextResponse.json(
      { error: 'Revisa nombre, correo, teléfono y empresa.' },
      { status: 400 }
    );
  }

  const interest = asTrimmed(body.interest).slice(0, 200);
  const capacity = asTrimmed(body.capacity).slice(0, 200);
  const urgency = asTrimmed(body.urgency).slice(0, 200);
  const budget = asTrimmed(body.budget).slice(0, 200);
  const parking = asTrimmed(body.parking).slice(0, 200);
  const comments = asTrimmed(body.comments).slice(0, 2000);
  const score = asTrimmed(body.score).slice(0, 20);

  const API_KEY = process.env.TRELLO_API_KEY;
  const TOKEN = process.env.TRELLO_TOKEN;
  const LIST_ID = process.env.TRELLO_LIST_ID;

  const cardName = `${score ? `[${score}] ` : ''}Lead: ${name} - ${company}`;
  const cardDescription = `
**Información de Contacto**
- **Nombre:** ${name}
- **Empresa:** ${company}
- **Teléfono:** ${phone}
- **Correo:** ${email}

**Perfilamiento (Wizard)**
- **Interés Principal:** ${interest}
- **Capacidad:** ${capacity}
- **Urgencia:** ${urgency}
- **Presupuesto:** ${budget}
- **Estacionamiento:** ${parking}
- **Lead Score:** ${score}

**Comentarios Adicionales**
${comments || 'Sin comentarios'}

_Fuente: Landing Page Edificio Elypse_
_Fecha: ${new Date().toLocaleString('es-MX')}_
  `.trim();

  if (!API_KEY || !TOKEN || !LIST_ID) {
    console.log('Mocking Trello creation: missing API keys.');
    return NextResponse.json({ success: true, mocked: true });
  }

  try {
    const url = new URL('https://api.trello.com/1/cards');
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('token', TOKEN);
    url.searchParams.append('idList', LIST_ID);
    url.searchParams.append('name', cardName);
    url.searchParams.append('desc', cardDescription);
    url.searchParams.append('pos', 'top');
    url.searchParams.append('idLabels', '692e58c4412d7d0ac3d74774'); // Label Azul "Frio"

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error en Trello API: ${response.statusText}`);
    }

    const trelloData = await response.json();

    return NextResponse.json({ success: true, id: trelloData.id });
  } catch (error) {
    console.error('Error creating Lead in Trello:', error instanceof Error ? error.message : 'unknown');
    return NextResponse.json({ error: 'No se pudo procesar el lead' }, { status: 500 });
  }
}
