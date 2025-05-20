import type { Disponibilidade } from "../types";
import type { DisponibilidadeFilterForm } from "../pages/Disponibilidades";
import api from "./axios-config";

export async function definirDisponibilidade(payload: Disponibilidade) {
  const response = await api.post("/disponibilidades/definir", payload);
  return response.data;
}

export async function listarDisponibilidades(
  payload?: DisponibilidadeFilterForm
) {
  const response = await api.post("/disponibilidades", payload);
  return response.data;
}
