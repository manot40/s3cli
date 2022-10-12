import cli from "./cli";
import { S3Client, type PutObjectCommandInput } from "@aws-sdk/client-s3";

const opts = cli.opts();

const credentials = {
  accessKeyId: opts.accessKey,
  secretAccessKey: opts.secretKey,
};

const client = new S3Client({
  credentials,
  region: opts.region,
  endpoint: opts.endpoint,
});

export const defaultParam = (optsParam = {} as PutObjectCommandInput) => ({
  Bucket: opts.bucket,
  ...optsParam,
});

export default client;
