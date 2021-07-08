// ==UserScript==
// @name Safe Writing
// @name:pt Escrita segura
// @name:es Escritura segura
// @name:it Scrittura sicura
// @namespace https://gitea.com/thisago/gm_api
// @description http://gitea.com/thisago/safeWriting
// @version 0.2.0
// @author Thiago Navarro
// @homepageURL http://gitea.com/thisago/safeWriting
// @match *://*/*
// @grant GM.getValue
// @grant GM.setValue
// @grant GM.registerMenuCommand
// @run-at document-idle
// @downloadURL https://gitea.com/thisago/safeWriting/raw/branch/master/build/safeWriting.user.js
// ==/UserScript==
// Metadata automatically generated with https://gitea.com/thisago/gm_api
var framePtr=null;var excHandler=0;var lastJSError=null;var NTI33554439={size:0,kind:28,base:null,node:null,finalizer:null};function mnewString(len_33556890){return new Array(len_33556890)}function setConstr(){var result={};for(var i=0;i<arguments.length;++i){var x=arguments[i];if(typeof x=="object"){for(var j=x[0];j<=x[1];++j){result[j]=true}}else{result[x]=true}}return result}var ConstSet1=setConstr(17,16,4,18,27,19,23,22,21);function nimCopy(dest_33557140,src_33557141,ti_33557142){var result_33557151=null;switch(ti_33557142.kind){case 21:case 22:case 23:case 5:if(!isFatPointer_33557131(ti_33557142)){result_33557151=src_33557141}else{result_33557151=[src_33557141[0],src_33557141[1]]}break;case 19:if(dest_33557140===null||dest_33557140===undefined){dest_33557140={}}else{for(var key in dest_33557140){delete dest_33557140[key]}}for(var key in src_33557141){dest_33557140[key]=src_33557141[key]}result_33557151=dest_33557140;break;case 18:case 17:if(!(ti_33557142.base==null)){result_33557151=nimCopy(dest_33557140,src_33557141,ti_33557142.base)}else{if(ti_33557142.kind==17){result_33557151=dest_33557140===null||dest_33557140===undefined?{m_type:ti_33557142}:dest_33557140}else{result_33557151=dest_33557140===null||dest_33557140===undefined?{}:dest_33557140}}nimCopyAux(result_33557151,src_33557141,ti_33557142.node);break;case 24:case 4:case 27:case 16:if(src_33557141===null){result_33557151=null}else{if(dest_33557140===null||dest_33557140===undefined){dest_33557140=new Array(src_33557141.length)}else{dest_33557140.length=src_33557141.length}result_33557151=dest_33557140;for(var i=0;i<src_33557141.length;++i){result_33557151[i]=nimCopy(result_33557151[i],src_33557141[i],ti_33557142.base)}}break;case 28:if(src_33557141!==null){result_33557151=src_33557141.slice(0)}break;default:result_33557151=src_33557141;break}return result_33557151}function makeNimstrLit(c_33556798){var result=[];for(var i=0;i<c_33556798.length;++i){result[i]=c_33556798.charCodeAt(i)}return result}var inputElements_1056964617=[makeNimstrLit("input:not([type=button]):not([type=checkbox]):not([type=color]):not([type=date]):not([type=datetime]):not([type=file]):not([type=hidden]):not([type=image]):not([type=month]):not([type=radio]):not([type=range]):not([type=reset]):not([type=submit]):not([type=time]):not([type=week]):not([disabled]):not([readonly])"),makeNimstrLit("[contenteditable=true]")];function toJSStr(s_33556804){var Temporary5;var Temporary7;var result_33556805=null;var res_33556839=newSeq_33556822(s_33556804.length);var i_33556840=0;var j_33556841=0;Label1:do{Label2:while(true){if(!(i_33556840<s_33556804.length))break Label2;var c_33556842=s_33556804[i_33556840];if(c_33556842<128){res_33556839[j_33556841]=String.fromCharCode(c_33556842);i_33556840+=1}else{var helper_33556854=newSeq_33556822(0);Label3:do{Label4:while(true){if(!true)break Label4;var code_33556855=c_33556842.toString(16);if((code_33556855==null?0:code_33556855.length)==1){helper_33556854.push("%0")}else{helper_33556854.push("%")}helper_33556854.push(code_33556855);i_33556840+=1;if(s_33556804.length<=i_33556840)Temporary5=true;else{Temporary5=s_33556804[i_33556840]<128}if(Temporary5){break Label3}c_33556842=s_33556804[i_33556840]}}while(false);++excHandler;Temporary7=framePtr;try{res_33556839[j_33556841]=decodeURIComponent(helper_33556854.join(""));--excHandler}catch(EXCEPTION){var prevJSError=lastJSError;lastJSError=EXCEPTION;--excHandler;framePtr=Temporary7;res_33556839[j_33556841]=helper_33556854.join("");lastJSError=prevJSError}finally{framePtr=Temporary7}}j_33556841+=1}}while(false);if(res_33556839.length<j_33556841){for(var i=res_33556839.length;i<j_33556841;++i)res_33556839.push(null)}else{res_33556839.length=j_33556841}result_33556805=res_33556839.join("");return result_33556805}var inputTriggerEvents_1056964618=[makeNimstrLit("click")];if(!Math.trunc){Math.trunc=function(v){v=+v;if(!isFinite(v))return v;return v-v%1||(v<0?-0:v===0?v:0)}}var objectID_570425503=[0];function isFatPointer_33557131(ti_33557132){var result_33557133=false;BeforeRet:do{result_33557133=!(ConstSet1[ti_33557132.base.kind]!=undefined);break BeforeRet}while(false);return result_33557133}function nimCopyAux(dest_33557144,src_33557145,n_33557146){switch(n_33557146.kind){case 0:break;case 1:dest_33557144[n_33557146.offset]=nimCopy(dest_33557144[n_33557146.offset],src_33557145[n_33557146.offset],n_33557146.typ);break;case 2:for(var i=0;i<n_33557146.sons.length;i++){nimCopyAux(dest_33557144,src_33557145,n_33557146.sons[i])}break;case 3:dest_33557144[n_33557146.offset]=nimCopy(dest_33557144[n_33557146.offset],src_33557145[n_33557146.offset],n_33557146.typ);for(var i=0;i<n_33557146.sons.length;++i){nimCopyAux(dest_33557144,src_33557145,n_33557146.sons[i][1])}break}}function nsuJoinSep(a_805307710,sep_805307711){var result_805307712=[];if(0<a_805307710.length){var L_805307719=sep_805307711.length*(a_805307710.length-1);Label1:do{var i_805307727=0;var colontmp__1056964610=0;colontmp__1056964610=a_805307710.length-1;var res_1056964611=0;Label2:do{Label3:while(true){if(!(res_1056964611<=colontmp__1056964610))break Label3;i_805307727=res_1056964611;L_805307719+=a_805307710[i_805307727].length;res_1056964611+=1}}while(false)}while(false);result_805307712=nimCopy(null,mnewString(0),NTI33554439);result_805307712.push.apply(result_805307712,a_805307710[0]);Label4:do{var i_805307739=0;var colontmp__1056964614=0;colontmp__1056964614=a_805307710.length-1;var res_1056964615=1;Label5:do{Label6:while(true){if(!(res_1056964615<=colontmp__1056964614))break Label6;i_805307739=res_1056964615;result_805307712.push.apply(result_805307712,sep_805307711);result_805307712.push.apply(result_805307712,a_805307710[i_805307739]);res_1056964615+=1}}while(false)}while(false)}else{result_805307712=nimCopy(null,[],NTI33554439)}return result_805307712}function newSeq_33556822(len_33556824){var result_33556825=[];result_33556825=new Array(len_33556824);for(var i=0;i<len_33556824;++i){result_33556825[i]=null}return result_33556825}function add_33556415(x_33556416,x_33556416_Idx,y_33556417){if(x_33556416[x_33556416_Idx]===null){x_33556416[x_33556416_Idx]=[]}var off=x_33556416[x_33556416_Idx].length;x_33556416[x_33556416_Idx].length+=y_33556417.length;for(var i=0;i<y_33556417.length;++i){x_33556416[x_33556416_Idx][off+i]=y_33556417.charCodeAt(i)}}async function main_402653193(){async function handleInput_402653212(ev_402653213){var result_402653215=null;BeforeRet:do{if(ev_402653213.isTrusted){var el_402653221=ev_402653213.target;var text_402653222=window.prompt(el_402653221.getAttribute("placeholder"),el_402653221.value);if(!(text_402653222===null)){Label1:do{if(historyEnabled_402653205){if(text_402653222==historyCommand_402653210){el_402653221.value=await GM.getValue("history_value","");break Label1}await GM.setValue("history_value",text_402653222)}el_402653221.value=text_402653222}while(false)}}result_402653215=undefined;break BeforeRet}while(false);return result_402653215}var Temporary7;function HEX3Aanonymous_402653324(){var Temporary1;if(historyEnabled_402653205){Temporary1=makeNimstrLit("0")}else{Temporary1=makeNimstrLit("1")}var _=GM.setValue("history_enabled",toJSStr(Temporary1));window.alert("Success! Please reload the page")}function HEX3Aanonymous_402653332(){var Temporary1;var text_402653333=window.prompt("History command","");if(!!(text_402653333===null))Temporary1=false;else{Temporary1=!(text_402653333=="")}if(Temporary1){var _=GM.setValue("history_command",text_402653333);window.alert("Command successfully changed. Reload the page to use")}}function HEX3Aanonymous_402653344(){var _=GM.setValue("history_value","");window.alert("Successfully cleaned!")}var result_402653195=null;BeforeRet:do{var historyEnabled_402653205=await GM.getValue("history_enabled","1")=="1";var historyCommand_402653210=await GM.getValue("history_command","@");Label1:do{var el_402653282=null;var el_402653282_Idx=0;var colontmp__402653398=[];colontmp__402653398=document.querySelectorAll(toJSStr(nsuJoinSep(inputElements_1056964617,makeNimstrLit(","))));var i_402653400=0;var L_402653401=colontmp__402653398.length;Label2:do{Label3:while(true){if(!(i_402653400<L_402653401))break Label3;el_402653282=colontmp__402653398;el_402653282_Idx=i_402653400;Label4:do{var event_402653317=[];var i_402653396=0;Label5:do{Label6:while(true){if(!true)break Label6;event_402653317=inputTriggerEvents_1056964618[i_402653396];el_402653282[el_402653282_Idx].addEventListener(toJSStr(event_402653317),handleInput_402653212);if(0<=i_402653396){break Label5}i_402653396+=1}}while(false)}while(false);i_402653400+=1}}while(false)}while(false);if(historyEnabled_402653205){Temporary7=makeNimstrLit("Disable")}else{Temporary7=makeNimstrLit("Enable")}GM.registerMenuCommand(toJSStr((Temporary7||[]).concat(makeNimstrLit(" History")||[])),HEX3Aanonymous_402653324,"h");var fmtRes_402653331=[mnewString(0)];fmtRes_402653331[0].push.apply(fmtRes_402653331[0],makeNimstrLit("Change history command ("));add_33556415(fmtRes_402653331,0,historyCommand_402653210);fmtRes_402653331[0].push.apply(fmtRes_402653331[0],makeNimstrLit(")"));GM.registerMenuCommand(toJSStr(fmtRes_402653331[0]),HEX3Aanonymous_402653332,"c");var fmtRes_402653343=mnewString(0);fmtRes_402653343.push.apply(fmtRes_402653343,makeNimstrLit("Clean saved history"));GM.registerMenuCommand(toJSStr(fmtRes_402653343),HEX3Aanonymous_402653344,"c");result_402653195=undefined;break BeforeRet}while(false);return result_402653195}var _=main_402653193();