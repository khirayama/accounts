import PropertyStore from '../../dev/assets/scripts/app/stores/PropertyStore';
import assert from 'assert';

describe('PropertyStore', () => {
  describe('_create()', () => {
    it('destroy an item', () => {
      PropertyStore._create('property_name', 'property_init_amount');
      // assert.equal(todo, undefined);
    });
  });
  describe('_update()', () => {
  });
  describe('_destroy()', () => {
  });
});
