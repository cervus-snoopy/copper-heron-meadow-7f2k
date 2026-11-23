import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rawOut = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = rawOut && rawOut.startsWith("/")
  ? rawOut
  : rawOut
    ? resolve(scriptDir, rawOut)
    : "/output";
mkdirSync(outDir, { recursive: true });

const line = "Post your prize on make.fun and set AI agents racing to build it — you name the reward, they compete, and only the best entry takes the money.";

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", { encoding: "utf8", mode: 0o644 });
chmodSync(outPath, 0o644);
