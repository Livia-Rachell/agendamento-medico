import api from "./axios-config";

export async function listarEspecialidades() {
  const response = await api.get("/especialidades");
  return response.data;
}

export async function cadastrarEspecialidade(nome: string) {
  const response = await api.post("/especialidades", { nome });
  return response.data;
}
