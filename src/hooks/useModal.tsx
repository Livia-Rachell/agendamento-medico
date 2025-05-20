function close(modalId: string) {
  const modal = document.getElementById(modalId);
  if (modal) (modal as HTMLDialogElement).close();
}

function open(modalId: string) {
  const modal = document.getElementById(modalId);
  if (modal) (modal as HTMLDialogElement).showModal();
}

export function useModal() {
  return { open, close };
}
