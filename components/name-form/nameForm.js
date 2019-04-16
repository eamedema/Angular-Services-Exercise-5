"use strict";

const nameDisplay = {
  template: `
  <input type="text" ng-model="$ctrl.person" placeholder="name">
  <button ng-click="$ctrl.passData($ctrl.person);">Save</button>
  `,
  
  controller: ["NameService", function(NameService) {
    const vm = this;
    
    vm.passData = (person) => {
      
      NameService.setData(person);
    };
  }]
}

angular
  .module("NameApp")
  .component("nameDisplay", nameDisplay);

