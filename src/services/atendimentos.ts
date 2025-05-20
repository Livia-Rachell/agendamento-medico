import api from "./axios-config";

export async function listarAtendimentos(params?: {
  dataInicio?: string;
  dataFim?: string;
  paciente?: string;
}) {
  const response = await api.get("/atendimentos", { params });
  return response.data;
}

export async function gerarAtendimento(payload: {
  agendamentoId: number;
  observacoes?: string;
}) {
  const response = await api.post("/atendimentos", payload);
  return response.data;
}
