/**
 * Formata uma data ISO (ex: "2025-05-12T09:00:00Z").
 * Exemplo de saída: "12 de maio de 2025, às 09:00"
 *
 * @param isoDate - Uma string no formato de data ISO (ex: "2025-05-12T09:00:00Z").
 * @returns Uma string com a data formatada em português, ou uma mensagem de erro se a entrada for inválida.
 */
export function formatarData(isoDate: string): string {
  if (!isoDate || typeof isoDate !== "string") {
    return "Data inválida";
  }

  const data = new Date(isoDate);

  if (isNaN(data.getTime())) {
    return "Data inválida";
  }

  const formatadorData = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formatadorHora = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });

  const dataFormatada = formatadorData.format(data);
  const horaFormatada = formatadorHora.format(data);

  return `${dataFormatada}, às ${horaFormatada}`;
}

export function getDiasSemana() {
  return [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
}
