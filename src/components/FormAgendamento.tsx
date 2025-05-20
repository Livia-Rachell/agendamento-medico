import * as yup from "yup";

import type { Convenio, Especialidade } from "../types";
import { useEffect, useState } from "react";

import { DayPicker } from "react-day-picker";
import { listarConvenios } from "../services/convenios";
import { listarEspecialidades } from "../services/especialidades";
import { useForm, type FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { agendarConsulta } from "../services/agendamentos";

export const schema = yup.object({
  paciente: yup.string().required("O nome do paciente é obrigatório"),
  especialidadeId: yup
    .number()
    .typeError("Especialidade obrigatória")
    .required("Especialidade obrigatória"),
  convenioId: yup
    .number()
    .typeError("Convênio obrigatório")
    .required("Convênio obrigatório"),
  data: yup
    .date()
    .typeError("Data inválida ou não informada")
    .required("A data é obrigatória"),
  medico: yup.string().required("O nome do médico é obrigatório"),
});

interface FormAgendamentoProps {
  onSuccess: () => void;
}

export default function FormAgendamento({ onSuccess }: FormAgendamentoProps) {
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
  const [convenios, setConvenios] = useState<Convenio[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dataSelecionada = watch("data");

  useEffect(() => {
    listarConvenios().then(setConvenios);
    listarEspecialidades().then(setEspecialidades);
  }, []);

  const onSubmit = (formData: FieldValues) => {
    agendarConsulta(formData).then(() => {
      onSuccess();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-4">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nome do Paciente</legend>
        <input
          className="input w-full"
          placeholder="Digite o nome do paciente"
          {...register("paciente")}
        />
        {errors.paciente && (
          <p className="text-red-500 text-sm mt-1">{errors.paciente.message}</p>
        )}
      </fieldset>

      <div className="flex gap-4">
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend">Especialidade</legend>
          <select className="select w-full" {...register("especialidadeId")}>
            <option value="">Selecione uma especialidade</option>
            {especialidades.map((esp) => (
              <option key={esp.id} value={esp.id}>
                {esp.nome}
              </option>
            ))}
          </select>
          {errors.especialidadeId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.especialidadeId.message}
            </p>
          )}
        </fieldset>

        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend">Convênio</legend>
          <select className="select w-full" {...register("convenioId")}>
            <option value="">Selecione um convênio</option>
            {convenios.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nome}
              </option>
            ))}
          </select>
          {errors.convenioId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.convenioId.message}
            </p>
          )}
        </fieldset>
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Data</legend>
        <button
          type="button"
          popoverTarget="rdp-popover"
          className="input input-border w-full"
          style={{ anchorName: "--rdp" } as React.CSSProperties}
        >
          {dataSelecionada
            ? new Date(dataSelecionada).toLocaleDateString()
            : "Escolha a data para o agendamento"}
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
            selected={dataSelecionada}
            onSelect={(date) => setValue("data", date)}
          />
        </div>
        {errors.data && (
          <p className="text-red-500 text-sm mt-1">{errors.data.message}</p>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nome do Médico</legend>
        <input
          className="input w-full"
          placeholder="Digite o nome do médico"
          {...register("medico")}
        />
        {errors.medico && (
          <p className="text-red-500 text-sm mt-1">{errors.medico.message}</p>
        )}
      </fieldset>

      <button type="submit" className="btn btn-success text-accent mt-4">
        Salvar
      </button>
    </form>
  );
}
