import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  apiFile: './baseApi.ts',
  apiImport: 'baseAPI',
  outputFile: './deals.ts',
  exportName: 'dealsApi',
  hooks: true,
}

export default config