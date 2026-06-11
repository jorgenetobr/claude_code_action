// 🗂️ Mapeia chamadas de ferramenta para descrições legíveis com nome do arquivo
export function describeToolCall(
  toolName: string,
  args: Record<string, unknown>
): string {
  const path = typeof args?.path === "string" ? args.path : null;
  const fileName = path ? path.split("/").pop() : null;

  if (toolName === "str_replace_editor") {
    const command = args?.command;
    if (command === "create") return fileName ? `Criando ${fileName}` : "Criando arquivo";
    if (command === "str_replace" || command === "insert") return fileName ? `Editando ${fileName}` : "Editando arquivo";
    if (command === "view") return fileName ? `Lendo ${fileName}` : "Lendo arquivo";
  }

  if (toolName === "file_manager") {
    const command = args?.command;
    if (command === "delete") return fileName ? `Deletando ${fileName}` : "Deletando arquivo";
    if (command === "rename") {
      const newPath = typeof args?.new_path === "string" ? args.new_path : null;
      const newName = newPath ? newPath.split("/").pop() : null;
      return newName ? `Renomeando para ${newName}` : "Renomeando arquivo";
    }
  }

  return toolName;
}
