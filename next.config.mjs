// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;


import removeImports from 'next-remove-imports'

/** @type {function(import("next").NextConfig): import("next").NextConfig}} */
const removeImportsFun = removeImports({
    // test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
    // matchImports: "\\.(less|css|scss|sass|styl)$"
});

export default removeImportsFun({
    webpack(config, options) {
        return config
    },
});