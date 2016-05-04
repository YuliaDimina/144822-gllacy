
google.maps.event.addDomListener(window, "load", init),
    function () {
        var e = document.querySelector(".letter-button"),
            a = document.querySelector(".modal-window"),
            t = a.querySelector(".modal-window-close"),
            o = a.querySelector("[name=user-name]"),
            l = a.querySelector("[name=user-mail]"),
            r = a.querySelector("[name=user-text]"),
            s = document.querySelector(".modal-window form"),
            i = localStorage.getItem("name-in-storage");
        e.addEventListener("click", function (e) {
            e.preventDefault(), a.classList.add("modal-window-show"), i ? (o.value = i, l.focus()) : o.focus()
        }), t.addEventListener("click", function (e) {
            e.preventDefault(), a.classList.remove("modal-window-show"), a.classList.remove("modal-error")
        }), s.addEventListener("submit", function (e) {
            o.value && l.value && r.value ? localStorage.setItem("name-in-storage", o.value) : (e.preventDefault(), a.classList.remove("modal-error"), a.offsetWidth = a.offsetWidth, a.classList.add("modal-error"), console.log("Нужно ввести имя и адрес электронной почты"))
        }), window.addEventListener("keydown", function (e) {
            27 === e.keyCode && a.classList.contains("modal-window-show") && (a.classList.remove("modal-window-show"), a.classList.remove("modal-error"))
        })
    }();