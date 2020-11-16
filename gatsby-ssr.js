/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import WrapWithProvider from "./src/state/wrap-with-provider.tsx"
export const wrapRootElement = WrapWithProvider
