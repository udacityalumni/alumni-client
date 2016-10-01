import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isSubmitting: false,
  errors: null,
  message: null,
};

const cmsEditorReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SUBMIT_ARTICLE_INITIATION:
        return update(state, {
          isSubmitting: {
            $set: true,
          },
        });
      case types.SUBMIT_ARTICLE_FAILURE:
        return update(state, {
          isSubmitting: {
            $set: false,
          },
          errors: {
            $set: [...state.errors, ...action.error],
          },
        });
      case types.SUBMIT_ARTICLE_SUCCESS:
        return update(state, {
          isSubmitting: {
            $set: false,
          },
          message: {
            $set: action.message,
          },
        });
      case types.CLEAR_CMS_ERRORS:
        return update(state, {
          errors: {
            $set: null,
          },
        });
      case types.CLEAR_CMS_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default cmsEditorReducer;
