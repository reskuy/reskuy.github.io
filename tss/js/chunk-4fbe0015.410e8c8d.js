(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbe0015"],{"3a2f":function(t,e,a){"use strict";var i=a("ade3"),n=(a("a9e3"),a("9734"),a("4ad4")),s=a("a9ad"),o=a("16b7"),r=a("b848"),l=a("75eb"),d=a("f573"),c=a("f2e7"),u=a("80d2"),h=a("d9bd"),m=a("58df");e["a"]=Object(m["a"])(s["a"],o["a"],r["a"],l["a"],d["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||i?s=n+e.width/2-a.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=i+e.height/2-a.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["f"])(this.maxWidth),minWidth:Object(u["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["p"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===u["s"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"4df2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-col",{directives:[{name:"show",rawName:"v-show",value:0==this.valid,expression:"this.valid == false"}]},[a("v-alert",{attrs:{text:"",type:"error"}},[t._v(' Kamu tidak punya akses Ke halaman "Master Menu" ')])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.loading,expression:"loading == true"}]},[a("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,absolute:"",top:"",height:"6",color:"red darken-4"}})],1),a("v-container",{directives:[{name:"show",rawName:"v-show",value:1==this.valid,expression:"this.valid == true"}],attrs:{fluid:""}},[a("div",{attrs:{id:"print"}},[a("v-toolbar",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"mb-3 rounded-lg",attrs:{flat:"",height:"55",color:t.$vuetify.theme.dark?"":"grey lighten-2"}},[a("v-toolbar-title",[t._v("Data Master Menu")]),a("v-spacer"),a("div",{staticClass:"text-center mx-2"},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":1,rounded:"lg","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile,expression:"mobile == false"}],staticClass:"text-capitalize rounded-lg",attrs:{outlined:"",text:"",disabled:1==t.loading},on:{click:function(e){t.MenuExport=!t.MenuExport}}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-table-arrow-down")]),a("span",{staticClass:"subtitle-1 mr-n1"},[t._v("Export Data")]),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.MenuExport?"mdi-chevron-up":"mdi-chevron-down"))])],1)]}}]),model:{value:t.MenuExport,callback:function(e){t.MenuExport=e},expression:"MenuExport"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.MenuExport,expression:"MenuExport"}],staticClass:"pa-2",attrs:{outlined:!!t.$vuetify.theme.dark}},[a("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg mb-2",attrs:{block:"",depressed:""},nativeOn:{click:function(e){return t.PdfExport(e)}}},[t._v(" Pdf ")]),a("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg mb-2",attrs:{block:"",depressed:""},nativeOn:{click:function(e){return t.excelExport(e)}}},[t._v(" Excel ")]),a("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg",attrs:{block:"",depressed:""},nativeOn:{click:function(e){return t.print(e)}}},[t._v(" print ")])],1)],1),a("v-dialog",{attrs:{"max-width":"200"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:1==t.mobile,expression:"mobile == true"}],staticClass:"rounded-lg",attrs:{outlined:"","x-small":"",text:"",height:"40px",width:"40px",disabled:1==t.loading}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-table-arrow-down")])],1)]}}]),model:{value:t.DialogPilihExport,callback:function(e){t.DialogPilihExport=e},expression:"DialogPilihExport"}},[a("v-card",{staticClass:"rounded-lg"},[a("v-toolbar",{attrs:{dense:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-toolbar-title",[t._v(" Pilih Export File ")])],1)],1),a("v-card",{staticClass:"pa-2"},[a("v-btn",{staticClass:"text-capitalize subtitle-1 mb-2",attrs:{text:"",block:"",outlined:""},nativeOn:{click:function(e){return t.PdfExport(e)}}},[t._v(" Pdf "),a("v-icon",{attrs:{right:""}},[t._v("mdi-adobe-acrobat")])],1),a("v-btn",{staticClass:"text-capitalize subtitle-1",attrs:{text:"",block:"",outlined:""},nativeOn:{click:function(e){return t.excelExport(e)}}},[t._v(" Excel "),a("v-icon",{attrs:{right:""}},[t._v("mdi-microsoft-excel")])],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500",scrollable:"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile&&1==t.ValidCreate,expression:"mobile == false && ValidCreate == true"}],staticClass:"text-capitalize mr-n2 rounded-lg",attrs:{color:"success",depressed:"",disabled:1==t.loading}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-thick")]),a("span",{staticClass:"subtitle-1"},[t._v("Tambah")])],1),a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile&&0==t.ValidCreate,expression:"mobile == false && ValidCreate == false"}],staticClass:"text-capitalize mr-n2 rounded-lg",attrs:{color:"success",depressed:"",disabled:0==t.ValidCreate}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-thick")]),a("span",{staticClass:"subtitle-1"},[t._v("Tambah")])],1),a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:1==t.mobile&&1==t.ValidCreate,expression:"mobile == true && ValidCreate == true"}],staticClass:"mr-n2 rounded-lg",attrs:{"x-small":"",depressed:"",color:"success",height:"40px",width:"40px",disabled:1==t.loading}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-plus-thick")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:1==t.mobile&&0==t.ValidCreate,expression:"mobile == true && ValidCreate == false"}],staticClass:"mr-n2 rounded-lg",attrs:{"x-small":"",depressed:"",color:"success",height:"40px",width:"40px",disabled:0==t.ValidCreate}},[a("v-icon",[t._v("mdi-plus-thick")])],1)]}}]),model:{value:t.DialogTambahMasterMenu,callback:function(e){t.DialogTambahMasterMenu=e},expression:"DialogTambahMasterMenu"}},[a("v-card",{staticClass:"rounded-lg"},[a("v-toolbar",{attrs:{flat:"",height:"64"}},[a("v-toolbar-title",[a("span",[t._v(t._s(t.formTitleMasterMenu))])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.KeluarDialogMasterMenu}},[a("v-icon",[t._v("mdi-window-close")])],1)],1),a("v-divider"),a("v-card-text",[a("div",{staticClass:"mr-n3 ml-n3 mb-n2 mt-3"},[a("v-sheet",{staticClass:"rounded-lg pa-2",attrs:{outlined:""}},[a("div",{staticClass:"pa-2"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Nama Menu")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.Nama,callback:function(e){t.$set(t.editedItem,"Nama",e)},expression:"editedItem.Nama"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Parent Id")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark",readonly:""},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null,{key:"append-outer",fn:function(){return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{color:t.$vuetify.theme.dark?"":"black"},on:{click:function(e){t.DialogParent=!0}}},"v-icon",n,!1),i),[t._v(" mdi-dots-horizontal ")])]}}])},[a("span",[t._v("Pilih Parent")])]),a("v-dialog",{attrs:{"max-width":"700",scrollable:"",persistent:""},model:{value:t.DialogParent,callback:function(e){t.DialogParent=e},expression:"DialogParent"}},[a("v-card",{staticClass:"rounded-lg",attrs:{outlined:""}},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("span",[t._v("Pilih Parent")])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.TutupParent()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-divider"),a("v-card-text",[a("div",{staticClass:"mb-n2 mr-n3 ml-n3"},[a("v-card",{staticClass:"rounded-lg mt-3 elevation-3",attrs:{outlined:""}},[a("div",{staticClass:"pa-2"},[a("ejs-grid",{ref:"grikodejabatan",attrs:{height:"208",gridLines:"Both",id:"kodejabatanview",dataSource:t.DataMenu,allowPaging:!0,allowSorting:!0,allowResizing:!0,toolbar:t.toolbarOptions,recordDoubleClick:t.rowDblClickKodeKaryawan,pageSettings:t.pageSettings,rowSelected:t.rowSelectedKodeKaryawan}},[a("e-columns",[a("e-column",{attrs:{field:"id",headerText:"Id",textAlign:"Left",width:"100"}}),a("e-column",{attrs:{field:"Nama",headerText:"Nama",textAlign:"Left",width:"150"}})],1)],1)],1)])],1)]),a("v-divider"),a("v-card-actions",[a("span",{staticClass:"d-inline-block text-truncate"},[t._v(" Status : "),a("span",[t._v("Pilih Menu")])]),a("v-spacer"),a("div",{staticClass:"mr-n2"},[a("v-btn",{staticClass:"text-capitalize rounded-lg subtitle-1",attrs:{dark:"",depressed:"",color:t.$vuetify.theme.dark?"white black--text":"grey darken-3"},on:{click:function(e){t.DialogParent=!1}}},[t._v(" Pilih ")])],1)],1)],1)],1)]},proxy:!0}],null,!0),model:{value:t.editedItem.parent,callback:function(e){t.$set(t.editedItem,"parent",e)},expression:"editedItem.parent"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Route")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.Route,callback:function(e){t.$set(t.editedItem,"Route",e)},expression:"editedItem.Route"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Icon")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.Icon,callback:function(e){t.$set(t.editedItem,"Icon",e)},expression:"editedItem.Icon"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Bahasa Indonesia")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.Idn,callback:function(e){t.$set(t.editedItem,"Idn",e)},expression:"editedItem.Idn"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Bahasa Inggris")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.Eng,callback:function(e){t.$set(t.editedItem,"Eng",e)},expression:"editedItem.Eng"}})],1)],1)],1)])],1)]),a("v-divider"),a("v-card-actions",[a("span",{staticClass:"d-inline-block text-truncate"},[a("label",[t._v("Status : "),a("span",[t._v(t._s(t.Status))])])]),a("v-spacer"),a("div",{staticClass:"mr-n2"},[a("v-btn",{staticClass:"text-capitalize rounded-lg subtitle-1",attrs:{dark:"",depressed:"",color:t.$vuetify.theme.dark?"white black--text":"grey darken-3"},on:{click:t.Simpan}},[a("span",[t._v("Simpan")])])],1)],1)],1)],1)],1),a("v-card",{staticClass:"pa-2 rounded-lg",attrs:{outlined:"",color:t.$vuetify.theme.dark?"":"grey lighten-2"}},[a("ejs-grid",{ref:"gridcabang",staticStyle:{height:"100%"},attrs:{height:t.mobile?"43vh":"41vh",gridLines:"Both",id:"cabangview",dataSource:t.DataMenu,allowPaging:!0,allowSorting:!0,allowResizing:!0,allowGrouping:!0,toolbar:t.toolbarOptions,commandClick:t.commandClick,pageSettings:t.pageSettings,allowExcelExport:!0,allowPdfExport:!0}},[a("e-columns",[a("e-column",{attrs:{headerText:"Aksi",textAlign:"Center",width:"120",commands:t.commands,lockColumn:!0,customAttributes:t.customAttributes}},[a("div",{staticClass:"btn-group"},[a("v-btn",{staticClass:"btn btn-default",attrs:{type:"button","(click)":"prediemRowEdit($event)"}},[a("i",{staticClass:"fa fa-pencil"})]),a("v-btn",{staticClass:"btn btn-default",attrs:{type:"button","(click)":"prediemRowDelete($event)"}},[a("i",{staticClass:"fa fa-trash"})])],1)]),a("e-column",{attrs:{field:"Nama",headerText:"Nama Halaman",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"parent.Nama",headerText:"Parent Id",width:"150"}}),a("e-column",{attrs:{field:"Route",headerText:"Route",width:"150"}}),a("e-column",{attrs:{field:"Icon",headerText:"Icon",width:"150"}}),a("e-column",{attrs:{field:"Idn",headerText:"Bhs Indo",width:"150"}}),a("e-column",{attrs:{field:"Eng",headerText:"Bhs Eng",width:"150"}}),a("e-column",{attrs:{field:"DibuatOleh",headerText:"DibuatOleh",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"DibuatTgl",headerText:"DibuatTgl",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"DiubahOleh",headerText:"DiubahOleh",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"DiubahTgl",headerText:"DiubahTgl",textAlign:"Left",width:"150"}})],1)],1)],1)],1)])],1)},n=[],s=a("2909"),o=a("1da1"),r=(a("1276"),a("ac1f"),a("99af"),a("4de4"),a("96cf"),a("2b0e")),l=a("c041"),d=a("af93"),c=a("e29d"),u=a("2375"),h=a("efb1"),m=a("e09d"),v=a("4f03"),p=a("b0e8"),f=a("6e1f"),g=a("c2da"),b=a("0dcc");r["a"].use(l["a"]);var x={data:function(){return{mobile:null,valid:null,DialogParent:!1,passbaru:null,Permission:[],DataPerusahaan:[],ValidCreate:!1,KodeCabang:null,textAktif:!0,umenu:[],verifpassbaru:null,loading:!0,Kode:null,DialogPilihExport:!1,windowSize:{x:0,y:0},MenuExport:!1,commands:[],customAttributes:{class:"customcss"},Alert:!1,akun:[],usermenu:null,AlertDataTerhapus:!1,AlertBerhasilTerubah:!1,user:[],token:null,DialogTambahMasterMenu:!1,form:new FormData,editedIndex:-1,defaultItem:{id:"",parent:"",ParentId:"",Nama:"",Route:"",Icon:"",Idn:"",Eng:""},editedItem:{id:"",parent:"",ParentId:"",Nama:"",Route:"",Icon:"",Idn:"",Eng:""},toolbarOptions:["Search"],DataMenu:[],pageSettings:{pageSize:10,pageSizes:["5","10","15","20","50","All"]}}},provide:{grid:[d["a"],c["a"],u["a"],h["a"],m["a"],v["a"],p["a"],f["a"],g["a"]]},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.token=localStorage.getItem("token"),t.user=JSON.parse(localStorage.getItem("user")),t.Permission.some((function(t){return"R"==t}))?(t.valid=!0,t.getdata()):(t.loading=!1,t.valid=!1),t.Permission.some((function(t){return"C"==t}))&&(t.ValidCreate=!0),t.Permission.some((function(t){return"U"==t}))&&t.commands.push({buttonOption:{cssClass:"e-flat Edit",iconCss:"e-edit e-icons"}}),t.Permission.some((function(t){return"D"==t}))&&t.commands.push({buttonOption:{cssClass:"e-flat Delete",iconCss:"e-delete e-icons"}});case 6:case"end":return e.stop()}}),e)})))()},created:function(){console.log("param",this.$route.params.Permission);var t=this.$route.params.Permission;this.Permission=null==t?[]:t.split(",")},computed:{formTitleMasterMenu:function(){return-1===this.editedIndex?"Tambah Menu Baru":"Ubah Data Menu"},Status:function(){return-1===this.editedIndex?"Baru":"Ubah"}},watch:{windowSize:function(){this.windowSize.x<450?(this.titleClass="d-none",this.mobile=!0):(this.titleClass="mr-4",this.mobile=!1)},DialogTambahMasterMenu:function(t){t||this.KeluarDialogMasterMenu()},Alert:function(){this.AlertItem()},AlertDataTerhapus:function(){this.AlertItem()},AlertBerhasilTerubah:function(){this.AlertItem()}},methods:{TutupParent:function(){this.editedItem.parent="",this.DialogParent=!1},print:function(){for(var t=document.getElementById("print").innerHTML,e="",a=0,i=Object(s["a"])(document.querySelectorAll('link[rel="stylesheet"], style'));a<i.length;a++){var n=i[a];e+=n.outerHTML}var o=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");o.document.write("<!DOCTYPE html>\n        <html>\n          <head>\n            ".concat(e,"\n          </head>\n          <body>\n            ").concat(t,"\n          </body>\n        </html>")),o.document.close(),o.focus(),o.print(),o.close()},TextNamaPerusahaan:function(t){return t.KodePerusahaan+" — "+t.NamaPerusahaan},onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}},cariKode:function(t){var e=this;if(this.textAktif=null==t,null==t||""==t||0==t.length)this.editedIndex=-1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}));else{this.Kode=t.toUpperCase();var a=this.DataMenu.filter((function(e){return e.Kode==t.toUpperCase()}));a.length>0&&(this.editedIndex=1,this.textAktif=!1,this.editedItem.Nama=a[0].Nama)}},Simpan:function(){var t=this;"Tambah Menu Baru"===this.formTitleMasterMenu?(this.Toast("Data Disimpan"),b["a"].post("/mastermenu?token="+this.token,{ParentId:this.editedItem.ParentId,Nama:this.editedItem.Nama,Route:this.editedItem.Route,Icon:this.editedItem.Icon,Idn:this.editedItem.Idn,Eng:this.editedItem.Eng},{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.token)}}).then((function(e){e&&t.getdata()}))):"Ubah Data Menu"===this.formTitleMasterMenu&&(this.Toast("Data Diubah"),b["a"].put("/mastermenu/"+this.editedItem.id+"/?token="+this.token,{ParentId:this.editedItem.ParentId,Nama:this.editedItem.Nama,Route:this.editedItem.Route,Icon:this.editedItem.Icon,Idn:this.editedItem.Idn,Eng:this.editedItem.Eng},{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){e&&t.getdata()}))),this.KeluarDialogMasterMenu()},rowSelectedKodeKaryawan:function(t){console.log(t),this.editedItem.ParentId=t.data.id,this.editedItem.parent=t.data.Nama},rowDblClickKodeKaryawan:function(t){this.editedItem.ParentId=t.rowData.id,this.editedItem.parent=t.rowData.Nama,this.DialogParent=!1},commandClick:function(t){var e=this;if(t.target.classList.contains("custombutton"));else if(t.target.classList.contains("Delete")){var a=confirm("Yakin Hapus Data?");1==a&&(this.Toast("Data Dihapus"),b["a"].delete("/mastermenu/"+t.rowData.id+"?token="+this.token).then((function(t){t&&(e.getdata(),e.AlertDataTerhapus=!0)})).catch((function(t){console.log(t)})))}else t.target.classList.contains("Edit")&&(console.log(t.rowData),this.editedItem.id=t.rowData.id,this.editedIndex=1,this.editedItem.Nama=t.rowData.Nama,this.editedItem.parent=null==t.rowData.parent?null:t.rowData.parent.Nama,this.editedItem.ParentId=t.rowData.ParentId,this.editedItem.Route=t.rowData.Route,this.editedItem.Icon=t.rowData.Route,this.editedItem.Eng=t.rowData.Eng,this.editedItem.Idn=t.rowData.Idn,this.DialogTambahMasterMenu=!0)},PdfExport:function(){var t=document.getElementById("cabangview").ej2_instances[0];t.pdfExportProperties={pageOrientation:"Landscape",fileName:"ReportJabatan.pdf"},t.columns[4].visible=!1,t.columns[5].visible=!1,t.columns[6].visible=!1,t.columns[7].visible=!1,this.$refs.gridcabang.pdfExport(t.pdfExportProperties)},excelExport:function(){this.$refs.gridcabang.excelExport()},KeluarDialogMasterMenu:function(){var t=this;this.DialogTambahMasterMenu=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.Kode=null,t.textAktif=!0}))},getdata:function(){var t=this;1==this.valid&&b["a"].get("/mastermenu?token="+this.token).then((function(e){t.DataMenu=e.data,t.loading=!1}),(function(t){console.log(t)}))},Toast:function(t){this.$swal.fire({toast:!0,icon:"success",title:t,animation:!1,position:"top-right",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},Reset:function(){var t=this;this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem)}))},logout:function(){b["a"].post("/logout",this.token).then((function(t){})),localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!1)},AlertItem:function(){var t=this;window.setInterval((function(){t.Alert=!1,t.AlertDataTerhapus=!1,t.AlertBerhasilTerubah=!1}),3e3)}}},w=x,I=a("2877"),k=a("6544"),C=a.n(k),D=a("0798"),y=a("8336"),_=a("b0af"),T=a("99d9"),P=a("62ad"),M=a("a523"),S=a("169a"),A=a("ce7e"),E=a("132d"),O=a("a722"),N=a("e449"),V=a("8e36"),R=a("0fd9"),z=a("8dd9"),j=a("2fa4"),B=a("8654"),$=a("71d9"),L=a("2a7f"),K=a("3a2f"),W=a("269a"),H=a.n(W),U=a("dc22"),F=Object(I["a"])(w,i,n,!1,null,null,null);e["default"]=F.exports;C()(F,{VAlert:D["a"],VBtn:y["a"],VCard:_["a"],VCardActions:T["a"],VCardText:T["c"],VCol:P["a"],VContainer:M["a"],VDialog:S["a"],VDivider:A["a"],VIcon:E["a"],VLayout:O["a"],VMenu:N["a"],VProgressLinear:V["a"],VRow:R["a"],VSheet:z["a"],VSpacer:j["a"],VTextField:B["a"],VToolbar:$["a"],VToolbarTitle:L["b"],VTooltip:K["a"]}),H()(F,{Resize:U["a"]})},9734:function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85");var i=a("e8f2"),n=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,s=e.data,o=e.children,r=s.attrs;return r&&(s.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),o)}})},a722:function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("layout")},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("498a"),a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("a15b");var i=a("2b0e");function n(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,s=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,s)}})}}}]);
//# sourceMappingURL=chunk-4fbe0015.410e8c8d.js.map