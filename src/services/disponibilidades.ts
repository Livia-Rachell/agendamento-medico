import api from "./axios-config";

export async function definirDisponibilidade(payload: {
  medico: string;
  especialidadeId: number;
  diaSemana: string;
  horaInicio: string;
  horaFim: string;
  duracaoConsultaMinutos: number;
}) {
  const response = await api.post("/disponibilidades/definir", payload);
  return response.data;
}

export async function listarDisponibilidades(payload: {
  especialidadeId: number;
  data: string;
  medico?: string;
}) {
  const response = await api.post("/disponibilidades", payload);
  return response.data;
}
