export interface MessageResponse {
  message: string
}

export interface ErrorResponse extends MessageResponse {}

// export interface ListBooks200Response extends Response {
//   status: "200";
//   body: Book[];
// }

// export interface UpdateBook201Response extends Response {
//   status: "201";
//   // Response doesn't send a body payload so we set it to
//   // never so our users know they shouldn't expect one.
//   body?: never;
// }

// export interface GetBook200Response extends Response {
//   status: "200";
//   body: Book;
// }

// export interface DeleteBook201Response extends Response {
//   status: "201";
//   body?: never;
// }
