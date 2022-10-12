import { readFileSync } from "fs";
import { PutObjectCommand } from "@aws-sdk/client-s3";

import { cli, client, defaultParam } from "../utils/index.js";

cli
  .command("put")
  .option("--acl <ACL>", "Set object ACL (default: private)", "private")
  .argument("<key>", "Key of the object to put")
  .argument("<path>", "Path to file for put")
  .description("Put object to S3")
  .action(async (Key: string, Path: string, { acl: ACL }) => {
    const result = await client.send(
      new PutObjectCommand({
        ...defaultParam(),
        ACL,
        Key,
        Body: readFileSync(Path),
      })
    );
    console.log(result.$metadata);
  });
