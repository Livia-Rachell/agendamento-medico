import { Pencil, Trash2 } from "lucide-react";

interface TableNomeProps {
  items: { id: number; nome: string }[];
}

export default function TableNome({ items }: TableNomeProps) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/2 ">
      <table className="table">
        {/* head */}
        <thead className="bg-base-300">
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items?.map(({ nome }) => (
            <tr>
              <td>{nome}</td>
              <td>
                <button className="btn btn-ghost btn-sm ">
                  <Pencil size={16} color="#0796CA" />
                </button>
                <button className="btn btn-ghost btn-sm">
                  <Trash2 size={16} color="#FF6266" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
