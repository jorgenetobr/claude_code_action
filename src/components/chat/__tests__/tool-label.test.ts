import { test, expect } from "vitest";
import { describeToolCall } from "../tool-label";

test("str_replace_editor create retorna nome do arquivo", () => {
  expect(describeToolCall("str_replace_editor", { command: "create", path: "/App.jsx" })).toBe("Criando App.jsx");
});

test("str_replace_editor create sem path retorna fallback", () => {
  expect(describeToolCall("str_replace_editor", { command: "create" })).toBe("Criando arquivo");
});

test("str_replace_editor str_replace retorna nome do arquivo", () => {
  expect(describeToolCall("str_replace_editor", { command: "str_replace", path: "/components/Button.tsx" })).toBe("Editando Button.tsx");
});

test("str_replace_editor insert retorna nome do arquivo", () => {
  expect(describeToolCall("str_replace_editor", { command: "insert", path: "/utils/helpers.ts" })).toBe("Editando helpers.ts");
});

test("str_replace_editor view retorna nome do arquivo", () => {
  expect(describeToolCall("str_replace_editor", { command: "view", path: "/index.ts" })).toBe("Lendo index.ts");
});

test("file_manager delete retorna nome do arquivo", () => {
  expect(describeToolCall("file_manager", { command: "delete", path: "/old/file.ts" })).toBe("Deletando file.ts");
});

test("file_manager rename retorna novo nome", () => {
  expect(describeToolCall("file_manager", { command: "rename", path: "/foo.ts", new_path: "/bar.ts" })).toBe("Renomeando para bar.ts");
});

test("file_manager rename sem new_path retorna fallback", () => {
  expect(describeToolCall("file_manager", { command: "rename", path: "/foo.ts" })).toBe("Renomeando arquivo");
});

test("ferramenta desconhecida retorna o próprio nome", () => {
  expect(describeToolCall("unknown_tool", {})).toBe("unknown_tool");
});
