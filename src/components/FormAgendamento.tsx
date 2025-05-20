import DateSelect from "./DateSelect";
import Input from "./Input";
import Select from "./Select";

export default function FormAgendamento() {
  return (
    <fieldset className="fieldset w-full pt-4">
      <Input label="Nome" placeholder="Digite o nome do paciente" helpText="" />
      <div className="flex gap-4">
        <Select
          label="Especialidade"
          placeholder="Selecione a especialidade"
          opcoes={[
            { id: 1, name: "opção1" },
            { id: 2, name: "opção2" },
            { id: 3, name: "opção3" },
          ]}
        />
        <Select
          label="Convênio"
          placeholder="Selecione o convênio"
          opcoes={[
            { id: 1, name: "opção1" },
            { id: 2, name: "opção2" },
            { id: 3, name: "opção3" },
          ]}
        />
      </div>
      <DateSelect label="Data" placeholder="Selecione uma data" />
      <Select
        label="Médico"
        placeholder="Selecione o médico"
        opcoes={[
          { id: 1, name: "opção1" },
          { id: 2, name: "opção2" },
          { id: 3, name: "opção3" },
        ]}
      />

      <button className="btn btn-success text-accent mt-4">Salvar</button>
    </fieldset>
  );
}
