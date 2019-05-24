const btn = document.querySelector("#btn");
const sel = document.querySelector("#sel");
const editors = document.querySelector("#editors");
let f = 16;
const addEditor = e => {
  console.log("AddEditor");
  const id = Math.floor(Math.random() * 9999999);
  var modelist = ace.require("ace/ext/modelist");
  var div = document.createElement("div");
  div.className = "editorClass";
  div.setAttribute("id", id);
  editors.insertBefore(div, editors.childNodes[0]);
  var editorId = document.getElementById(id);
  var editor = ace.edit(editorId);
  //ace.config.set("basePath", "assets/javascripts/third-party/ace/src-min-noconflict");
  ace.require("ace/ext/language_tools");
  editor.setTheme("ace/theme/eclipse");
  editor.getSession().setMode("ace/mode/java");
  editor.$blockScrolling = Infinity;
  editor.setShowPrintMargin(false);
  editor.setValue(`${id}`, 1);
  editor.setAutoScrollEditorIntoView(true);
  editor.setOptions({
    enableBasicAutocompletion: true
  });
  editor.on("focus", e => {
    // editor.style = "width: 60%; font-size: 43px; height: 60vh;";
    document.querySelectorAll(".editorClass").forEach(el => {
      el.style = "width: 20%;  height: 20vh;";
    });
  });
  editor.on("blur", e => {
    editor.style = "width: 33%; height: 100vh;";
  });
  editor.getSession().on("change", function() {
    console.log("aaa");
  });
};
sel.addEventListener("change", e => {
  console.log(e.target.value);
  document.querySelectorAll(".editorClass").forEach(el => {
    el.style = `font-size: ${e.target.value}px;`;
  });
});
btn.addEventListener("click", addEditor);
