import * as yup from "yup";

import type { Especialidade } from "../types";
import { cadastrarEspecialidade } from "../services/especialidades";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  nome: yup.string().required("O nome da especialidade é obrigatório"),
});

interface FormEspecialidadeProps {
  onSuccess: () => void;
}

export default function FormEspecialidade({
  onSuccess,
}: FormEspecialidadeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Especialidade>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Especialidade) => {
    cadastrarEspecialidade(data.nome)
      .then(() => {
        onSuccess();
      })
      .catch((err) => console.error(err));
  };
  return (
    <form className="w-full pt-4" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nome</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Digite o nome do convênio"
          {...register("nome")}
        />
        {errors.nome && (
          <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
        )}
      </fieldset>
      <button className="btn btn-success text-accent w-full mt-4">
        Salvar
      </button>
    </form>
  );
}
