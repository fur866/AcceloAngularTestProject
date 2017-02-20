'use strict';

describe('PropertyService\'s', () => {
	
	let propertyService;
	
	beforeEach(() => {
		propertyService = new PropertyService();
	});
	
	describe('constructor method', () => {
		it('sets the PropertyList attribute to an empty array', () => {
			expect(Array.isArray(propertyService.PropertyList)).toBe(true);
			expect(propertyService.PropertyList.length).toEqual(0);
		});
	});
	
	describe('addProperty method', () => {
		it('adds a new property to the list', () => {
			propertyService.addProperty({"Address": "Test Address", "Volume": 123, "SurfaceArea": 456, "Status": "Sold"});
			expect(propertyService.PropertyList.length).toEqual(1);
		});
	});
});