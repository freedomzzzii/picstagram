export interface initialStateType { };

export interface initialStateLoadingType {
  count: number,
};

export interface actionDefaultType {
  type: string,
  data?: {
    [key: string]: any,
  } | Array<any>,
};

export interface actionDefaultWithPayloadType {
  type: string,
  payload: {
    [key: string]: any,
  },
  data?: {
    [key: string]: any,
  },
};

export interface actionLoadingType {
  type: string,
  count: number,
};
