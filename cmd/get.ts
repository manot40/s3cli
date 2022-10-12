import { Readable } from "stream";
import { GetObjectCommand } from "@aws-sdk/client-s3";

import { cli, createFileStream, client, defaultParam } from "../utils/index.js";

cli
  .command("get")
  .argument("<key>", "Key of the object to get")
  .description("Get object from S3")
  .action(async (Key: string) => {
    const result = await client.send(new GetObjectCommand({ ...defaultParam(), Key }));

    if (result.Body instanceof Readable) {
      return result.Body.pipe(createFileStream(Key)) && console.log("Output written to assets/" + Key);
    } else console.error("No body found");

    process.exit(1);
  });
