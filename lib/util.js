
module.exports = function () {
  /**
   * 返回数据类型
   * @param {Object} obj 
   */
 let getObjTypeof = (obj) => {
    return Object.prototype.toString().call(obj).slice(8, -1);
  }
  return {
    getObjTypeof: getObjTypeof
  }
};