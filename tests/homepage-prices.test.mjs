import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const require = createRequire(import.meta.url);
const { transformSync } = require("next/dist/build/swc");
const componentsDirectory = fileURLToPath(
  new URL("../components/", import.meta.url),
);
const haircutComponentFile = path.join(
  componentsDirectory,
  "menandwomencut.js",
);

function loadHaircutComponent() {
  const defaultJavaScriptLoader = require.extensions[".js"];

  require.extensions[".js"] = (module, filename) => {
    if (!filename.startsWith(componentsDirectory)) {
      defaultJavaScriptLoader(module, filename);
      return;
    }

    const { code } = transformSync(readFileSync(filename, "utf8"), {
      filename,
      jsc: {
        parser: { syntax: "ecmascript", jsx: true },
        transform: { react: { runtime: "automatic" } },
      },
      module: { type: "commonjs" },
    });

    module._compile(code, filename);
  };

  try {
    return require(haircutComponentFile).default;
  } finally {
    require.extensions[".js"] = defaultJavaScriptLoader;
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const HaircutforMenandWomen = loadHaircutComponent();
const PriceWipe = require(
  path.join(componentsDirectory, "motion", "PriceWipe.js"),
).default;

test("PriceWipe keeps its animation enabled by default", () => {
  const html = renderToStaticMarkup(
    React.createElement(PriceWipe, { className: "price" }, "$55"),
  );

  assert.doesNotMatch(html, /max-sm:/);
  assert.match(html, /transform:scaleX\(0\)/);
  assert.match(html, /<span class="inline-block" style="opacity:0">\$55<\/span>/);
});

test("haircut prices disable their wipe animation below the sm breakpoint", () => {
  const html = renderToStaticMarkup(
    React.createElement(HaircutforMenandWomen),
  );

  for (const price of ["$55", "$40"]) {
    const priceBadge = html.match(
      new RegExp(
        `<div class="([^"]*)"[^>]*><span class="([^"]*)"[^>]*>${escapeRegExp(price)}</span></div>`,
      ),
    );

    assert.ok(priceBadge, `${price} must be rendered inside its price badge`);
    assert.match(priceBadge[1], /(?:^|\s)max-sm:!transform-none(?:\s|$)/);
    assert.match(priceBadge[1], /(?:^|\s)max-sm:!opacity-100(?:\s|$)/);
    assert.match(priceBadge[2], /(?:^|\s)max-sm:!opacity-100(?:\s|$)/);
  }
});
