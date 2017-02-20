'use strict';

describe('NewRecord Controller\'s', () => {	
	let service;
	let controller;
	
	beforeEach(() => {
		service = new PropertyService();
		controller = new NewRecordCtrl(service);
	});
	
	describe('constructor method', () => {
		it('sets the service attribute', () => {
			expect(controller.service instanceof PropertyService).toBe(true);	
		});
	});
	
	describe('submitForm method', () => {
		it('adds a new property to the propertylist based on the values entered', () => {
			controller.address = "test";
			controller.volume = 12;
			controller.sa = 12;
			controller.propertystatus = "Sold";
			controller.submitForm();
			
			expect(service.PropertyList.length).toEqual(1);
			expect(service.PropertyList[0].Address).toEqual("test");
			expect(service.PropertyList[0].Volume).toEqual(12);
			expect(service.PropertyList[0].SurfaceArea).toEqual(12);
			expect(service.PropertyList[0].Status).toEqual("Sold");
		});
	});
});