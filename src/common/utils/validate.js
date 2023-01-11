var validate={
  /**
   * Check the numer if a phone number.
   * @param {String} phone_number 
   */
  isPhoneNumber(phone_number) {
    let fiter = /^[1][0-9]{10}$/;
    if (fiter.test(phone_number)) {
      return true
    } else {
      return false
    }
  },

  /**
   * Check the string if the email pattern.
   * @param {String} email 
   */
  isEmail(email) {
    let fiter = /^([a-zA-Z0-9_\.\-])+[\.]([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // let fiter = /^([a-zA-Z0-9\.])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (fiter.test(email)) {
      return true
    } else {
      return false
    }
  },

  /**
   * Check the string all characters are numeric.
   * @param {String} checked_string 
   * 
   */
  isNumString(checked_string){
    let fiter = /^[0-9]*$/;
    if (fiter.test(checked_string)) {
      return true
    } else {
      return false
    }
  },

  /**
   * Check the string if the IDCard number.
   * @param {String} id_card 
   */
  isIdCard(id_card) {
    let fiter = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/;
    if (fiter.test(id_card)) {
      return true
    } else {
      return false
    }
  },

  /**
   * 
   * @param {String} value 
   */
  isEmpty(value){
     return value=='';
  }
}



export default validate;