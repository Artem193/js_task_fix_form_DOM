document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label"),r=e.name.charAt(0).toUpperCase()+e.name.slice(1);t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=r,e.setAttribute("placeholder",r),e.parentNode.insertBefore(t,e)})});
//# sourceMappingURL=index.a9e27b90.js.map
