import { writeFileSync } from "fs";
import { ListObjectsCommand } from "@aws-sdk/client-s3";

import { cli, client, defaultParam } from "../utils/index.js";

cli
  .command("list")
  .argument("[prefix]", "Prefix of the object to list")
  .description("List objects from S3")
  .action(async (Prefix: string) => {
    const result = await client.send(new ListObjectsCommand({ ...defaultParam(), Prefix, MaxKeys: 100 }));
    writeFileSync("list.json", JSON.stringify(result.Contents || [], null, 2));
    console.log("Output written to list.json");
  });
