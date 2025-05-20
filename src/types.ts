export type Agendamento = {
  paciente: string;
  especialidadeId: number;
  especialidadeNome: string;
  convenioId: number;
  convenioNome: string;
  dataHora: Date;
  medico: string;
};

export type Disponibilidade = {
  medico: string;
  especialidadeId: number;
  diaSemana: string;
  horaInicio: string;
  horaFim: string;
  duracaoConsultaMinutos: number;
};

export type Convenio = {
  id?: number;
  nome: string;
};

export type Especialidade = {
  id?: number;
  nome: string;
};

export type Opcoes = {
  id: number;
  name: string;
};
