import { Pencil, Trash2 } from "lucide-react";

import type { Agendamentos } from "../types";
import { formatarData } from "../utils";

interface TableAgendamentosProps {
  agendamentos: Agendamentos[];
}

export default function TableAgendamentos({
  agendamentos,
}: TableAgendamentosProps) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/2 ">
      <table className="table">
        {/* head */}
        <thead className="bg-base-300">
          <tr>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Convênio</th>
            <th>Data/Hora</th>
            <th className="min-w-10">Ações</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos?.map((agendamento) => (
            <tr>
              <td>{agendamento.paciente}</td>
              <td>
                {agendamento.medico}
                <br />
                <span className="badge badge-outline badge-sm badge-neutral">
                  {agendamento.especialidadeNome}
                </span>
              </td>
              <td>{agendamento.convenioNome}</td>
              <td>{formatarData(agendamento.dataHora.toString())}</td>
              <td className="min-w-10">
                <button
                  className="btn btn-ghost btn-sm "
                  // onClick={() => {
                  //   navigate(`/agendamentos/${agendamentos.id}`);
                  // }}
                >
                  <Pencil size={16} color="#0796CA" />
                </button>
                <button
                  className="btn btn-ghost btn-sm"
                  // onClick={() => {
                  //   navigate(`/agendamentos/${agendamentos.id}`);
                  // }}
                >
                  <Trash2 size={16} color="#FF6266" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
