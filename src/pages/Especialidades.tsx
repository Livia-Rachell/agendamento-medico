import { useEffect, useState } from "react";

import FormEspecialidade from "../components/FormEspecialidade";
import Modal from "../components/Modal";
import TableNome from "../components/TableNome";
import { listarEspecialidades } from "../services/especialidades";
import { useModal } from "../hooks/useModal";

export default function Especialidades() {
  const [especialidades, setEspecialidades] = useState([]);
  const { close } = useModal();

  function fetchData() {
    listarEspecialidades().then((res) => {
      setEspecialidades(res);
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
        <h1 className="text-2xl font-medium w-full">Especialidades</h1>
        <Modal
          buttonName="Especialidade"
          title="Adicionar Especialidade"
          children={<FormEspecialidade onSuccess={onSuccess} />}
        />
      </div>
      <TableNome items={especialidades} />
    </div>
  );
}
