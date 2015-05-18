import PropertyStore from '../../dev/assets/scripts/app/stores/PropertyStore';
import assert from 'assert';

describe('PropertyStore', () => {
  let properties = PropertyStore._properties;
  let key;
  let property;

  before(() => {
    PropertyStore._create('first property', 10000);
    key = (Object.keys(properties))[0];
    property = properties[key];
  });
  describe('_create()', () => {
    it('create an item', () => {
      assert.equal(property.name, 'first property');
      assert.equal(property.amount, 10000);
    });
  });
  describe('_update()', () => {
    it('update an item', () => {
      PropertyStore._update(key, { name: 'second property' });
      property = properties[key];
      assert.equal(property.name, 'second property');
    });
  });
  describe('_destroy()', () => {
  });
});
