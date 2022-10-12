import { Command } from "commander";

const cli = new Command();

cli
  .name("s3cli")
  .version("0.0.1")
  .description("Simple S3 CLI Utilities for AWS")
  .option("--bucket <bucket>", "Bucket Name", process.env.S3_BUCKET)
  .option("--endpoint <endpoint>", "S3 Endpoint", process.env.S3_ENDPOINT)
  .option("--region <region>", "AWS Region", process.env.S3_REGION || "ap-southeast-1")
  .option("--access-key <accessKey>", "AWS Access Key (or use env var S3_ACCESS_KEY)")
  .option("--secret-key <secretKey>", "AWS Secret Key (or use env var S3_SECRET_KEY)");

export default cli;
