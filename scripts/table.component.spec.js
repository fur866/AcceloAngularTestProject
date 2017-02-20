'use strict';

describe('Table component', () => {
	
	beforeEach(() => {
		module('RealEstateTrackerApp');
	});
	
	describe('controller', () => {
		
		let ctrl;
		let service;
		beforeEach(() => {
			inject((_$componentController_, propertyService) => {
				let $componentController =_$componentController_;
				ctrl = $componentController('tableComponent', null);
				service = propertyService;
			});
		});
		
		it('should have a PropertiesList', () => {
			expect(Array.isArray(ctrl.Properties)).toBeTruthy();
			expect(ctrl.Properties.length).toEqual(0);
		});
		
		it('should watch out for changes to PropertiesList', () => {
			service.addProperty({Address: "Test Address", Volume: 12, SurfaceArea: 12, Status: "Sold"});
			
			expect(ctrl.Properties.length).toEqual(1);
			expect(ctrl.Properties[0].Address).toEqual("Test Address");
			expect(ctrl.Properties[0].Volume).toEqual(12);
			expect(ctrl.Properties[0].SurfaceArea).toEqual(12);
			expect(ctrl.Properties[0].Status).toEqual("Sold");
		});
	});
});