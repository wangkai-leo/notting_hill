'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = {
  /**
   * Check the numer if a phone number.
   * @param {String} phone_number 
   */
  isPhoneNumber: function isPhoneNumber(phone_number) {
    var fiter = /^[1][0-9]{10}$/;
    if (fiter.test(phone_number)) {
      return true;
    } else {
      return false;
    }
  },


  /**
   * Check the string if the email pattern.
   * @param {String} email 
   */
  isEmail: function isEmail(email) {
    var fiter = /^([a-zA-Z0-9_\.\-])+[\.]([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // let fiter = /^([a-zA-Z0-9\.])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (fiter.test(email)) {
      return true;
    } else {
      return false;
    }
  },


  /**
   * Check the string all characters are numeric.
   * @param {String} checked_string 
   * 
   */
  isNumString: function isNumString(checked_string) {
    var fiter = /^[0-9]*$/;
    if (fiter.test(checked_string)) {
      return true;
    } else {
      return false;
    }
  },


  /**
   * Check the string if the IDCard number.
   * @param {String} id_card 
   */
  isIdCard: function isIdCard(id_card) {
    var fiter = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/;
    if (fiter.test(id_card)) {
      return true;
    } else {
      return false;
    }
  },


  /**
   * 
   * @param {String} value 
   */
  isEmpty: function isEmpty(value) {
    return value == '';
  }
};

exports.default = validate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlIiwiaXNQaG9uZU51bWJlciIsInBob25lX251bWJlciIsImZpdGVyIiwidGVzdCIsImlzRW1haWwiLCJlbWFpbCIsImlzTnVtU3RyaW5nIiwiY2hlY2tlZF9zdHJpbmciLCJpc0lkQ2FyZCIsImlkX2NhcmQiLCJpc0VtcHR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSUEsV0FBUztBQUNYOzs7O0FBSUFDLGVBTFcseUJBS0dDLFlBTEgsRUFLaUI7QUFDMUIsUUFBSUMsUUFBUSxnQkFBWjtBQUNBLFFBQUlBLE1BQU1DLElBQU4sQ0FBV0YsWUFBWCxDQUFKLEVBQThCO0FBQzVCLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FaVTs7O0FBY1g7Ozs7QUFJQUcsU0FsQlcsbUJBa0JIQyxLQWxCRyxFQWtCSTtBQUNiLFFBQUlILFFBQVEsd0ZBQVo7QUFDQTtBQUNBLFFBQUlBLE1BQU1DLElBQU4sQ0FBV0UsS0FBWCxDQUFKLEVBQXVCO0FBQ3JCLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0ExQlU7OztBQTRCWDs7Ozs7QUFLQUMsYUFqQ1csdUJBaUNDQyxjQWpDRCxFQWlDZ0I7QUFDekIsUUFBSUwsUUFBUSxVQUFaO0FBQ0EsUUFBSUEsTUFBTUMsSUFBTixDQUFXSSxjQUFYLENBQUosRUFBZ0M7QUFDOUIsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQXhDVTs7O0FBMENYOzs7O0FBSUFDLFVBOUNXLG9CQThDRkMsT0E5Q0UsRUE4Q087QUFDaEIsUUFBSVAsUUFBUSxrQ0FBWjtBQUNBLFFBQUlBLE1BQU1DLElBQU4sQ0FBV00sT0FBWCxDQUFKLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FyRFU7OztBQXVEWDs7OztBQUlBQyxTQTNEVyxtQkEyREhDLEtBM0RHLEVBMkRHO0FBQ1gsV0FBT0EsU0FBTyxFQUFkO0FBQ0Y7QUE3RFUsQ0FBYjs7a0JBa0VlWixRIiwiZmlsZSI6InZhbGlkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbGlkYXRlPXtcbiAgLyoqXG4gICAqIENoZWNrIHRoZSBudW1lciBpZiBhIHBob25lIG51bWJlci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBob25lX251bWJlciBcbiAgICovXG4gIGlzUGhvbmVOdW1iZXIocGhvbmVfbnVtYmVyKSB7XG4gICAgbGV0IGZpdGVyID0gL15bMV1bMC05XXsxMH0kLztcbiAgICBpZiAoZml0ZXIudGVzdChwaG9uZV9udW1iZXIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBzdHJpbmcgaWYgdGhlIGVtYWlsIHBhdHRlcm4uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbCBcbiAgICovXG4gIGlzRW1haWwoZW1haWwpIHtcbiAgICBsZXQgZml0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1tcXC5dKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG4gICAgLy8gbGV0IGZpdGVyID0gL14oW2EtekEtWjAtOVxcLl0pK1xcQCgoW2EtekEtWjAtOVxcLV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xuICAgIGlmIChmaXRlci50ZXN0KGVtYWlsKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgc3RyaW5nIGFsbCBjaGFyYWN0ZXJzIGFyZSBudW1lcmljLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2hlY2tlZF9zdHJpbmcgXG4gICAqIFxuICAgKi9cbiAgaXNOdW1TdHJpbmcoY2hlY2tlZF9zdHJpbmcpe1xuICAgIGxldCBmaXRlciA9IC9eWzAtOV0qJC87XG4gICAgaWYgKGZpdGVyLnRlc3QoY2hlY2tlZF9zdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBzdHJpbmcgaWYgdGhlIElEQ2FyZCBudW1iZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZF9jYXJkIFxuICAgKi9cbiAgaXNJZENhcmQoaWRfY2FyZCkge1xuICAgIGxldCBmaXRlciA9IC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WHx4KSQpLztcbiAgICBpZiAoZml0ZXIudGVzdChpZF9jYXJkKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFxuICAgKi9cbiAgaXNFbXB0eSh2YWx1ZSl7XG4gICAgIHJldHVybiB2YWx1ZT09Jyc7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyJdfQ==