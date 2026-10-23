import type { NextConfig } from "next";

// AVIF first: the hero photo is the slowest thing on the first screen.
const config: NextConfig = { images: { formats: ["image/avif", "image/webp"] } };
export default config;
