(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DetailJabatanKaryawan"],{e72d:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}]},[e("v-card",{directives:[{name:"show",rawName:"v-show",value:!this.jabatan.visible,expression:"!this.jabatan.visible"}],staticClass:"mx-auto rounded-lg elevation-3",attrs:{color:(t.$vuetify.theme.dark,"dark"),outlined:""}},[e("v-sheet",{attrs:{color:"transparent",flat:"",height:"130"}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("div",{staticClass:"title"},[e("span",{staticClass:"text-truncate"},[t._v("Jabatan")])]),e("div",{staticClass:"no-gutters d-inline-block text-truncate"},[e("span",{domProps:{textContent:t._s(t.jabatan.NamaJabatan)}})]),e("div",{staticClass:"no-gutters d-inline-block text-truncate"},[e("span",[t._v("Divisi : ")]),e("span",{staticClass:"mr-5",domProps:{textContent:t._s(t.jabatan.Divisi)}})]),e("div",{staticClass:"no-gutters d-inline-block text-truncate"},[e("span",[t._v("Departemen : ")]),e("span",{staticClass:"mr-5",domProps:{textContent:t._s(t.jabatan.Departemen)}})])]),e("v-list-item-avatar",{staticClass:"mb-n8 mx-auto rounded-lg",attrs:{size:"55",color:"red darken-4"}},[e("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-account-hard-hat")])],1)],1)],1),e("v-card-actions",[e("v-dialog",{attrs:{scrollable:"","max-width":"380"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,s=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"text-capitalize subtitle-1 rounded-lg",attrs:{text:"",small:"",outlined:""}},"v-btn",s,!1),i),[e("v-icon",{attrs:{large:""}},[t._v("mdi-dots-horizontal")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",{staticClass:"rounded-lg",attrs:{outlined:""}},[e("v-toolbar",{attrs:{flat:"",height:"64"}},[e("v-toolbar-title",{staticClass:"title"},[e("span",{staticClass:"text-h5 mx-1"},[t._v("Jabatan")])]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-window-close")])],1)],1),e("v-divider"),e("v-card-text",[e("div",{staticClass:"mr-n3 ml-n3 mb-n2 mt-3"},[e("v-sheet",{staticClass:"rounded-lg",attrs:{tile:"",outlined:""}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Kode Jabatan")]),e("v-list-item-subtitle",{staticClass:"subtitle-1 d-inline-block",domProps:{textContent:t._s(t.jabatan.KodeJabatan)}})],1)],1),e("v-divider"),e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Nama Jabatan")]),e("v-list-item-subtitle",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.jabatan.NamaJabatan)}})],1)],1),e("v-divider"),e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Kode Perusahaan")]),e("v-list-item-subtitle",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.jabatan.KodePerusahaan)}})],1)],1),e("v-divider"),e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Departemen")]),e("v-list-item-subtitle",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.jabatan.Departemen)}})],1)],1),e("v-divider"),e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Divisi")]),e("v-list-item-subtitle",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.jabatan.Divisi)}})],1)],1),e("v-divider"),e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"subtitle-1"},[t._v("Atasan")]),e("v-list-item-subtitle",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.jabatan.Atasan)}})],1)],1)],1)],1)])],1)],1)],1)],1),e("v-card",{directives:[{name:"show",rawName:"v-show",value:1==this.jabatan.visible,expression:"this.jabatan.visible == true"}],staticClass:"rounded-lg mx-auto elevation-3",attrs:{color:(t.$vuetify.theme.dark,"dark"),outlined:""}},[e("v-sheet",{attrs:{color:"transparent",flat:"",height:"150"}},[e("div",{staticClass:"text-center mb-4 mt-6"},[e("v-icon",{attrs:{"x-large":"",color:"error"}},[t._v("mdi-alert")])],1),e("p",{staticClass:"display-1 text-center"},[t._v("Jabatan")])])],1)],1)},s=[],n={props:["datakaryawan","jmlanak","kontrak","jabatan","foto"],data:function(){return{mobile:null,windowSize:{x:0,y:0},dialog:!1,token:null}},mounted:function(){this.token=localStorage.getItem("token")},computed:{},watch:{windowSize:function(){this.windowSize.x<1e3?(this.titleClass="d-none",this.mobile=!0):(this.titleClass="mr-4",this.mobile=!1)}},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}}}},l=n,o=e("2877"),r=e("6544"),d=e.n(r),v=e("8336"),c=e("b0af"),m=e("99d9"),b=e("169a"),u=e("ce7e"),C=e("132d"),h=e("da13"),p=e("8270"),w=e("5d23"),x=e("8dd9"),_=e("2fa4"),g=e("71d9"),k=e("2a7f"),f=e("269a"),j=e.n(f),V=e("dc22"),z=Object(o["a"])(l,i,s,!1,null,null,null);a["default"]=z.exports;d()(z,{VBtn:v["a"],VCard:c["a"],VCardActions:m["a"],VCardText:m["b"],VDialog:b["a"],VDivider:u["a"],VIcon:C["a"],VListItem:h["a"],VListItemAvatar:p["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"],VSheet:x["a"],VSpacer:_["a"],VToolbar:g["a"],VToolbarTitle:k["b"]}),j()(z,{Resize:V["a"]})}}]);
//# sourceMappingURL=DetailJabatanKaryawan.304c40ab.js.map