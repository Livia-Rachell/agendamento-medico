import FormAgendamento from "../components/FormAgendamento";
import Modal from "../components/Modal";
import TableAgendamentos from "../components/TableAgendamentos";

export default function Agendamentos() {
  return (
    <div className="container flex flex-col gap-y-6">
      <div className="flex flex-row">
        <h1 className="text-2xl font-medium w-full">Agendamentos</h1>
        <Modal
          buttonName="Agendar"
          title="Agendar"
          children={<FormAgendamento />}
        />
      </div>

      <TableAgendamentos
        agendamentos={[
          {
            id: 1,
            paciente: "Nome do Paciente",
            especialidadeId: 1,
            especialidadeNome: "Cardiologia",
            convenioId: 1,
            convenioNome: "Unimed",
            dataHora: "2025-05-12T09:00:00Z",
            medico: "Nome do Médico",
          },
          {
            id: 1,
            paciente: "Nome do Paciente",
            especialidadeId: 1,
            especialidadeNome: "Cardiologia",
            convenioId: 1,
            convenioNome: "Unimed",
            dataHora: "2025-05-12T09:00:00Z",
            medico: "Nome do Médico",
          },
          {
            id: 1,
            paciente: "Nome do Paciente",
            especialidadeId: 1,
            especialidadeNome: "Cardiologia",
            convenioId: 1,
            convenioNome: "Unimed",
            dataHora: "2025-05-12T09:00:00Z",
            medico: "Nome do Médico",
          },
          {
            id: 1,
            paciente: "Nome do Paciente",
            especialidadeId: 1,
            especialidadeNome: "Cardiologia",
            convenioId: 1,
            convenioNome: "Unimed",
            dataHora: "2025-05-12T09:00:00Z",
            medico: "Nome do Médico",
          },
        ]}
      />
    </div>
  );
}
