(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1e9466"],{"0b7a":function(t,a,e){"use strict";e("7943")},"3a2f":function(t,a,e){"use strict";var i=e("ade3"),n=(e("a9e3"),e("9734"),e("4ad4")),s=e("a9ad"),o=e("16b7"),r=e("b848"),l=e("75eb"),d=e("f573"),c=e("f2e7"),u=e("80d2"),h=e("d9bd"),m=e("58df");a["a"]=Object(m["a"])(s["a"],o["a"],r["a"],l["a"],d["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,a=t.activator,e=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?a.offsetLeft:a.left,s=0;return this.top||this.bottom||i?s=n+a.width/2-e.width/2:(this.left||this.right)&&(s=n+(this.right?a.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,a=t.activator,e=t.content,i=!1!==this.attach?a.offsetTop:a.top,n=0;return this.top||this.bottom?n=i+(this.bottom?a.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=i+a.height/2-e.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["f"])(this.maxWidth),minWidth:Object(u["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["p"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,a=n["a"].options.methods.genActivatorListeners.call(this);return a.focus=function(a){t.getActivator(a),t.runDelay("open")},a.blur=function(a){t.getActivator(a),t.runDelay("close")},a.keydown=function(a){a.keyCode===u["s"].esc&&(t.getActivator(a),t.runDelay("close"))},a},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var a=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[a.genTransition()]})),this.genActivator()])}})},"4d49":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("v-col",{directives:[{name:"show",rawName:"v-show",value:0==this.valid,expression:"this.valid == false"}]},[e("v-alert",{attrs:{text:"",type:"error"}},[t._v(' Kamu tidak punya akses Ke halaman "JabatanKaryawan" ')])],1),e("v-alert",{staticClass:"rounded-lg",staticStyle:{position:"fixed","z-index":"2",right:"20px"},attrs:{dark:"",dismissible:"",elevation:"4",color:"success",icon:"mdi-check-bold",transition:"slide-x-transition"},model:{value:t.Alert,callback:function(a){t.Alert=a},expression:"Alert"}},[e("v-icon",{staticClass:"mr-1"},[t._v("check-circle")]),t._v(" Data Berhasil Disimpan ")],1),e("v-alert",{staticClass:"rounded-lg",staticStyle:{position:"fixed","z-index":"2",right:"20px"},attrs:{dark:"",dismissible:"",elevation:"4",color:"success",icon:"mdi-check-bold",transition:"slide-x-transition"},model:{value:t.AlertBerhasilTerubah,callback:function(a){t.AlertBerhasilTerubah=a},expression:"AlertBerhasilTerubah"}},[t._v(" Data Berhasil Diubah ")]),e("v-alert",{staticClass:"rounded-lg",staticStyle:{position:"fixed","z-index":"2",right:"20px"},attrs:{dark:"",dismissible:"",color:"error",elevation:"4",icon:"mdi-delete",transition:"slide-x-transition"},model:{value:t.AlertDataTerhapus,callback:function(a){t.AlertDataTerhapus=a},expression:"AlertDataTerhapus"}},[t._v(" Data Berhasil Dihapus ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.loading,expression:"loading == true"}]},[e("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,absolute:"",top:"",height:"6",color:"red darken-4"}})],1),e("v-container",{directives:[{name:"show",rawName:"v-show",value:1==this.valid,expression:"this.valid == true"}],attrs:{fluid:""}},[e("v-toolbar",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"mb-3 rounded-lg",attrs:{flat:"",height:"55",color:t.$vuetify.theme.dark?"":"grey lighten-2"}},[e("v-toolbar-title",[t._v("Data Jabatan Karyawan")]),e("v-spacer"),e("div",{staticClass:"text-center mx-2"},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":1,rounded:"lg","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile,expression:"mobile == false"}],staticClass:"text-capitalize rounded-lg",attrs:{outlined:"",text:"",disabled:1==t.loading},on:{click:function(a){t.MenuExport=!t.MenuExport}}},"v-btn",n,!1),i),[e("v-icon",{attrs:{left:""}},[t._v("mdi-table-arrow-down")]),e("span",{staticClass:"subtitle-1 mr-n1"},[t._v("Export Data")]),e("v-icon",{attrs:{right:""}},[t._v(t._s(t.MenuExport?"mdi-chevron-up":"mdi-chevron-down"))])],1)]}}]),model:{value:t.MenuExport,callback:function(a){t.MenuExport=a},expression:"MenuExport"}},[e("v-card",{directives:[{name:"show",rawName:"v-show",value:t.MenuExport,expression:"MenuExport"}],staticClass:"pa-2",attrs:{outlined:!!t.$vuetify.theme.dark}},[e("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg mb-2",attrs:{block:"",depressed:""},nativeOn:{click:function(a){return t.PdfExport(a)}}},[t._v(" Pdf ")]),e("v-btn",{staticClass:"text-capitalize subtitle-1 rounded-lg",attrs:{block:"",depressed:""},nativeOn:{click:function(a){return t.excelExport(a)}}},[t._v(" Excel ")])],1)],1),e("v-dialog",{attrs:{"max-width":"200"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:1==t.mobile,expression:"mobile == true"}],staticClass:"rounded-lg",attrs:{outlined:"","x-small":"",text:"",height:"40px",width:"40px",disabled:1==t.loading}},"v-btn",n,!1),i),[e("v-icon",[t._v("mdi-table-arrow-down")])],1)]}}]),model:{value:t.DialogPilihExport,callback:function(a){t.DialogPilihExport=a},expression:"DialogPilihExport"}},[e("v-card",{staticClass:"rounded-lg"},[e("v-toolbar",{attrs:{dense:""}},[e("v-layout",{attrs:{"justify-center":""}},[e("v-toolbar-title",[t._v(" Pilih Export File ")])],1)],1),e("v-card",{staticClass:"pa-2"},[e("v-btn",{staticClass:"text-capitalize subtitle-1 mb-2",attrs:{text:"",block:"",outlined:""},nativeOn:{click:function(a){return t.PdfExport(a)}}},[t._v(" Pdf "),e("v-icon",{attrs:{right:""}},[t._v("mdi-adobe-acrobat")])],1),e("v-btn",{staticClass:"text-capitalize subtitle-1",attrs:{text:"",block:"",outlined:""},nativeOn:{click:function(a){return t.excelExport(a)}}},[t._v(" Excel "),e("v-icon",{attrs:{right:""}},[t._v("mdi-microsoft-excel")])],1)],1)],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500",scrollable:"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile&&1==t.ValidCreate,expression:"mobile == false && ValidCreate == true"}],staticClass:"text-capitalize mr-n2 rounded-lg",attrs:{color:"success",depressed:"",disabled:1==t.loading}},"v-btn",n,!1),i),[e("v-icon",{attrs:{left:""}},[t._v("mdi-plus-thick")]),e("span",{staticClass:"subtitle-1"},[t._v("Tambah")])],1),e("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:0==t.mobile&&0==t.ValidCreate,expression:"mobile == false && ValidCreate == false"}],staticClass:"text-capitalize mr-n2 rounded-lg",attrs:{color:"success",depressed:"",disabled:0==t.ValidCreate}},"v-btn",n,!1),i),[e("v-icon",{attrs:{left:""}},[t._v("mdi-plus-thick")]),e("span",{staticClass:"subtitle-1"},[t._v("Tambah")])],1),e("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:1==t.mobile&&1==t.ValidCreate,expression:"mobile == true && ValidCreate == true"}],staticClass:"mr-n2 rounded-lg",attrs:{"x-small":"",depressed:"",color:"success",height:"40px",width:"40px",disabled:1==t.loading}},"v-btn",n,!1),i),[e("v-icon",[t._v("mdi-plus-thick")])],1),e("v-btn",{directives:[{name:"show",rawName:"v-show",value:1==t.mobile&&0==t.ValidCreate,expression:"mobile == true && ValidCreate == false"}],staticClass:"mr-n2 rounded-lg",attrs:{"x-small":"",depressed:"",color:"success",height:"40px",width:"40px",disabled:0==t.ValidCreate}},[e("v-icon",[t._v("mdi-plus-thick")])],1)]}}]),model:{value:t.DialogTambahKontrak,callback:function(a){t.DialogTambahKontrak=a},expression:"DialogTambahKontrak"}},[e("v-card",{staticClass:"rounded-lg",attrs:{outlined:""}},[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[e("span",[t._v(t._s(t.formTitleKontrak))])]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:t.KeluarDialogKontrak}},[e("v-icon",[t._v("mdi-window-close")])],1)],1),e("v-divider"),e("v-card-text",[e("div",{staticClass:"mr-n3 ml-n3 mb-n2 mt-3"},[e("v-sheet",{staticClass:"rounded-lg pa-2",attrs:{outlined:""}},[e("div",{staticClass:"pa-2"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[e("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Nama Karyawan")])]),e("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"7",md:"7",lg:"7"}},[e("v-text-field",{attrs:{dense:"",readonly:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[e("span",[t._v(":")])]},proxy:!0}:null,{key:"append-outer",fn:function(){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-icon",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:"Tambah Kontrak Baru"==t.formTitleKontrak,expression:"formTitleKontrak == 'Tambah Kontrak Baru'"}],attrs:{color:t.$vuetify.theme.dark?"":"black"},on:{click:t.DialogPilihKaryawan}},"v-icon",n,!1),i),[t._v(" mdi-dots-horizontal ")])]}}])},[e("span",[t._v("Pilih Karyawan")])]),e("v-dialog",{attrs:{"max-width":"1000px",scrollable:"",persistent:""},model:{value:t.DialogPilihKaryawan,callback:function(a){t.DialogPilihKaryawan=a},expression:"DialogPilihKaryawan"}},[e("v-card",{staticClass:"rounded-lg",attrs:{outlined:""}},[e("v-toolbar",{attrs:{flat:"",height:"64"}},[e("v-toolbar-title",[e("span",[t._v(t._s(t.formTitlePilihKaryawan))])]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:t.KeluarDialogPilihKaryawan}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-divider"),e("v-card-text",[e("div",{staticClass:"mb-n2 mr-n3 ml-n3"},[e("v-card",{staticClass:"mt-3 elevation-3",attrs:{tile:"",outlined:""}},[e("div",{staticClass:"pa-2"},[e("ejs-grid",{ref:"grikaryawan",attrs:{height:"208",gridLines:"Both",id:"karyawanview",dataSource:t.DataKaryawan,allowPaging:!0,allowSorting:!0,allowResizing:!0,toolbar:t.toolbarOptions,recordDoubleClick:t.rowDblClickPilihKaryawan,pageSettings:t.pageSettings,rowSelected:t.rowSelectedPilihKaryawan}},[e("e-columns",[e("e-column",{attrs:{field:"KodeKaryawan",headerText:"Kode",textAlign:"Left",width:"120"}}),e("e-column",{attrs:{field:"Nama",headerText:"Nama",textAlign:"Left",width:"300"}}),e("e-column",{attrs:{field:"jabatan.NamaJabatan",headerText:"Jabatan",textAlign:"Left",width:"150"}}),e("e-column",{attrs:{field:"jabatan.Departemen",headerText:"Departemen",textAlign:"Left",width:"150"}}),e("e-column",{attrs:{field:"jabatan.Divisi",headerText:"Divisi",textAlign:"Left",width:"150"}})],1)],1)],1)])],1)]),e("v-divider"),e("v-card-actions",[e("span",{staticClass:"d-inline-block text-truncate"},[t._v(" Status : "),e("span",[t._v(t._s(t.StatusFormPilihKaryawan))])]),e("v-spacer"),e("div",{staticClass:"mr-n2"},[e("v-btn",{staticClass:"text-capitalize rounded-lg subtitle-1",attrs:{dark:"",depressed:"",color:t.$vuetify.theme.dark?"white black--text":"grey darken-3"},on:{click:t.PilihNamaKaryawan}},[t._v(" Pilih ")])],1)],1)],1)],1)]},proxy:!0}],null,!0),model:{value:t.editedItem.Nama,callback:function(a){t.$set(t.editedItem,"Nama",a)},expression:"editedItem.Nama"}})],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[e("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("No Kontrak")])]),e("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"7",md:"7",lg:"7"}},[e("v-text-field",{attrs:{dense:"",color:"dark"},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[e("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.NoKontrak,callback:function(a){t.$set(t.editedItem,"NoKontrak",a)},expression:"editedItem.NoKontrak"}})],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[e("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Tgl Mulai")])]),e("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"7",md:"7",lg:"7"}},[e("v-dialog",{attrs:{"return-value":t.date,width:"290px"},on:{"update:returnValue":function(a){t.date=a},"update:return-value":function(a){t.date=a}},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-text-field",t._g(t._b({attrs:{"append-icon":"mdi-calendar",color:"dark",readonly:"",dense:""},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[e("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.TanggalMulai,callback:function(a){t.$set(t.editedItem,"TanggalMulai",a)},expression:"editedItem.TanggalMulai"}},"v-text-field",n,!1),i))]}}]),model:{value:t.MenuTglMulai,callback:function(a){t.MenuTglMulai=a},expression:"MenuTglMulai"}},[e("v-date-picker",{staticClass:"rounded-lg",attrs:{"year-icon":"mdi-calendar-blank",min:t.minDate,max:t.maxDate,color:"red darken-4",locale:"id"},on:{input:function(a){t.MenuTglMulai=!1}},model:{value:t.editedItem.TanggalMulai,callback:function(a){t.$set(t.editedItem,"TanggalMulai",a)},expression:"editedItem.TanggalMulai"}})],1)],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[e("span",{class:t.mobile?"subtitle-2":"subtitle-1"},[t._v("Tgl Akhir")])]),e("v-col",{staticClass:"mt-n1",attrs:{cols:"12",sm:"7",md:"7",lg:"7"}},[e("v-dialog",{attrs:{"return-value":t.date,width:"290px"},on:{"update:returnValue":function(a){t.date=a},"update:return-value":function(a){t.date=a}},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-text-field",t._g(t._b({attrs:{"append-icon":"mdi-calendar",color:"dark",readonly:"",dense:""},scopedSlots:t._u([0==t.mobile?{key:"prepend",fn:function(){return[e("span",[t._v(":")])]},proxy:!0}:null],null,!0),model:{value:t.editedItem.TanggalAkhir,callback:function(a){t.$set(t.editedItem,"TanggalAkhir",a)},expression:"editedItem.TanggalAkhir"}},"v-text-field",n,!1),i))]}}]),model:{value:t.MenuTglAkhir,callback:function(a){t.MenuTglAkhir=a},expression:"MenuTglAkhir"}},[e("v-date-picker",{staticClass:"rounded-lg",attrs:{min:t.minDate,max:t.maxDate,"year-icon":"mdi-calendar-blank",color:"red darken-4",locale:"id"},on:{input:function(a){t.MenuTglAkhir=!1}},model:{value:t.editedItem.TanggalAkhir,callback:function(a){t.$set(t.editedItem,"TanggalAkhir",a)},expression:"editedItem.TanggalAkhir"}})],1)],1)],1)],1)])],1)]),e("v-divider"),e("v-card-actions",[e("span",{staticClass:"d-inline-block text-truncate"},[t._v(" Status : "),e("span",[t._v(t._s(t.Status))])]),e("v-spacer"),e("div",{staticClass:"mr-n2"},[e("v-btn",{staticClass:"text-capitalize rounded-lg subtitle-1",attrs:{dark:"",depressed:"",color:t.$vuetify.theme.dark?"white black--text":"grey darken-3"},on:{click:t.Simpan}},[e("span",[t._v("Simpan")])])],1)],1)],1)],1)],1),e("v-card",{staticClass:"pa-2 rounded-lg",attrs:{outlined:"",color:t.$vuetify.theme.dark?"":"grey lighten-2"}},[e("div",[e("ejs-grid",{ref:"gridkontrak",staticStyle:{height:"100%"},attrs:{height:t.mobile?"43vh":"41vh",gridLines:"Both",id:"jabatankaryawanview",dataSource:t.DataKontrak,allowPaging:!0,allowSorting:!0,allowResizing:!0,allowGrouping:!0,toolbar:t.toolbarOptions,commandClick:t.commandClick,pageSettings:t.pageSettings,allowExcelExport:!0,allowPdfExport:!0}},[e("e-columns",[e("e-column",{attrs:{headerText:"Aksi",textAlign:"Center",width:"120",commands:t.commands,lockColumn:!0,customAttributes:t.customAttributes}},[e("div",{staticClass:"btn-group"},[e("v-btn",{staticClass:"btn btn-default",attrs:{type:"button","(click)":"prediemRowEdit($event)"}},[e("i",{staticClass:"fa fa-pencil"})]),e("v-btn",{staticClass:"btn btn-default",attrs:{type:"button","(click)":"prediemRowDelete($event)"}},[e("i",{staticClass:"fa fa-trash"})])],1)]),e("e-column",{attrs:{field:"IdKaryawan.Nama",headerText:"Nama",textAlign:"Left",width:"300"}}),e("e-column",{attrs:{field:"IdJabatan.NamaJabatan",headerText:"Jabatan",textAlign:"Left",width:"150"}}),e("e-column",{attrs:{field:"DibuatOleh",headerText:"DibuatOleh",textAlign:"Left",width:"150"}}),e("e-column",{attrs:{field:"DibuatTgl",headerText:"DibuatTgl",textAlign:"Left",width:"150"}}),e("e-column",{attrs:{field:"DiubahOleh",headerText:"DiubahOleh",textAlign:"Left",width:"150"}}),e("e-column",{attrs:{field:"DiubahTgl",headerText:"DiubahTgl",textAlign:"Left",width:"150"}})],1)],1)],1)])],1),e("v-dialog",{attrs:{"max-width":"500px",scrollable:""},model:{value:t.DialogLihatKontrak,callback:function(a){t.DialogLihatKontrak=a},expression:"DialogLihatKontrak"}},[e("v-card",{staticClass:"rounded-lg"},[e("v-toolbar",{attrs:{flat:"",height:"64"}},[e("v-toolbar-title",{staticClass:"title"},[e("span",{staticClass:"text-h5 mx-1"},[t._v("Detail Kontrak Karyawan")])]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.DialogLihatKontrak=!1}}},[e("v-icon",[t._v("mdi-window-close")])],1)],1),e("v-divider"),e("v-card-text",[e("div",{staticClass:"mt-1 mb-n4 mr-n5 ml-n5"},t._l(t.LihatKontrakData,(function(a,i){return e("div",{key:i,staticClass:"pa-3"},[e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.mobile,expression:"mobile == false"}]},[e("v-sheet",{staticClass:"rounded-lg elevation-8",attrs:{outlined:""}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-avatar",{staticClass:"rounded-lg"},[e("v-avatar",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)>new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) > new Date(today)"}],staticClass:"rounded-lg",attrs:{outlined:"",color:"success"}},[e("span",{staticClass:"white--text text-h5",domProps:{textContent:t._s(a.NoKontrak)}})]),e("v-avatar",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)<=new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) <= new Date(today)"}],staticClass:"rounded-lg",attrs:{outlined:"",color:"error"}},[e("span",{staticClass:"white--text text-h5",domProps:{textContent:t._s(a.NoKontrak)}})])],1),e("v-divider",{staticClass:"mr-3",attrs:{vertical:""}}),e("v-list-item-content",[e("v-list-item-title",[t._v("Nama")]),e("v-list-item-subtitle",{domProps:{textContent:t._s(t.LihatKontrakData.Nama)}})],1),e("v-list-item-content",[e("v-row",{staticClass:"justify-end",attrs:{dense:"","no-gutters":""}},[e("div",{staticClass:"mr-6"},[e("span",[t._v("Mulai")])]),e("div",[t._v(": "),e("span",{domProps:{textContent:t._s(a.TanggalMulai)}})])]),e("v-row",{staticClass:"justify-end",attrs:{dense:"","no-gutters":""}},[e("div",{staticClass:"mr-2"},[e("span",[t._v("Berakhir")])]),e("div",[t._v(": "),e("span",{domProps:{textContent:t._s(a.TanggalAkhir)}})])])],1)],1),e("div",{staticClass:"mb-n4"},[e("v-alert",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)>new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) > new Date(today)"}],staticClass:"rounded-b-lg",attrs:{text:"",dense:"",type:"success"}},[e("span",[t._v("Kontrak Berjalan")])]),e("v-alert",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)<=new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) <= new Date(today)"}],staticClass:"rounded-b-lg",attrs:{text:"",dense:"",type:"error"}},[e("span",[t._v("Kontrak Telah Habis")])])],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.mobile,expression:"mobile == true"}]},[e("v-sheet",{staticClass:"rounded-lg elevation-8",attrs:{outlined:""}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-avatar",{staticClass:"rounded-lg",attrs:{size:"35"}},[e("v-avatar",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)>new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) > new Date(today)"}],staticClass:"rounded-lg",attrs:{outlined:"",color:"success"}},[e("span",{staticClass:"white--text text-h6",domProps:{textContent:t._s(a.NoKontrak)}})]),e("v-avatar",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)<=new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) <= new Date(today)"}],staticClass:"rounded-lg",attrs:{outlined:"",color:"error"}},[e("span",{staticClass:"white--text text-h6",domProps:{textContent:t._s(a.NoKontrak)}})])],1),e("v-divider",{staticClass:"mr-3",attrs:{vertical:""}}),e("v-list-item-content",[e("v-list-item-title",[t._v("Nama")]),e("v-list-item-subtitle",{domProps:{textContent:t._s(t.LihatKontrakData.Nama)}})],1)],1),e("v-divider"),e("v-list-item",[e("v-list-item-content",{staticClass:"text-center"},[e("v-list-item-title",[t._v("Mulai")]),e("v-list-item-subtitle",{domProps:{textContent:t._s(a.TanggalMulai)}})],1),e("v-list-item-content",{staticClass:"text-center"},[e("v-list-item-title",[t._v("Berakhir")]),e("v-list-item-subtitle",{domProps:{textContent:t._s(a.TanggalAkhir)}})],1)],1),e("div",{staticClass:"mb-n4"},[e("v-alert",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)>new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) > new Date(today)"}],staticClass:"rounded-b-lg",attrs:{text:"",dense:"",type:"success"}},[e("span",[t._v("Jabatan Aktif")])]),e("v-alert",{directives:[{name:"show",rawName:"v-show",value:new Date(a.TanggalAkhir)<=new Date(t.today),expression:"new Date(kontrak.TanggalAkhir) <= new Date(today)"}],staticClass:"rounded-b-lg",attrs:{text:"",dense:"",type:"error"}},[e("span",[t._v("Jabatan Non Aktif")])])],1)],1)],1)])})),0)]),e("v-divider"),e("v-card-actions")],1)],1)],1)},n=[],s=e("1da1"),o=(e("96cf"),e("a15b"),e("1276"),e("ac1f"),e("fb6a"),e("bf19"),e("4de4"),e("b0c0"),e("7db0"),e("2b0e")),r=e("c041"),l=e("af93"),d=e("e29d"),c=e("2375"),u=e("efb1"),h=e("e09d"),m=e("4f03"),v=e("b0e8"),g=e("6e1f"),p=e("c2da"),f=e("0dcc");o["a"].use(r["a"]);var k={data:function(){return{date:(new Date).toISOString().substr(0,10),MenuTglMulai:!1,MenuTglAkhir:!1,mobile:null,Permission:[],ValidCreate:!1,valid:null,today:(new Date).toJSON().slice(0,10).split("-").join("-"),AlertKontrak:null,KodeKaryawan:null,NoKontrak:null,textAktif:!0,umenu:[],loading:!0,Kode:null,minDate:new Date("2005-01-01").toISOString().slice(0,10),maxDate:new Date("2100-01-01").toISOString().slice(0,10),DialogPilihExport:!1,windowSize:{x:0,y:0},MenuExport:!1,commands:[],customAttributes:{class:"customcss"},Alert:!1,DialogLihatKontrak:!1,akun:[],usermenu:null,AlertDataTerhapus:!1,AlertBerhasilTerubah:!1,user:[],LihatKontrakData:[],token:null,DialogTambahKontrak:!1,DialogPilihKaryawan:!1,form:new FormData,editedIndex:-1,defaultItem:{id:"",KodeKaryawan:"",Nama:"",NoKontrak:"",TanggalMulai:"",TanggalAkhir:""},editedItem:{id:"",KodeKaryawan:"",Nama:"",NoKontrak:"",TanggalMulai:"",TanggalAkhir:""},toolbarOptions:["Search"],DataKontrak:[],DataKontrakAll:[],pageSettings:{pageSize:10,pageSizes:["5","10","15","20","50","All"]}}},provide:{grid:[l["a"],d["a"],c["a"],u["a"],h["a"],m["a"],v["a"],g["a"],p["a"]]},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.token=localStorage.getItem("token"),t.user=JSON.parse(localStorage.getItem("user")),o["a"].prototype.$BukaNotifKontrak=t.BukaNotifKontrak,t.Permission.some((function(t){return"R"==t}))?(t.valid=!0,t.getdata(),t.getdataKaryawan(),console.log("rx",t.$route.params.notifikasi),t.editedItem.TanggalMulai=t.date,t.editedItem.TanggalAkhir=t.date):(t.loading=!1,t.valid=!1),t.Permission.some((function(t){return"C"==t}))&&(t.ValidCreate=!0),t.Permission.some((function(t){return"U"==t}))&&t.commands.push({buttonOption:{cssClass:"e-flat Edit",iconCss:"e-edit e-icons",content:" "}}),t.Permission.some((function(t){return"D"==t}))&&t.commands.push({buttonOption:{cssClass:"e-flat Delete",iconCss:"e-delete e-icons",content:" "}});case 7:case"end":return a.stop()}}),a)})))()},created:function(){console.log("param",this.$route.params.Permission);var t=this.$route.params.Permission;this.Permission=null==t?[]:t.split(",")},computed:{formTitleKontrak:function(){return-1===this.editedIndex?"Tambah Jabatan Karyawan Baru":"Ubah Data Jabatan"},formTitlePilihKaryawan:function(){return-1===this.editedIndex?"Pilih Karyawan":"Ubah Data Kontrak"},StatusFormPilihKaryawan:function(){return-1===this.editedIndex?"Pilih ":"Ubah Data Kontrak"},Status:function(){return-1===this.editedIndex?"Baru":"Ubah"}},watch:{windowSize:function(){this.windowSize.x<480?(this.titleClass="d-none",this.mobile=!0):(this.titleClass="mr-4",this.mobile=!1)},DialogTambahKontrak:function(t){t||this.KeluarDialogKontrak()},DialogPilihKaryawan:function(t){t||this.KeluarDialogPilihKaryawan()},Alert:function(){this.AlertItem()},AlertDataTerhapus:function(){this.AlertItem()},AlertBerhasilTerubah:function(){this.AlertItem()}},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}},cariKode:function(t){var a=this;if(this.textAktif=null==t,null==t||""==t||0==t.length)this.editedIndex=-1,this.$nextTick((function(){a.editedItem=Object.assign({},a.defaultItem),a.editedIndex=-1}));else{this.Kode=t.toUpperCase();var e=this.DataKontrak.filter((function(a){return a.Kode==t.toUpperCase()}));e.length>0&&(this.editedIndex=1,this.textAktif=!1,this.editedItem.Nama=e[0].Nama)}},saya:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(void 0!=t.$menu){a.next=5;break}return a.next=3,f["a"].get("/menu?token="+t.token).then((function(a){if(a){t.akun=a.data;var e=t.$route.name,i=t.akun.filter((function(t){return t.Route==e}));i.length>0?t.valid=!0:(t.valid=!1,t.loading=!1)}})).catch((function(a){"Error: Request failed with status code 401"==a&&"/login"!=t.$route.path&&t.logout()}));case 3:a.next=9;break;case 5:t.akun=t.$menu,e=t.$route.name,i=t.akun.filter((function(t){return t.Route==e})),i.length>0?t.valid=!0:(t.valid=!1,t.loading=!1);case 9:case"end":return a.stop()}}),a)})))()},PilihNamaKaryawan:function(){this.DialogPilihKaryawan=!1},BukaNotifKontrak:function(t){var a=this;this.DialogTambahKontrak=!0,this.editedItem.Nama=t.karyawan.Nama,this.editedItem.KodeKaryawan=t.karyawan.KodeKaryawan;var e=this.DataKontrakAll.find((function(t){return t.KodeKaryawan===a.editedItem.KodeKaryawan}));this.editedItem.NoKontrak=parseFloat(e[0].NoKontrak)+1,this.editedItem.TanggalMulai="",this.editedItem.TanggalAkhir="",this.minDate=new Date(String(e[0].TanggalAkhir)).toISOString().slice(0,10)},Simpan:function(){var t=this;"Tambah Jabatan Karyawan Baru"===this.formTitleKontrak?(this.Toast("Data Disimpan"),f["a"].post("/kontrakkaryawan?token="+this.token,{KodeKaryawan:this.editedItem.KodeKaryawan,NoKontrak:this.editedItem.NoKontrak,TanggalMulai:this.editedItem.TanggalMulai,TanggalAkhir:this.editedItem.TanggalAkhir,Notifikasi:void 0!=this.$route.params.notifikasi?this.$route.params.notifikasi.id:null,Kategori:"Approval",Judul:"Perpanjang Kontrak",Konten:"Kontrak Telah Di Perpanjang",Attachment:null,Dari:this.$user.KodeKaryawan,Tujuan:this.editedItem.KodeKaryawan},{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.token)}}).then((function(a){a&&(void 0!=t.$route.params.notifikasi&&delete t.$route.params.notifikasi,t.$CekNotifKontrak(),t.getdata(),t.getdataKaryawan())}))):"Ubah Data Kontrak"===this.formTitleKontrak&&(this.Toast("Data Diubah"),f["a"].put("kontrakkaryawan/"+this.editedItem.id+"/?token="+this.token,{NoKontrak:this.editedItem.NoKontrak,TanggalMulai:this.editedItem.TanggalMulai,TanggalAkhir:this.editedItem.TanggalAkhir},{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(a){a&&(t.getdata(),t.getdataKaryawan())}))),this.KeluarDialogKontrak()},commandClick:function(t){var a=this;if(t.target.classList.contains("custombutton"));else if(t.target.classList.contains("Lihat")){this.DialogLihatKontrak=!0;var e=this.DataKontrakAll.filter((function(a){return a.KodeKaryawan==t.rowData.KodeKaryawan}));this.LihatKontrakData=e[0]}else if(t.target.classList.contains("Delete")){console.log(t.rowData.id);var i=confirm("Yakin Hapus Data?");1==i&&(this.Toast("Data Dihapus"),f["a"].delete("/kontrakkaryawan/"+t.rowData.id+"?token="+this.token).then((function(t){t&&(a.getdata(),a.AlertDataTerhapus=!0)})).catch((function(t){console.log(t)})))}else if(t.target.classList.contains("Edit")){this.KodeKaryawan=t.rowData.KodeKaryawan,this.NoKontrak=t.rowData.NoKontrak;var n=t;this.editedIndex=1,this.editedItem.id=n.rowData.id,this.editedItem.Nama=n.rowData.karyawan.Nama,this.editedItem.NoKontrak=n.rowData.NoKontrak,this.editedItem.TanggalMulai=n.rowData.TanggalMulai,this.editedItem.TanggalAkhir=n.rowData.TanggalAkhir,this.DialogTambahKontrak=!0}},PdfExport:function(){var t=document.getElementById("jabatankaryawanview").ej2_instances[0];t.pdfExportProperties={pageOrientation:"Landscape",fileName:"ReportJabatanKaryawan.pdf"},t.columns[1].visible=!1,t.columns[4].visible=!1,t.columns[3].visible=!1,this.$refs.gridkontrak.pdfExport(t.pdfExportProperties)},excelExport:function(){this.$refs.gridkontrak.excelExport()},KeluarDialogKontrak:function(){var t=this;this.DialogTambahKontrak=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.Kode=null,t.textAktif=!0}))},KeluarDialogPilihKaryawan:function(){this.DialogPilihKaryawan=!1},rowSelectedPilihKaryawan:function(t){this.editedItem.KodeKaryawan=t.data.KodeKaryawan,this.editedItem.Nama=t.data.Nama,0!=t.data.kontrak.length?this.editedItem.NoKontrak=parseInt(t.data.kontrak.NoKontrak)+1:this.editedItem.NoKontrak=1},rowDblClickPilihKaryawan:function(t){this.editedItem.KodeKaryawan=t.rowData.KodeKaryawan,this.editedItem.Nama=t.rowData.Nama,0!=t.rowData.kontrak.length?this.editedItem.NoKontrak=parseInt(t.rowData.kontrak.NoKontrak)+1:this.editedItem.NoKontrak=1,this.DialogPilihKaryawan=!1},getdata:function(){var t=this;1==this.valid&&f["a"].get("/jabatankaryawan?token="+this.token).then((function(a){t.DataKontrak=a.data,t.DataKontrakAll=a.data,t.loading=!1}))},getdataKaryawan:function(){var t=this;1==this.valid&&f["a"].get("/selectkaryawan?token="+this.token).then((function(a){var e=new Date,i=a.data.filter((function(t){return e.setHours(0,0,0,0)>new Date(t.kontrak.TanggalAkhir).setHours(0,0,0,0)||0==t.kontrak.length}));if(t.DataKaryawan=i,t.loading=!1,void 0!=t.$route.params.notifikasi){t.DialogTambahKontrak=!0,t.editedItem.Nama=t.$route.params.notifikasi.karyawan.Nama,t.editedItem.KodeKaryawan=t.$route.params.notifikasi.karyawan.KodeKaryawan;var n=t.DataKontrakAll.find((function(a){return a.KodeKaryawan===t.editedItem.KodeKaryawan}));t.editedItem.NoKontrak=parseFloat(n[0].NoKontrak)+1,t.editedItem.TanggalMulai="",t.editedItem.TanggalAkhir="",t.minDate=new Date(String(n[0].TanggalAkhir)).toISOString().slice(0,10)}}),(function(t){console.log(t)}))},Toast:function(t){this.$swal.fire({toast:!0,icon:"success",title:t,animation:!1,position:"top-right",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},Reset:function(){var t=this;this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem)}))},logout:function(){f["a"].post("/logout",this.token).then((function(t){})),localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!1)},AlertItem:function(){var t=this;window.setInterval((function(){t.Alert=!1,t.AlertDataTerhapus=!1,t.AlertBerhasilTerubah=!1}),3e3)}}},w=k,b=(e("0b7a"),e("2877")),x=e("6544"),K=e.n(x),D=e("0798"),y=e("8212"),T=e("8336"),C=e("b0af"),A=e("99d9"),_=e("62ad"),I=e("a523"),N=e("2e4b"),S=e("169a"),P=e("ce7e"),M=e("132d"),L=e("a722"),$=e("da13"),O=e("8270"),V=e("5d23"),E=e("e449"),B=e("8e36"),z=e("0fd9"),j=e("8dd9"),R=e("2fa4"),J=e("8654"),U=e("71d9"),F=e("2a7f"),H=e("3a2f"),W=e("269a"),Y=e.n(W),q=e("dc22"),X=Object(b["a"])(w,i,n,!1,null,null,null);a["default"]=X.exports;K()(X,{VAlert:D["a"],VAvatar:y["a"],VBtn:T["a"],VCard:C["a"],VCardActions:A["a"],VCardText:A["c"],VCol:_["a"],VContainer:I["a"],VDatePicker:N["a"],VDialog:S["a"],VDivider:P["a"],VIcon:M["a"],VLayout:L["a"],VListItem:$["a"],VListItemAvatar:O["a"],VListItemContent:V["b"],VListItemSubtitle:V["c"],VListItemTitle:V["d"],VMenu:E["a"],VProgressLinear:B["a"],VRow:z["a"],VSheet:j["a"],VSpacer:R["a"],VTextField:J["a"],VToolbar:U["a"],VToolbarTitle:F["b"],VTooltip:H["a"]}),Y()(X,{Resize:q["a"]})},7943:function(t,a,e){},9734:function(t,a,e){},a722:function(t,a,e){"use strict";e("20f6");var i=e("e8f2");a["a"]=Object(i["a"])("layout")},bf19:function(t,a,e){"use strict";var i=e("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})}}]);
//# sourceMappingURL=chunk-0b1e9466.513a3fff.js.map