class NewRecordCtrl{

  constructor(propertyService, $scope){
    this.service = propertyService;  
	this.scope = $scope;  
  }
  
  submitForm()
  {
        this.service.addProperty({"Address": this.address, "Volume": this.volume, "SurfaceArea": this.sa, "Status": this.propertystatus});
  }
  
};