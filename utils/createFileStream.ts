import { existsSync, mkdirSync, createWriteStream } from "fs";

function createFileStream(name: string) {
  const folder = `assets/${name.replace(/\/[^/]*$/, "")}`;
  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });
  return createWriteStream(`assets/${name}`);
}

export default createFileStream;
