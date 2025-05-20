import * as yup from "yup";

import type { Disponibilidade, Especialidade } from "../types";
import { useEffect, useState } from "react";

import { definirDisponibilidade } from "../services/disponibilidades";
import { getDiasSemana } from "../utils";
import { listarEspecialidades } from "../services/especialidades";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  medico: yup.string().required("O nome do médico é obrigatório"),
  especialidadeId: yup
    .number()
    .typeError("Selecione uma especialidade válida")
    .positive("Selecione uma especialidade válida")
    .required("A especialidade é obrigatória"),
  diaSemana: yup
    .string()
    .oneOf(getDiasSemana(), "Selecione um dia válido")
    .required("O dia da semana é obrigatório"),
  horaInicio: yup
    .string()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Formato de hora inválido (HH:mm)")
    .required("Horário de início não informado"),
  horaFim: yup
    .string()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Formato de hora inválido (HH:mm)")
    .required("Horário de fim não informado"),
  duracaoConsultaMinutos: yup
    .number()
    .typeError("Digite um número válido")
    .positive("A duração deve ser positiva")
    .integer("A duração deve ser um número inteiro")
    .required("Duração da consulta não informada"),
});

interface FormDisponibilidade {
  onSuccess: () => void;
}

export default function FormDisponibilidade({
  onSuccess,
}: FormDisponibilidade) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  function fetchEspecialidades() {
    listarEspecialidades().then((res) => {
      setEspecialidades(res);
    });
  }

  useEffect(() => {
    fetchEspecialidades();
  }, []);

  const onSubmit = (data: Disponibilidade) => {
    console.log(data);
    definirDisponibilidade(data)
      .then(() => {
        onSuccess();
      })
      .catch((err) => console.error(err));
  };
  return (
    <form className="w-full pt-4" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nome do médico</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Digite o nome do médico"
          {...register("medico")}
        />
        {errors.medico && (
          <p className="text-red-500 text-sm mt-1">{errors.medico.message}</p>
        )}
      </fieldset>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Especialidade</legend>
        <select
          defaultValue="Pick a browser"
          className="select w-full"
          {...register("especialidadeId")}
          required
        >
          <option disabled={false}>Selecione uma das especialidades</option>
          {especialidades?.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nome}
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
        <legend className="fieldset-legend">Dia da Semana</legend>
        <select
          defaultValue="Pick a browser"
          className="select w-full"
          required
          {...register("diaSemana")}
        >
          <option disabled={false} value={undefined}>
            Selecione uma dia
          </option>
          {getDiasSemana().map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        {errors.diaSemana && (
          <p className="text-red-500 text-sm mt-1">
            {errors.diaSemana.message}
          </p>
        )}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Hora de Início</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="00:00"
          {...register("horaInicio")}
        />
        {errors.horaInicio && (
          <p className="text-red-500 text-sm mt-1">
            {errors.horaInicio.message}
          </p>
        )}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nome de Fim</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="00:00"
          {...register("horaFim")}
        />
        {errors.horaFim && (
          <p className="text-red-500 text-sm mt-1">{errors.horaFim.message}</p>
        )}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          Duração da Consulta (em minutos)
        </legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Digite a duração da consulta"
          {...register("duracaoConsultaMinutos")}
        />
        {errors.duracaoConsultaMinutos && (
          <p className="text-red-500 text-sm mt-1">
            {errors.duracaoConsultaMinutos.message}
          </p>
        )}
      </fieldset>
      <button className="btn btn-success text-accent w-full mt-4">
        Salvar
      </button>
    </form>
  );
}
