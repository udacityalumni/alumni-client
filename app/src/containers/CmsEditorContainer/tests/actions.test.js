import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CmsEditor actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.CMSEDITOR_DEFAULT_ACTION,
      };
      expect(actions.cmsEditorDefaultAction()).toEqual(expected);
    });
  });
});
