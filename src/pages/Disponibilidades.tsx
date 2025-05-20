import DisponibilidadeFilter from "../components/DisponibilidadeFilter";
import FormDisponibilidade from "../components/FormDisponibilidade";
import Modal from "../components/Modal";
import TableDisponibilidades from "../components/TableDisponibilidades";
import { listarDisponibilidades } from "../services/disponibilidades";
import { useModal } from "../hooks/useModal";
import { useState } from "react";

export interface DisponibilidadeFilterForm {
  especialidadeId: number;
  medico?: string;
  data: Date;
}

export default function Disponibilidades() {
  const { close } = useModal();
  const [disponibilidades, setDisponibilidades] = useState();

  function fetchData(filters?: DisponibilidadeFilterForm) {
    listarDisponibilidades(filters).then((res) => {
      setDisponibilidades(res);
    });
  }

  function onSuccess() {
    fetchData();
    close("modal_1");
  }

  function handleSubmit(data: DisponibilidadeFilterForm) {
    fetchData(data);
  }

  return (
    <div className="container flex flex-col gap-y-6">
      <div className="flex flex-row">
        <h1 className="text-2xl font-medium w-full">
          Buscar por disponibilidades
        </h1>
        <Modal
          buttonName="Disponibilidade"
          title="Nova Disponibilidade"
          children={<FormDisponibilidade onSuccess={onSuccess} />}
        />
      </div>
      <DisponibilidadeFilter onSubmit={handleSubmit} />
      <TableDisponibilidades items={disponibilidades} />
    </div>
  );
}
