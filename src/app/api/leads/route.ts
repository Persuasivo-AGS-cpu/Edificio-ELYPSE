import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const { name, company, phone, email, comments, interest, capacity, urgency, budget, parking, score } = data;

    const API_KEY = process.env.TRELLO_API_KEY;
    const TOKEN = process.env.TRELLO_TOKEN;
    const LIST_ID = process.env.TRELLO_LIST_ID;

    const cardName = `${score ? `[${score}]` : ''} Lead: ${name} - ${company || 'Sin empresa'}`;
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
      console.log("Mocking Trello Creation. Missing API Keys. Card Data:", { cardName, cardDescription });
      return NextResponse.json({ success: true, mocked: true });
    }

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
    console.error("Error creating Lead in Trello:", error);
    return NextResponse.json({ error: "No se pudo procesar el lead" }, { status: 500 });
  }
}
