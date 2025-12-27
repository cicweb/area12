import { readFileSync } from "node:fs";
import path from "node:path";

const html = readFileSync(
  path.join(__dirname, "../site/index.html"),
  "utf8"
);

export default {
  fetch() {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8"
      }
    });
  }
};
