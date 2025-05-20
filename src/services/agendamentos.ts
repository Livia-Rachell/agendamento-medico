import api from "./axios-config";

export async function listarAgendamentos(params?: {
  dataInicio?: string;
  dataFim?: string;
  paciente?: string;
}) {
  const response = await api.get("/agendamentos", { params });
  return response.data;
}

export async function agendarConsulta(payload: {
  paciente: string;
  especialidadeId: number;
  convenioId: number;
  dataHora: string;
}) {
  const response = await api.post("/agendamentos", payload);
  return response.data;
}
