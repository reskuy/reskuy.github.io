(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5881ed06"],{"195f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-col",{directives:[{name:"show",rawName:"v-show",value:0==this.valid,expression:"this.valid == false"}]},[a("v-alert",{attrs:{text:"",type:"error"}},[t._v(' Kamu tidak punya akses Ke halaman "App Setting" ')])],1),a("v-alert",{staticStyle:{position:"fixed","z-index":"2",right:"20px"},attrs:{dismissible:"",color:"success",border:"left",elevation:"4","colored-border":"",transition:"slide-x-transition"},model:{value:t.Alert,callback:function(e){t.Alert=e},expression:"Alert"}},[a("v-icon",{staticClass:"mr-1"},[t._v("check-circle")]),t._v(" Data Berhasil Disimpan ")],1),a("v-alert",{staticStyle:{position:"fixed","z-index":"2",right:"20px"},attrs:{dismissible:"",color:"error",border:"left",elevation:"4","colored-border":"",transition:"slide-x-transition"},model:{value:t.AlertDataTerhapus,callback:function(e){t.AlertDataTerhapus=e},expression:"AlertDataTerhapus"}},[t._v(" Data Berhasil Dihapus ")]),a("v-alert",{staticStyle:{position:"fixed","z-index":"2",right:"20px"},attrs:{dismissible:"",color:"info",border:"left",elevation:"4","colored-border":"",transition:"slide-x-transition"},model:{value:t.AlertBerhasilTerubah,callback:function(e){t.AlertBerhasilTerubah=e},expression:"AlertBerhasilTerubah"}},[t._v(" Data Berhasil Diubah ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.loading,expression:"loading == true"}]},[a("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,absolute:"",top:"",height:"6",color:"red darken-4"}})],1),a("v-container",{directives:[{name:"show",rawName:"v-show",value:1==this.valid,expression:"this.valid == true"}],attrs:{fluid:""}},[a("div",{attrs:{id:"print"}},[a("v-toolbar",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"mb-3 rounded-lg",attrs:{flat:"",height:"55",color:t.$vuetify.theme.dark?"":"grey lighten-2"}},[a("v-toolbar-title",[t._v("Data AppSetting")]),a("v-spacer"),a("div",{staticClass:"text-center mx-2"},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":1,rounded:"lg","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile,expression:"mobile == false"}],staticClass:"text-capitalize rounded-lg",attrs:{outlined:"",text:"",disabled:1==t.loading},on:{click:function(e){t.MenuExport=!t.MenuExport}}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-table-arrow-down")]),a("span",{staticClass:"subtitle-1 mr-n1"},[t._v("Export Data")]),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.MenuExport?"mdi-chevron-up":"mdi-chevron-down"))])],1)]}}]),model:{value:t.MenuExport,callback:function(e){t.MenuExport=e},expression:"MenuExport"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.MenuExport,expression:"MenuExport"}],staticClass:"pa-2",attrs:{outlined:!!t.$vuetify.theme.dark}},[a("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg mb-2",attrs:{block:"",depressed:""},nativeOn:{click:function(e){return t.PdfExport(e)}}},[t._v(" Pdf ")]),a("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg mb-2",attrs:{block:"",depressed:""},nativeOn:{click:function(e){return t.excelExport(e)}}},[t._v(" Excel ")]),a("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg",attrs:{block:"",depressed:""},nativeOn:{click:function(e){return t.print(e)}}},[t._v(" print ")])],1)],1),a("v-dialog",{attrs:{"max-width":"200"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:1==t.mobile,expression:"mobile == true"}],staticClass:"rounded-lg",attrs:{outlined:"","x-small":"",text:"",height:"40px",width:"40px",disabled:1==t.loading}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-table-arrow-down")])],1)]}}]),model:{value:t.DialogPilihExport,callback:function(e){t.DialogPilihExport=e},expression:"DialogPilihExport"}},[a("v-card",{staticClass:"rounded-lg"},[a("v-toolbar",{attrs:{dense:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-toolbar-title",[t._v(" Pilih Export File ")])],1)],1),a("v-card",{staticClass:"pa-2"},[a("v-btn",{staticClass:"text-capitalize subtitle-1 mb-2",attrs:{text:"",block:"",outlined:""},nativeOn:{click:function(e){return t.PdfExport(e)}}},[t._v(" Pdf "),a("v-icon",{attrs:{right:""}},[t._v("mdi-adobe-acrobat")])],1),a("v-btn",{staticClass:"text-capitalize subtitle-1",attrs:{text:"",block:"",outlined:""},nativeOn:{click:function(e){return t.excelExport(e)}}},[t._v(" Excel "),a("v-icon",{attrs:{right:""}},[t._v("mdi-microsoft-excel")])],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px",scrollable:"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile&&1==t.ValidCreate,expression:"mobile == false && ValidCreate == true"}],staticClass:"text-capitalize mr-n2 rounded-lg",attrs:{color:"success",depressed:"",disabled:1==t.loading}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-thick")]),a("span",{staticClass:"subtitle-1"},[t._v("Tambah")])],1),a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile&&0==t.ValidCreate,expression:"mobile == false && ValidCreate == false"}],staticClass:"text-capitalize mr-n2 rounded-lg",attrs:{color:"success",depressed:"",disabled:0==t.ValidCreate}},"v-btn",n,!1),i),[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-thick")]),a("span",{staticClass:"subtitle-1"},[t._v("Tambah")])],1),a("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:1==t.mobile&&1==t.ValidCreate,expression:"mobile == true && ValidCreate == true"}],staticClass:"mr-n2 rounded-lg",attrs:{"x-small":"",depressed:"",color:"success",height:"40px",width:"40px",disabled:1==t.loading}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-plus-thick")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:1==t.mobile&&0==t.ValidCreate,expression:"mobile == true && ValidCreate == false"}],staticClass:"mr-n2 rounded-lg",attrs:{"x-small":"",depressed:"",color:"success",height:"40px",width:"40px",disabled:0==t.ValidCreate}},[a("v-icon",[t._v("mdi-plus-thick")])],1)]}}]),model:{value:t.DialogTambahAppSetting,callback:function(e){t.DialogTambahAppSetting=e},expression:"DialogTambahAppSetting"}},[a("v-card",{staticClass:"rounded-lg",attrs:{outlined:""}},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("span",[t._v(t._s(t.formTitleJabatan))])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.KeluarDialogAppSetting}},[a("v-icon",[t._v("mdi-window-close")])],1)],1),a("v-divider"),a("v-card-text",[a("div",{staticClass:"mr-n3 ml-n3 mb-n2 mt-3"},[a("v-sheet",{staticClass:"rounded-lg pa-2",attrs:{outlined:""}},[a("div",{staticClass:"pa-2"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Nama Setting")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-autocomplete",{attrs:{items:["NamaApp","NamaAlias","NamaPerusahaan","LogoApp","NotifLevel1","NotifLevel2","NotifLevel3","NotifLevel4","Kalender"],dense:""},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.NamaSetting,callback:function(e){t.NamaSetting=e},expression:"NamaSetting"}})],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showtextfield,expression:"showtextfield"}],attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[a("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Isi Setting")])]),a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[a("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[a("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.Nilai,callback:function(e){t.$set(t.editedItem,"Nilai",e)},expression:"editedItem.Nilai"}})],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showkalender,expression:"showkalender"}],attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-date-picker",{ref:"datepick",attrs:{"no-title":"",locale:"id-id","full-width":"","event-color":"green lighten-1",min:t.AwalTahun,max:t.AkhirTahun,multiple:"",events:t.functionEvents},model:{value:t.kalender,callback:function(e){t.kalender=e},expression:"kalender"}})],1)],1)],1)])],1)]),a("v-divider"),a("v-card-actions",[a("span",{staticClass:"d-inline-block text-truncate"},[a("label",[t._v("Status : "),a("span",[t._v(t._s(t.Status))])])]),a("v-spacer"),a("div",{staticClass:"mr-n2"},[a("v-btn",{staticClass:"text-capitalize rounded-lg subtitle-1",attrs:{dark:"",depressed:"",color:t.$vuetify.theme.dark?"white black--text":"grey darken-3"},on:{click:t.Simpan}},[a("span",[t._v("Simpan")])])],1)],1)],1)],1)],1),a("v-card",{staticClass:"pa-2 rounded-lg",attrs:{outlined:"",color:t.$vuetify.theme.dark?"":"grey lighten-2"}},[a("ejs-grid",{ref:"gridcabang",staticStyle:{height:"100%"},attrs:{height:t.mobile?"43vh":"41vh",gridLines:"Both",id:"cabangview",dataSource:t.DataSetting,allowPaging:!0,allowSorting:!0,allowResizing:!0,allowGrouping:!0,toolbar:t.toolbarOptions,commandClick:t.commandClick,pageSettings:t.pageSettings,allowExcelExport:!0,allowPdfExport:!0}},[a("e-columns",[a("e-column",{attrs:{headerText:"Aksi",textAlign:"Center",width:"120",commands:t.commands,lockColumn:!0,customAttributes:t.customAttributes}},[a("div",{staticClass:"btn-group"},[a("v-btn",{staticClass:"btn btn-default",attrs:{type:"button","(click)":"prediemRowEdit($event)"}},[a("i",{staticClass:"fa fa-pencil"})]),a("v-btn",{staticClass:"btn btn-default",attrs:{type:"button","(click)":"prediemRowDelete($event)"}},[a("i",{staticClass:"fa fa-trash"})])],1)]),a("e-column",{attrs:{field:"Nama",headerText:"Nama Setting",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"Nilai",headerText:"Isi Setting",width:"300"}}),a("e-column",{attrs:{field:"DibuatOleh",headerText:"DibuatOleh",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"DibuatTgl",headerText:"DibuatTgl",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"DiubahOleh",headerText:"DiubahOleh",textAlign:"Left",width:"150"}}),a("e-column",{attrs:{field:"DiubahTgl",headerText:"DiubahTgl",textAlign:"Left",width:"150"}})],1)],1)],1)],1)])],1)},n=[],s=a("2909"),l=a("1da1"),o=(a("1276"),a("ac1f"),a("caad"),a("99af"),a("4de4"),a("b0c0"),a("96cf"),a("2b0e")),r=a("c041"),c=a("af93"),d=a("e29d"),u=a("2375"),h=a("efb1"),m=a("e09d"),p=a("4f03"),v=a("b0e8"),f=a("6e1f"),g=a("c2da"),b=a("0dcc");o["a"].use(r["a"]);var x={data:function(){return{mobile:null,valid:null,showkalender:!1,showtextfield:!1,kalender:null,passbaru:null,NamaSetting:"",AwalTahun:(new Date).getFullYear()+"-01-01",AkhirTahun:parseInt((new Date).getFullYear())+parseInt(1)+"-12-31",Permission:[],DataPerusahaan:[],ValidCreate:!1,KodeCabang:null,textAktif:!0,umenu:[],verifpassbaru:null,loading:!0,Kode:null,DialogPilihExport:!1,windowSize:{x:0,y:0},MenuExport:!1,commands:[],customAttributes:{class:"customcss"},Alert:!1,akun:[],usermenu:null,AlertDataTerhapus:!1,AlertBerhasilTerubah:!1,user:[],token:null,DialogTambahAppSetting:!1,form:new FormData,editedIndex:-1,defaultItem:{id:"",NamaSetting:"",Nilai:""},editedItem:{id:"",NamaSetting:"",Nilai:""},toolbarOptions:["Search"],DataSetting:[],pageSettings:{pageSize:10,pageSizes:["5","10","15","20","50","All"]}}},provide:{grid:[c["a"],d["a"],u["a"],h["a"],m["a"],p["a"],v["a"],f["a"],g["a"]]},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.token=localStorage.getItem("token"),t.user=JSON.parse(localStorage.getItem("user")),t.Permission.some((function(t){return"R"==t}))?(t.valid=!0,t.getdata()):(t.loading=!1,t.valid=!1),t.Permission.some((function(t){return"C"==t}))&&(t.ValidCreate=!0),t.Permission.some((function(t){return"U"==t}))&&t.commands.push({buttonOption:{cssClass:"e-flat Edit",iconCss:"e-edit e-icons"}}),t.Permission.some((function(t){return"D"==t}))&&t.commands.push({buttonOption:{cssClass:"e-flat Delete",iconCss:"e-delete e-icons"}});case 6:case"end":return e.stop()}}),e)})))()},created:function(){console.log("param",this.$route.params.Permission);var t=this.$route.params.Permission;this.Permission=null==t?[]:t.split(",")},computed:{formTitleJabatan:function(){return-1===this.editedIndex?"Tambah Setting Baru":"Ubah Data Setting"},Status:function(){return-1===this.editedIndex?"Baru":"Ubah"}},watch:{NamaSetting:function(t){var e=["NamaApp","NamaAlias","NamaPerusahaan","LogoApp","NotifLevel1","NotifLevel2","NotifLevel3","NotifLevel4"];this.showkalender="Kalender"==t,e.includes(t)?this.showtextfield=!0:this.showtextfield=!1},windowSize:function(){this.windowSize.x<450?(this.titleClass="d-none",this.mobile=!0):(this.titleClass="mr-4",this.mobile=!1)},DialogTambahAppSetting:function(t){t||this.KeluarDialogAppSetting()},Alert:function(){this.AlertItem()},AlertDataTerhapus:function(){this.AlertItem()},AlertBerhasilTerubah:function(){this.AlertItem()}},methods:{functionEvents:function(t){var e=new Date(t).getDay();return!![0].includes(parseInt(e,10))&&["red"]},print:function(){for(var t=document.getElementById("print").innerHTML,e="",a=0,i=Object(s["a"])(document.querySelectorAll('link[rel="stylesheet"], style'));a<i.length;a++){var n=i[a];e+=n.outerHTML}var l=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");l.document.write("<!DOCTYPE html>\n        <html>\n          <head>\n            ".concat(e,"\n          </head>\n          <body>\n            ").concat(t,"\n          </body>\n        </html>")),l.document.close(),l.focus(),l.print(),l.close()},TextNamaPerusahaan:function(t){return t.KodePerusahaan+" — "+t.NamaPerusahaan},onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}},cariKode:function(t){var e=this;if(this.textAktif=null==t,null==t||""==t||0==t.length)this.editedIndex=-1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}));else{this.Kode=t.toUpperCase();var a=this.DataSetting.filter((function(e){return e.Kode==t.toUpperCase()}));a.length>0&&(this.editedIndex=1,this.textAktif=!1,this.editedItem.Nama=a[0].Nama)}},saya:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=t.$menu){e.next=5;break}return e.next=3,b["a"].get("/menu?token="+t.token,{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){if(e){t.akun=e.data;var a=t.$route.name,i=t.akun.filter((function(t){return t.Route==a}));i.length>0?t.valid=!0:(t.valid=!1,t.loading=!1)}})).catch((function(e){"Error: Request failed with status code 401"==e&&"/login"!=t.$route.path&&t.logout()}));case 3:e.next=9;break;case 5:t.akun=t.$menu,a=t.$route.name,i=t.akun.filter((function(t){return t.Route==a})),i.length>0?t.valid=!0:(t.valid=!1,t.loading=!1);case 9:case"end":return e.stop()}}),e)})))()},Simpan:function(){var t=this;"Tambah Setting Baru"===this.formTitleJabatan?(this.Toast("Data Disimpan"),b["a"].post("/appsetting?token="+this.token,{Nama:this.NamaSetting,Nilai:this.editedItem.Nilai},{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.token)}}).then((function(e){e&&t.getdata()}))):"Ubah Data Setting"===this.formTitleJabatan&&(this.Toast("Data Diubah"),b["a"].put("/appsetting/"+this.editedItem.id+"/?token="+this.token,{Nama:this.NamaSetting,Nilai:this.editedItem.Nilai},{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){e&&t.getdata()}))),this.KeluarDialogAppSetting()},commandClick:function(t){var e=this;if(t.target.classList.contains("custombutton"));else if(t.target.classList.contains("Delete")){var a=confirm("Yakin Hapus Data?");1==a&&(this.Toast("Data Dihapus"),b["a"].delete("/appsetting/"+t.rowData.id+"?token="+this.token).then((function(t){t&&(e.getdata(),e.AlertDataTerhapus=!0)})).catch((function(t){console.log(t)})))}else t.target.classList.contains("Edit")&&(this.editedItem.id=t.rowData.id,this.editedIndex=1,this.NamaSetting=t.rowData.Nama,this.editedItem.Nilai=t.rowData.Nilai,this.DialogTambahAppSetting=!0)},PdfExport:function(){var t=document.getElementById("cabangview").ej2_instances[0];t.pdfExportProperties={pageOrientation:"Landscape",fileName:"ReportJabatan.pdf"},t.columns[4].visible=!1,t.columns[5].visible=!1,t.columns[6].visible=!1,t.columns[7].visible=!1,this.$refs.gridcabang.pdfExport(t.pdfExportProperties)},excelExport:function(){this.$refs.gridcabang.excelExport()},KeluarDialogAppSetting:function(){var t=this;this.DialogTambahAppSetting=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.Kode=null,t.textAktif=!0}))},getdata:function(){var t=this;1==this.valid&&b["a"].get("/appsetting?token="+this.token).then((function(e){t.DataSetting=e.data,t.loading=!1}),(function(t){console.log(t)}))},Toast:function(t){this.$swal.fire({toast:!0,icon:"success",title:t,animation:!1,position:"top-right",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},Reset:function(){var t=this;this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem)}))},logout:function(){b["a"].post("/logout",this.token).then((function(t){})),localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!1)},AlertItem:function(){var t=this;window.setInterval((function(){t.Alert=!1,t.AlertDataTerhapus=!1,t.AlertBerhasilTerubah=!1}),3e3)}}},w=x,S=a("2877"),I=a("6544"),k=a.n(I),D=a("0798"),C=a("c6a6"),A=a("8336"),y=a("b0af"),T=a("99d9"),N=a("62ad"),_=a("a523"),V=a("2e4b"),E=a("169a"),O=a("ce7e"),P=a("132d"),z=a("a722"),$=a("e449"),L=a("8e36"),B=a("0fd9"),M=a("8dd9"),j=a("2fa4"),F=a("8654"),R=a("71d9"),K=a("2a7f"),J=a("269a"),U=a.n(J),Y=a("dc22"),H=Object(S["a"])(w,i,n,!1,null,null,null);e["default"]=H.exports;k()(H,{VAlert:D["a"],VAutocomplete:C["a"],VBtn:A["a"],VCard:y["a"],VCardActions:T["a"],VCardText:T["c"],VCol:N["a"],VContainer:_["a"],VDatePicker:V["a"],VDialog:E["a"],VDivider:O["a"],VIcon:P["a"],VLayout:z["a"],VMenu:$["a"],VProgressLinear:L["a"],VRow:B["a"],VSheet:M["a"],VSpacer:j["a"],VTextField:F["a"],VToolbar:R["a"],VToolbarTitle:K["b"]}),U()(H,{Resize:Y["a"]})},"2bfd":function(t,e,a){},a722:function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("layout")},c6a6:function(t,e,a){"use strict";var i=a("5530"),n=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("2bfd"),a("b974")),s=a("8654"),l=a("d9f7"),o=a("80d2"),r=Object(i["a"])(Object(i["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(o["n"])(e,t.itemText),i=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},r),t)},searchIsDirty:function(){return null!=this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(i["a"])(Object(i["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["s"].backspace&&t!==o["s"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var i=this.selectedItems.length,n=t!==i-1?t:t-1,s=this.selectedItems[n];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["m"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["m"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-5881ed06.060174a0.js.map