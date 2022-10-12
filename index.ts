import { cli } from "utils";

cli.parse(process.argv);

import "cmd/get.js";
import "cmd/put.js";
import "cmd/list.js";
import "cmd/delete.js";

process.on("unhandledRejection", (err: any) => {
  console.error(err.message);
  process.exit(1);
});
