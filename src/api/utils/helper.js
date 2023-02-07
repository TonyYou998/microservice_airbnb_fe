export default function getCookie(name) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") == 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  }
  