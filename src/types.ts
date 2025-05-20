export type Agendamentos = {
  id: number;
  paciente: string;
  especialidadeId: number;
  especialidadeNome: string;
  convenioId: number;
  convenioNome: string;
  dataHora: Date;
  medico: string;
};

export type Opcoes = {
  id: number;
  name: string;
};
