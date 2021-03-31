import constant from '../../common/constant';
import { actionLoadingType } from '../../common/type';

export const loading = (state = constant.initialLoadingState, action: actionLoadingType) => {
  switch (action.type) {
    case constant.LOADING_GLOBAL_SHOW:
      return Object.assign({}, { ...state, count: state.count + 1 }, { ...action });
    case constant.LOADING_GLOBAL_HIDE:
      return Object.assign({}, { ...state, count: state.count - 1 }, { ...action });
    default:
      return state ? state : constant.initialLoadingState;
  }
}