export interface initialStateType { };

export interface initialStateLoadingType {
  count: number,
};

export interface actionDefaultType {
  type: string,
  data?: {
    [key: string]: any
  },
};

export interface actionLoadingType {
  type: string,
  count: number,
};
