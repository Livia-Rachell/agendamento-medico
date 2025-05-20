import React, { useEffect, useState } from "react";

import { DayPicker } from "react-day-picker";
import type { DisponibilidadeFilterForm } from "../pages/Disponibilidades";
import type { Especialidade } from "../types";
import { listarEspecialidades } from "../services/especialidades";

interface DisponibilidadeFilterProps {
  onSubmit: (data: DisponibilidadeFilterForm) => void;
}

export default function DisponibilidadeFilter({
  onSubmit,
}: DisponibilidadeFilterProps) {
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
  const [date, setDate] = useState<Date>();
  const [especialidadeId, setEspecialidadeId] = useState<number>(0);
  const [medico, setMedico] = useState<string>("");

  function fetchEspecialidades() {
    listarEspecialidades().then((res) => {
      setEspecialidades(res);
    });
  }

  useEffect(() => {
    fetchEspecialidades();
  }, []);

  return (
    <div className="flex flex-row gap-3">
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Especialidade</legend>
        <select
          defaultValue="Pick a browser"
          className="select w-full"
          onChange={(e) => setEspecialidadeId(Number(e.target.value))}
          required
        >
          <option disabled={false}>Selecione uma das especialidades</option>
          {especialidades?.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nome}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Médico</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Digite o nome do médico"
          onChange={(e) => setMedico(e.target.value)}
        />
      </fieldset>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Data</legend>
        <button
          popoverTarget="rdp-popover"
          className="input input-border w-full "
          style={{ anchorName: "--rdp" } as React.CSSProperties}
        >
          {date ? date.toLocaleDateString() : "Escolha uma data"}
        </button>
        <div
          popover="auto"
          id="rdp-popover"
          className="dropdown"
          style={{ positionAnchor: "--rdp" } as React.CSSProperties}
        >
          <DayPicker
            className="react-day-picker"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-info m-1 self-end"
        onClick={() => onSubmit({ especialidadeId, medico, data: date })}
      >
        Buscar
      </button>
    </div>
  );
}
