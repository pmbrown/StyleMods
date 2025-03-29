//  ------------------------------------------------------------
//  Adapted from Adam Argyles's 'Building a theme switch component'
//  https://web.dev/articles/building/a-theme-switch-component
//  ------------------------------------------------------------

const storageKey = "theme-preference",

onClick = () => {
  (theme.value = "light" === theme.value ? "dark" : "light"), 
  setPreference();
},
  
getColorPreference = () => (localStorage.getItem(storageKey) 
  ? localStorage.getItem(storageKey) 
  : window.matchMedia("(prefers-color-scheme: dark)")
    .matches ? "dark" : "light"),
    
setPreference = () => {
  localStorage.setItem(storageKey, theme.value),
  reflectPreference();
},
  
reflectPreference = () => {
  document.firstElementChild.style.setProperty("color-scheme", theme.value);
},
  
theme = {
  value: getColorPreference()
};

reflectPreference(),

(window.onload = () => {
    reflectPreference(), 
    document.querySelector("#themes").addEventListener("click", onClick);
}),
  
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: e}) => {
  (theme.value = e ? "true" : "false"),
  setPreference();
});