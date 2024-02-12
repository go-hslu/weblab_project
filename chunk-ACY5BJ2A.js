import{a as q,b as F,c as L}from"./chunk-VS2WYGEF.js";import{$c as k,Fa as u,Ga as p,Ha as l,O as I,T as d,U as S,Xb as R,Ya as f,Za as g,Zc as T,_a as x,ab as b,cd as D,ed as P,fb as h,m as C,md as O,na as m,nd as A,od as E,wb as B,x as M}from"./chunk-ZBK5AMV5.js";var Y=["canvas"],H=["radarImg"],Q=(()=>{let a=class a{constructor(t,e){this._techService=t,this._snackBar=e,this._techs=[],this._stateColors=["#B71C1C","#D84315","#689F38","#0277BD"],this._categories=Object.values(F),this._states=Object.values(L)}ngAfterViewInit(){let t=this.canvas.nativeElement.getContext("2d");t&&(this._ctx=t,this.initializeBackground())}ngOnInit(){this.loadTechs()}loadTechs(){this._techService.getAll().pipe(M(t=>{let e=[{id:"24109fad-ce53-4029-88f7-e92460639e42",name:"Fake",nameIdentifier:"fake",category:"framework",state:"hold",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra pretium dui sit amet rhoncus. Vivamus risus arcu, tincidunt eget ipsum sit amet, lacinia venenatis lacus. Integer volutpat dapibus pellentesque.",createdOn:new Date,createdBy:"admin@hslu.ch",updatedOn:new Date,updatedBy:"admin@hslu.ch",publication:new Date},{id:"e02e841b-4d0d-4392-ab95-2d66dbeeb9c4",name:"Technologies",nameIdentifier:"technologies",category:"language",state:"trial",description:"Vestibulum efficitur mauris eros, quis egestas mauris ullamcorper sodales. Integer consectetur scelerisque magna et vehicula. Suspendisse potenti. Morbi in velit mattis, blandit turpis sed, lacinia erat.",createdOn:new Date,createdBy:"admin@hslu.ch",updatedOn:new Date,updatedBy:"admin@hslu.ch",publication:null},{id:"e02e841b-4d0d-4392-ab95-2d66dbeeb9c4",name:"Loaded",nameIdentifier:"loaded",category:"platform",state:"adopt",description:"Aliquam erat volutpat. Curabitur tempor lorem eu ipsum pellentesque, a tincidunt purus laoreet. Integer sodales auctor sollicitudin. Suspendisse et erat ante. Suspendisse ac tortor id tortor ullamcorper fermentum vitae quis lectus.",createdOn:new Date,createdBy:"admin@hslu.ch",updatedOn:new Date,updatedBy:"admin@hslu.ch",publication:new Date}];return this._techs=e,A(this._snackBar,"API not accessible! Loading fake static data."),this.draw(),C(t)})).subscribe(t=>{this._techs=t,this.draw(),O(this._snackBar,`Data loaded successfully! (${t.length})`)})}initializeBackground(){this.radarImg.nativeElement.onload=()=>{this._ctx.drawImage(this.radarImg.nativeElement,100,100,800,400),this.draw()}}draw(){this._ctx.clearRect(0,0,1e3,800),this._ctx.drawImage(this.radarImg.nativeElement,100,100,800,400),this.drawRadar(),this.drawLabels(),this._techs.forEach(t=>{this.drawTech(this._states.indexOf(t.state),this._categories.indexOf(t.category),t.name)})}drawRadar(){this._ctx.strokeStyle="#fff",this._ctx.lineWidth=3,this._ctx.textAlign="center",this._ctx.font="16px Arial";let t=400/(this._states.length+1);this._ctx.beginPath();for(let i=1;i<this._states.length;i++)this._ctx.arc(500,500,400-i*t,Math.PI,0);let e=Math.PI/this._categories.length;for(let i=1;i<this._categories.length;i++){this._ctx.moveTo(500,500);let s=this.calculateCircleOuterPoint(Math.PI+e*i);this._ctx.lineTo(s.x,s.y)}this._ctx.stroke()}drawLabels(){let t=Math.PI/this._categories.length;for(let i=0;i<this._categories.length;i++){let s=this._categories[i],n=Math.PI+t*i+t/2,c=450*Math.cos(n)+500,o=450*Math.sin(n)+500;this._ctx.fillStyle="#000",this._ctx.fillText(s,c,o)}let e=400/(this._states.length+1);for(let i=0;i<this._states.length;i++){let s=this._states[i],n=100+e*i+e/2,c=900-e*i-e/2;this._ctx.fillStyle=this._stateColors[i],this._ctx.fillText(s,n,530),this._ctx.fillText(s,c,530)}}drawTech(t,e,i){let s=Math.PI/this._categories.length,n=Math.PI+s*e,c=n+s,o=this.randomBetween(n,c),_=400/(this._states.length+1),N=400-_*t,X=400-_*(t+1),v=this.randomBetween(X,N),y=v*Math.cos(o)+500,w=v*Math.sin(o)+500;this._ctx.fillStyle=this._stateColors[t],this._ctx.beginPath(),this._ctx.arc(y,w,10,0,2*Math.PI),this._ctx.fill(),this._ctx.fillStyle="#000",this._ctx.fillText(i,y,w+25)}calculateCircleOuterPoint(t){let n=400*Math.cos(t)+500,c=400*Math.sin(t)+500;return{x:n,y:c}}randomBetween(t,e){return Math.random()*(e-t)+t}};a.\u0275fac=function(e){return new(e||a)(m(q),m(E))},a.\u0275cmp=d({type:a,selectors:[["app-radar-canvas"]],viewQuery:function(e,i){if(e&1&&(f(Y,5),f(H,5)),e&2){let s;g(s=x())&&(i.canvas=s.first),g(s=x())&&(i.radarImg=s.first)}},standalone:!0,features:[h],decls:4,vars:0,consts:[["width","1000","height","600"],["canvas",""],["src","assets/radar-background.png","width","800","height","400","alt","",2,"display","none"],["radarImg",""]],template:function(e,i){e&1&&l(0,"canvas",0,1)(2,"img",2,3)}});let r=a;return r})();var V=(()=>{let a=class a{};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=d({type:a,selectors:[["app-radar-page"]],standalone:!0,features:[h],decls:6,vars:0,template:function(e,i){e&1&&(u(0,"mat-card")(1,"mat-card-header")(2,"h2"),b(3,"Radar"),p()(),u(4,"mat-card-content"),l(5,"app-radar-canvas"),p()())},dependencies:[Q,P,T,k,D],styles:["img[_ngcontent-%COMP%]{width:100%;max-width:800px}"]});let r=a;return r})();var z=[{path:"",component:V}];var dt=(()=>{let a=class a{};a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=S({type:a}),a.\u0275inj=I({imports:[B,R.forChild(z)]});let r=a;return r})();export{dt as RadarModule};
