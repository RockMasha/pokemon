(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function c(e){return(await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)).json()}async function g(e){return(await fetch(`https://pokeapi.co/api/v2/type/${e}`)).json()}function y(e){return`
    <div>
        <h2 class="error-title">ERROR</h2>
        <p class="error-text">Oops...</p>
        <p class="error-text">Couldn't find anything for name: ${e}</p>
    </div>
    <img class="error-img" src="./img/shockedPokemon.jpg" />
    `}function h(e){const{name:n,height:i,weight:o,sprites:t,types:r}=e,l=[r[0].type.name,r[1]?r[1].type.name:"",r[2]?r[2].type.name:""].join(" ");return`
  <div>
  <p class="name-card-name">name: ${n}</p>
  <p class="name-card-height">height: ${i*10}сm</p>
  <p class="name-card-weight">weight: ${o/10}kg</p>
  <p class="name-card-element">element: ${l}</p>
  </div>
  <img class="name-card-img" src="${t.front_default?t.front_default:"./img/default_img.jpg"}" />`}const a={body:document.querySelector("body"),formName:document.querySelector(".name-form"),inputElByName:document.querySelector(".name-form-enter"),cardFoundByName:document.querySelector(".name-card"),formElement:document.querySelector(".element-form"),inoutElByElement:document.querySelector(".element-form-enter"),listElByElement:document.querySelector(".element-list"),loading:document.querySelector(".loading")};function d(){a.loading.innerHTML="",a.loading.classList.remove("loading-active"),a.body.removeAttribute("lock")}function E(){const e='<div class="loading-touch ">loading...</div>';a.loading.innerHTML=e,a.loading.classList.add("loading-active"),a.body.setAttribute("lock","")}async function s(e,n){try{E();const i=await e(n);return d(),i}catch{return d(),!1}}let p;async function k(e){e.preventDefault();const n=e.currentTarget.inputName.value;if(e.currentTarget.inputName.value="",p===n)return;p=n;const i=await s(c,n);let o;i?o=h(i):o=y(n),a.cardFoundByName.innerHTML=o}function P(e){const{name:n,height:i,weight:o,sprites:t,types:r}=e,l=[r[0].type.name,r[1]?r[1].type.name:"",r[2]?r[2].type.name:""].join(" ");return`         
    <li class="element-list-item">
    <img
      class="element-list-item-img"
      src="${t.front_default?t.front_default:"./img/default_img.jpg"}"
    />
    <p class="element-list-item-name">name: ${n}</p>
    <p class="element-list-item-height">height: ${i*10}cm</p>
    <p class="element-list-item-weight">weight: ${o/10}kg</p>
    <p class="element-list-item-element">element: ${l}</p>
  </li>`}async function f(e,n){const i=await Promise.all(e.filter((o,t)=>t<10).map(o=>n==="withoutLoading"?c(o):s(c,o)));return a.listElByElement.innerHTML=i.map(P).join(""),i}function v(){return`<form class="filterField">
    <h2 class="filterField-title">Filter pokemons</h2>
    <input
      id="searchLetter"
      class="filterField-enter"
      name="inputName"
      type="text"
      placeholder="Enter pokemon name"
    />
  </form>`}let u;function L(){return u}function q(){u=[]}function w(e){u=e}const m={getGroupPokemonEqualElement:L,deleteGroupPokemonEqualElement:q,updateGroupPokemonEqualElement:w};async function B(e){const n=e.currentTarget.value,i=m.getGroupPokemonEqualElement().filter(o=>{for(let t=0;t<n.length;t++)if(!o.includes(n))return!1;return!0});f(i,"withoutLoading")}function F(){const e=v();a.formElement.insertAdjacentHTML("afterend",e),document.querySelector("#searchLetter").addEventListener("input",B)}function N(e){return`
    <div class="error">
        <div>
            <h2 class="error-title">ERROR</h2>
            <p class="error-text">Oops...</p>
            <p class="error-text">Couldn't find anything for element:</p>
            <p class="error-text">${e}</p>
        </div>
        <img class="error-img" src="./img/shockedPokemon.jpg" />
    <div>`}function $(){document.querySelector(".filterField").remove()}async function O(e){e.preventDefault();const n=e.currentTarget.inputElement.value;e.currentTarget.inputElement.value="";const i=await s(g,n),o=document.querySelector("#searchLetter");if(!i){const t=N(n);a.listElByElement.innerHTML=t,m.deleteGroupPokemonEqualElement(),o&&$();return}if(m.updateGroupPokemonEqualElement(i.pokemon.map(t=>t.pokemon.name)),f(m.getGroupPokemonEqualElement()),!o){F();return}o.value=""}a.formName.addEventListener("submit",k);a.formElement.addEventListener("submit",O);
