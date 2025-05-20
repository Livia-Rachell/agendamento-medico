import { useEffect, useState } from "react";

import FormConvenio from "../components/FormConvenio";
import Modal from "../components/Modal";
import TableNome from "../components/TableNome";
import { listarConvenios } from "../services/convenios";
import { useModal } from "../hooks/useModal";

export default function Convenios() {
  const [convenios, setConvenios] = useState([]);
  const { close } = useModal();

  function fetchData() {
    listarConvenios().then((res) => {
      setConvenios(res);
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
        <h1 className="text-2xl font-medium w-full">Convênios</h1>
        <Modal
          buttonName="Convênio"
          title="Adicionar Convênio"
          children={<FormConvenio onSuccess={onSuccess} />}
        />
      </div>
      <TableNome items={convenios} />
    </div>
  );
}
