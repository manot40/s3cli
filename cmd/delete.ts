import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { cli, client, defaultParam } from "../utils/index.js";

cli
  .command("delete")
  .argument("<key>", "Key of the object to delete")
  .description("Delete object from S3")
  .action(async (Key: string) => {
    const result = await client.send(new DeleteObjectCommand({ ...defaultParam(), Key }));
    console.log(result.$metadata);
  });
