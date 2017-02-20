'use strict';


describe('NewRecord component', () => {
    
    let element;
    let scope;
	let service;
    
    beforeEach(() => {
		angular.mock.module('preprocessedTemplates');
		angular.mock.module('RealEstateTrackerApp');
		angular.mock.inject((_$rootScope_, _$compile_, propertyService) => {
			service = propertyService;
        	scope = _$rootScope_;
        	element = _$compile_(angular.element("<new-record-component></new-record-component>"))(scope);
			scope.$digest();
		});
	});
    
    describe('on click of the submit button', () => {
        it('should submit the form', () => {
			spyOn(service, 'addProperty');
			
			element.find("#address").val("Test Address").trigger('input');
			element.find("#volume").val(10).trigger('input');
			element.find("#sa").val(10).trigger('input');
			element.find("#propertystatus").val("Sold").trigger('input');
			
			element.find('#submitButton').trigger('click');
			scope.$digest();
			expect(service.addProperty).toHaveBeenCalledWith({Address: "Test Address", Volume: '10', SurfaceArea: '10', Status: "Sold"});
        });
    });
});