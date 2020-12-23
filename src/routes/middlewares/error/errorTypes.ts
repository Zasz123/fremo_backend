export interface IError extends Error {
  statusCode: number;
}

export type ErrorTypes = {
  NOT_FOUND: "NOT_FOUND";
};

export const CustomErrors: { [key in keyof ErrorTypes]: IError } = {
  NOT_FOUND: {
    name: "NOT_FOUND",
    message: "page not found",
    statusCode: 404,
  },
};
