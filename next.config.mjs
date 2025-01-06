/** @type {import('next').NextConfig} */

import withExportImages from 'next-export-optimize-images'

export default withExportImages({
  output: 'export',
  // write your next.js configuration values.
})