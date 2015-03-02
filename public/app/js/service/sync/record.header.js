/**
 * Created by dong on 2015/2/8.
 */
/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('recordHeader', [
    function(){

    var service = {
      data: '',
      getData: '',
      getNewData: '',
      status : [2, 4, -1],
      currentStatus:null,
      currentBuyerId: null,
      startTime: null,
      endTime: null,
      currentPage: 'recharge', //recharge || trade || withdraw
      reloadRecord:reloadRecord
    }

    function reloadRecord() {
      //switch(service.currentPage){
      //  case 'recharge':
      //    getRechargeRecord.getData();
      //}
    }

    return service;
  }])
})