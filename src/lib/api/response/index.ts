export const createResponse = <DataType>(data: DataType, status: number, headers?: Record<string, string>) => {
  return new Response(JSON.stringify(data), { status: status, headers: headers })
}
