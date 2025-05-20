import api from "./axios-config";

export async function listarConvenios() {
  const response = await api.get("/convenios");
  return response.data;
}

export async function cadastrarConvenio(nome: string) {
  const response = await api.post("/convenios", { nome });
  return response.data;
}
