import { Plus } from "lucide-react";
import { type ReactNode } from "react";
import { useModal } from "../hooks/useModal";

interface ModalProps {
  buttonName: string;
  title: string;
  text?: string;
  children?: ReactNode;
}

export default function Modal({
  buttonName,
  title,
  text,
  children,
}: ModalProps) {
  const { open } = useModal();
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <button
        className="btn bg-success bg-opacity-75"
        onClick={() => open("modal_1")}
      >
        <Plus size={16} />
        {buttonName}
      </button>
      <dialog id="modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="flex items-center">{text ? text : children}</div>
        </div>
      </dialog>
    </>
  );
}
