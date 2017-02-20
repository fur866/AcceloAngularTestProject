'use strict';

describe('Table Controller\'s', () => {
	// beforeEach(module('RealEstateTrackerApp'));
	// 
	// let controller;
	// let element;
	// 
	// beforeEach(inject(($rootScope, $compile) => {
	// 	let scope = $rootScope.$new();
	// 	element = angular.element('<table-component></table-component>');
	// 	element = $compile(element) (scope);
	// 	controller = element.controller('tableComponent');
	// }));
	
	let service;
	let controller;
	
	beforeEach(() => {
		service = new PropertyService();
		controller = new TableCtrl(service);
	});
	
	describe('constructor method', () => {
		it('sets the Properties attribute to that of the propertyService', () => {
			expect(Array.isArray(controller.Properties)).toBe(true);
			expect(controller.Properties.length).toEqual(0);
			
			service.addProperty({"Address": "Test Address", "Volume": 123, "SurfaceArea": 456, "Status": "Sold"});
			expect(controller.Properties.length).toEqual(1);	
		});
	});
});