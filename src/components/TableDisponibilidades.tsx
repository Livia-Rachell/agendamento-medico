import type { Disponibilidade } from "../types";

interface TableDisponibilidadesProps {
  items?: Disponibilidade[];
}

export default function TableDisponibilidades({
  items,
}: TableDisponibilidadesProps) {
  if (!items) {
    return <>Aplique os filtros para buscar por disponibilidades</>;
  }

  if (items.length === 0) {
    return <>Não foram encontradas disponibilidades para o filtro aplicado</>;
  }
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/2 ">
      <table className="table">
        {/* head */}
        <thead className="bg-base-300">
          <tr>
            <th>Médico</th>
            <th>Dia da Semana</th>
            <th>Horário de Atendimento</th>
            <th>Duração da Consulta</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((disponibilidade) => (
            <tr>
              <td>{disponibilidade.medico}</td>
              <td>{disponibilidade.diaSemana}</td>
              <td>{`${disponibilidade.horaInicio} às ${disponibilidade.horaFim}`}</td>
              <td>{`${disponibilidade.duracaoConsultaMinutos} minutos`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
