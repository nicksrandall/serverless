
export const tls_emscripten = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(tls_emscripten) {
  tls_emscripten = tls_emscripten || {};

var Module=typeof tls_emscripten!="undefined"?tls_emscripten:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){{if(Module["onAbort"]){Module["onAbort"](what)}}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;wasmBinaryFile="tls.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;exports=Asyncify.instrumentWasmExports(exports);Module["asm"]=exports;wasmMemory=Module["asm"]["k"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["q"];addOnInit(Module["asm"]["l"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);exports=Asyncify.instrumentWasmExports(exports);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync().catch(readyPromiseReject);return{}}function __asyncjs__jsProvideEncryptedFromNetwork(buff,sz){return Asyncify.handleAsync(async()=>{const bytesRead=await Module.provideEncryptedFromNetwork(buff,sz);return bytesRead})}function jsWriteEncryptedToNetwork(buff,sz){const bytesWritten=Module.writeEncryptedToNetwork(buff,sz);return bytesWritten}function __asyncjs__jsSha(shaVersion,buffDataIn,sz,buffDigest){return Asyncify.handleAsync(async()=>{if(buffDataIn!==0){if(Module._digestStream==null){const stream=new crypto.DigestStream(`SHA-${shaVersion}`);const writer=stream.getWriter();Module._digestStream={stream:stream,writer:writer}}const arrDataIn=Module.HEAPU8.subarray(buffDataIn,buffDataIn+sz);await Module._digestStream.writer.write(arrDataIn)}else{const{stream:stream,writer:writer}=Module._digestStream;await writer.close();const digest=await stream.digest;const arrDigest=new Uint8Array(digest);Module.HEAPU8.set(arrDigest,buffDigest);Module._digestStream=null}})}function __asyncjs__jsAesGcmEncrypt(dataBuff,dataSz,keyBuff,keySize,ivBuff,ivSz,authInBuff,authInSz,authTagBuff,authTagSz,outBuff){return Asyncify.handleAsync(async()=>{const iv=Module.HEAPU8.subarray(ivBuff,ivBuff+ivSz);const tagLength=authTagSz<<3;const additionalData=Module.HEAPU8.subarray(authInBuff,authInBuff+authInSz);const algorithm={name:"AES-GCM",iv:iv,tagLength:tagLength,additionalData:additionalData};const keyData=Module.HEAPU8.subarray(keyBuff,keyBuff+keySize);const key=await crypto.subtle.importKey("raw",keyData,{name:"AES-GCM"},false,["encrypt"]);const data=Module.HEAPU8.subarray(dataBuff,dataBuff+dataSz);const resultArrBuff=await crypto.subtle.encrypt(algorithm,key,data);const result=new Uint8Array(resultArrBuff);const cipherText=result.subarray(0,dataSz);const authTag=result.subarray(dataSz);Module.HEAPU8.set(cipherText,outBuff);Module.HEAPU8.set(authTag,authTagBuff)})}function __asyncjs__jsAesGcmDecrypt(dataBuff,dataSz,keyBuff,keySize,ivBuff,ivSz,authInBuff,authInSz,authTagBuff,authTagSz,outBuff){return Asyncify.handleAsync(async()=>{const iv=Module.HEAPU8.subarray(ivBuff,ivBuff+ivSz);const tagLength=authTagSz<<3;const additionalData=Module.HEAPU8.subarray(authInBuff,authInBuff+authInSz);const algorithm={name:"AES-GCM",iv:iv,tagLength:tagLength,additionalData:additionalData};const keyData=Module.HEAPU8.subarray(keyBuff,keyBuff+keySize);const key=await crypto.subtle.importKey("raw",keyData,{name:"AES-GCM"},false,["decrypt"]);const data=Module.HEAPU8.subarray(dataBuff,dataBuff+dataSz);const authTag=Module.HEAPU8.subarray(authTagBuff,authTagBuff+authTagSz);const taggedData=new Uint8Array(dataSz+authTagSz);taggedData.set(data);taggedData.set(authTag,dataSz);try{const resultArrBuff=await crypto.subtle.decrypt(algorithm,key,taggedData);const plainText=new Uint8Array(resultArrBuff);Module.HEAPU8.set(plainText,outBuff);return 0}catch(err){console.log("decrypt error:",err.message);return-1}})}function wc_GenerateSeed(os,output,sz){const entropy=Module.HEAPU8.subarray(output,output+sz);crypto.getRandomValues(entropy);return 0}function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function handleException(e){if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function readI53FromI64(ptr){return HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296}function __gmtime_js(time,tmPtr){var date=new Date(readI53FromI64(time)*1e3);HEAP32[tmPtr>>2]=date.getUTCSeconds();HEAP32[tmPtr+4>>2]=date.getUTCMinutes();HEAP32[tmPtr+8>>2]=date.getUTCHours();HEAP32[tmPtr+12>>2]=date.getUTCDate();HEAP32[tmPtr+16>>2]=date.getUTCMonth();HEAP32[tmPtr+20>>2]=date.getUTCFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getUTCDay();var start=Date.UTC(date.getUTCFullYear(),0,1,0,0,0,0);var yday=(date.getTime()-start)/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday}function allocateUTF8(str){var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8Array(str,HEAP8,ret,size);return ret}function _tzset_impl(timezone,daylight,tzname){var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAP32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);function extractZone(date){var match=date.toTimeString().match(/\(([A-Za-z ]+)\)$/);return match?match[1]:"GMT"}var winterName=extractZone(winter);var summerName=extractZone(summer);var winterNamePtr=allocateUTF8(winterName);var summerNamePtr=allocateUTF8(summerName);if(summerOffset<winterOffset){HEAPU32[tzname>>2]=winterNamePtr;HEAPU32[tzname+4>>2]=summerNamePtr}else{HEAPU32[tzname>>2]=summerNamePtr;HEAPU32[tzname+4>>2]=winterNamePtr}}function __tzset_js(timezone,daylight,tzname){if(__tzset_js.called)return;__tzset_js.called=true;_tzset_impl(timezone,daylight,tzname)}function _emscripten_date_now(){return Date.now()}function getHeapMax(){return 2147483648}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}let alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var SYSCALLS={varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret}};function _fd_close(fd){return 52}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){return 70}var printCharBuffers=[null,[],[]];function printChar(stream,curr){var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0}function runAndAbortIfError(func){try{return func()}catch(e){abort(e)}}function callUserCallback(func){if(ABORT){return}try{func()}catch(e){handleException(e)}}function runtimeKeepalivePush(){}function runtimeKeepalivePop(){}var Asyncify={State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:4096,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId:function(funcName){var id=Asyncify.callStackNameToId[funcName];if(id===undefined){id=Asyncify.callStackId++;Asyncify.callStackNameToId[funcName]=id;Asyncify.callStackIdToName[id]=funcName}return id},instrumentWasmImports:function(imports){var ASYNCIFY_IMPORTS=["env.invoke_*","env.emscripten_sleep","env.emscripten_wget","env.emscripten_wget_data","env.emscripten_idb_load","env.emscripten_idb_store","env.emscripten_idb_delete","env.emscripten_idb_exists","env.emscripten_idb_load_blob","env.emscripten_idb_store_blob","env.SDL_Delay","env.emscripten_scan_registers","env.emscripten_lazy_load_code","env.emscripten_fiber_swap","wasi_snapshot_preview1.fd_sync","env.__wasi_fd_sync","env._emval_await","env._dlopen_js","env.__asyncjs__*"].map(x=>x.split(".")[1]);for(var x in imports){(function(x){var original=imports[x];var sig=original.sig;if(typeof original=="function"){var isAsyncifyImport=ASYNCIFY_IMPORTS.indexOf(x)>=0||x.startsWith("__asyncjs__")}})(x)}},instrumentWasmExports:function(exports){var ret={};for(var x in exports){(function(x){var original=exports[x];if(typeof original=="function"){ret[x]=function(){Asyncify.exportCallStack.push(x);try{return original.apply(null,arguments)}finally{if(!ABORT){var y=Asyncify.exportCallStack.pop();assert(y===x);Asyncify.maybeStopUnwind()}}}}else{ret[x]=original}})(x)}return ret},maybeStopUnwind:function(){if(Asyncify.currData&&Asyncify.state===Asyncify.State.Unwinding&&Asyncify.exportCallStack.length===0){Asyncify.state=Asyncify.State.Normal;runAndAbortIfError(_asyncify_stop_unwind);if(typeof Fibers!="undefined"){Fibers.trampoline()}}},whenDone:function(){return new Promise((resolve,reject)=>{Asyncify.asyncPromiseHandlers={resolve:resolve,reject:reject}})},allocateData:function(){var ptr=_malloc(12+Asyncify.StackSize);Asyncify.setDataHeader(ptr,ptr+12,Asyncify.StackSize);Asyncify.setDataRewindFunc(ptr);return ptr},setDataHeader:function(ptr,stack,stackSize){HEAP32[ptr>>2]=stack;HEAP32[ptr+4>>2]=stack+stackSize},setDataRewindFunc:function(ptr){var bottomOfCallStack=Asyncify.exportCallStack[0];var rewindId=Asyncify.getCallStackId(bottomOfCallStack);HEAP32[ptr+8>>2]=rewindId},getDataRewindFunc:function(ptr){var id=HEAP32[ptr+8>>2];var name=Asyncify.callStackIdToName[id];var func=Module["asm"][name];return func},doRewind:function(ptr){var start=Asyncify.getDataRewindFunc(ptr);return start()},handleSleep:function(startAsync){if(ABORT)return;if(Asyncify.state===Asyncify.State.Normal){var reachedCallback=false;var reachedAfterCallback=false;startAsync(handleSleepReturnValue=>{if(ABORT)return;Asyncify.handleSleepReturnValue=handleSleepReturnValue||0;reachedCallback=true;if(!reachedAfterCallback){return}Asyncify.state=Asyncify.State.Rewinding;runAndAbortIfError(()=>_asyncify_start_rewind(Asyncify.currData));if(typeof Browser!="undefined"&&Browser.mainLoop.func){Browser.mainLoop.resume()}var asyncWasmReturnValue,isError=false;try{asyncWasmReturnValue=Asyncify.doRewind(Asyncify.currData)}catch(err){asyncWasmReturnValue=err;isError=true}var handled=false;if(!Asyncify.currData){var asyncPromiseHandlers=Asyncify.asyncPromiseHandlers;if(asyncPromiseHandlers){Asyncify.asyncPromiseHandlers=null;(isError?asyncPromiseHandlers.reject:asyncPromiseHandlers.resolve)(asyncWasmReturnValue);handled=true}}if(isError&&!handled){throw asyncWasmReturnValue}});reachedAfterCallback=true;if(!reachedCallback){Asyncify.state=Asyncify.State.Unwinding;Asyncify.currData=Asyncify.allocateData();if(typeof Browser!="undefined"&&Browser.mainLoop.func){Browser.mainLoop.pause()}runAndAbortIfError(()=>_asyncify_start_unwind(Asyncify.currData))}}else if(Asyncify.state===Asyncify.State.Rewinding){Asyncify.state=Asyncify.State.Normal;runAndAbortIfError(_asyncify_stop_rewind);_free(Asyncify.currData);Asyncify.currData=null;Asyncify.sleepCallbacks.forEach(func=>callUserCallback(func))}else{abort("invalid state: "+Asyncify.state)}return Asyncify.handleSleepReturnValue},handleAsync:function(startAsync){return Asyncify.handleSleep(wakeUp=>{startAsync().then(wakeUp)})}};function getCFunc(ident){var func=Module["_"+ident];return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var previousAsync=Asyncify.currData;var ret=func.apply(null,cArgs);function onDone(ret){runtimeKeepalivePop();if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}runtimeKeepalivePush();var asyncMode=opts&&opts.async;if(Asyncify.currData!=previousAsync){return Asyncify.whenDone().then(onDone)}ret=onDone(ret);if(asyncMode)return Promise.resolve(ret);return ret}function cwrap(ident,returnType,argTypes,opts){argTypes=argTypes||[];var numericArgs=argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var asmLibraryArg={"__asyncjs__jsAesGcmDecrypt":__asyncjs__jsAesGcmDecrypt,"__asyncjs__jsAesGcmEncrypt":__asyncjs__jsAesGcmEncrypt,"j":__asyncjs__jsProvideEncryptedFromNetwork,"__asyncjs__jsSha":__asyncjs__jsSha,"g":__gmtime_js,"h":__tzset_js,"f":_emscripten_date_now,"d":_emscripten_resize_heap,"e":_fd_close,"c":_fd_seek,"a":_fd_write,"i":jsWriteEncryptedToNetwork,"b":wc_GenerateSeed};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["l"]).apply(null,arguments)};var _initTls=Module["_initTls"]=function(){return(_initTls=Module["_initTls"]=Module["asm"]["m"]).apply(null,arguments)};var _readData=Module["_readData"]=function(){return(_readData=Module["_readData"]=Module["asm"]["n"]).apply(null,arguments)};var _writeData=Module["_writeData"]=function(){return(_writeData=Module["_writeData"]=Module["asm"]["o"]).apply(null,arguments)};var _pending=Module["_pending"]=function(){return(_pending=Module["_pending"]=Module["asm"]["p"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["r"]).apply(null,arguments)};var _free=Module["_free"]=function(){return(_free=Module["_free"]=Module["asm"]["s"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["t"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["u"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["v"]).apply(null,arguments)};var _asyncify_start_unwind=Module["_asyncify_start_unwind"]=function(){return(_asyncify_start_unwind=Module["_asyncify_start_unwind"]=Module["asm"]["w"]).apply(null,arguments)};var _asyncify_stop_unwind=Module["_asyncify_stop_unwind"]=function(){return(_asyncify_stop_unwind=Module["_asyncify_stop_unwind"]=Module["asm"]["x"]).apply(null,arguments)};var _asyncify_start_rewind=Module["_asyncify_start_rewind"]=function(){return(_asyncify_start_rewind=Module["_asyncify_start_rewind"]=Module["asm"]["y"]).apply(null,arguments)};var _asyncify_stop_rewind=Module["_asyncify_stop_rewind"]=function(){return(_asyncify_stop_rewind=Module["_asyncify_stop_rewind"]=Module["asm"]["z"]).apply(null,arguments)};var ___start_em_js=Module["___start_em_js"]=19232;var ___stop_em_js=Module["___stop_em_js"]=22506;Module["ccall"]=ccall;Module["cwrap"]=cwrap;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();


  return tls_emscripten.ready
}
);
})();
