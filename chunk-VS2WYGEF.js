import{N as o,Q as n,xb as p}from"./chunk-ZBK5AMV5.js";var a=(()=>{let r=class r{constructor(t){this._http=t,this.url="http://localhost:8080/api"}getEntities(t){let s=`${this.url}/${t}`;return this._http.get(s)}getEntityById(t,s){let e=`${this.url}/${t}/${s}`;return this._http.get(e)}upsertEntity(t,s){let e=`${this.url}/${t}`;return this._http.post(e,s)}deleteEntityById(t,s){let e=`${this.url}/${t}/${s}`;return this._http.delete(e)}};r.\u0275fac=function(s){return new(s||r)(n(p))},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var d=(()=>{let r=class r{constructor(t,s){this._api=t,this._http=s,this._apiPath="techs"}getAll(){return this._api.getEntities(this._apiPath)}getById(t){return this._api.getEntityById(this._apiPath,t)}upsert(t){return this._api.upsertEntity(this._apiPath,t)}publish(t){let s=`${this._api.url}/${this._apiPath}/${t}/publish`;return this._http.post(s,{})}delete(t){return this._api.deleteEntityById(this._apiPath,t)}};r.\u0275fac=function(s){return new(s||r)(n(a),n(p))},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var c=function(i){return i.FRAMEWORK="framework",i.TOOL="tool",i.LANGUAGE="language",i.PLATFORM="platform",i.TECHNIQUE="technique",i}(c||{});var f=function(i){return i.HOLD="hold",i.ASSESS="assess",i.TRIAL="trial",i.ADOPT="adopt",i}(f||{});export{d as a,c as b,f as c};
