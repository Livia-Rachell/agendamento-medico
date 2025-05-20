import { useEffect, useState } from "react";

import FormAgendamento from "../components/FormAgendamento";
import Modal from "../components/Modal";
import TableAgendamentos from "../components/TableAgendamentos";
import { listarAgendamentos } from "../services/agendamentos";
import { useModal } from "../hooks/useModal";

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const { close } = useModal();

  function fetchData() {
    listarAgendamentos().then((res) => {
      setAgendamentos(res);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function onSuccess() {
    fetchData();
    close("modal_1");
  }
  return (
    <div className="container flex flex-col gap-y-6">
      <div className="flex flex-row">
        <h1 className="text-2xl font-medium w-full">Agendamentos</h1>
        <Modal
          buttonName="Agendar"
          title="Agendar"
          children={<FormAgendamento onSuccess={onSuccess} />}
        />
      </div>

      <TableAgendamentos agendamentos={agendamentos} />
    </div>
  );
}
