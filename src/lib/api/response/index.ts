export const createResponse = <DataType>(data: DataType, status: number = 200, headers?: Record<string, string>) => {
  return new Response(JSON.stringify(data), { status: status, headers: headers })
}
