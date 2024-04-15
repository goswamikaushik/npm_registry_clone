import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = [
  "react",
  "typescript",
  "esbuild",
  "vite",
  "lodash",
  "express.js",
  "axios",
  "debug",
  "prop-types",
  "react-dom",
  "vue",
  "classnames",
];

export async function getFeaturedPackages() {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  const data = await Promise.all(promises);

  return data as PackageDetails[];
}
