(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a4aef39"],{"517b":function(t,a,e){"use strict";e("e408")},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85");var i=e("e8f2"),r=e("d9f7");a["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,i=a.props,o=a.data,l=a.children,d=o.attrs;return d&&(o.attrs={},e=Object.keys(d).filter((function(t){if("slot"===t)return!1;var a=d[t];return t.startsWith("data-")?(o.attrs[t]=a,!1):a||"string"===typeof a}))),i.id&&(o.domProps=o.domProps||{},o.domProps.id=i.id),t(i.tag,Object(r["a"])(o,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),l)}})},b514:function(t,a,e){t.exports=e.p+"img/TA_Logo.d6a12d8c.png"},bf19:function(t,a,e){"use strict";var i=e("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},d693:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-card",{class:t.$vuetify.theme.dark?"grey darken-4":""},[i("v-card-actions",{staticStyle:{height:"64px"}},[i("v-toolbar-title",{staticClass:"text-h5"},[t._v(" Surat Permohonan Izin Cuti "+t._s(t.id)+" ")]),i("v-spacer"),i("v-btn",{staticClass:"text-capitalize",attrs:{text:"",outlined:"",depressed:""},on:{click:t.CetakSurat}},[t._v("Cetak")]),i("v-btn",{staticClass:"text-capitalize",attrs:{text:"",outlined:"",depressed:""},on:{click:function(a){t.DialogLihatSuratCuti=!1}}},[t._v("Keluar")])],1),i("v-divider"),i("v-card-text",{class:t.$vuetify.theme.dark?"dark":"grey lighten-3"},[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",[i("v-sheet",{staticClass:"ma-8 mx-auto elevation-15",attrs:{outlined:"",width:"21cm",height:"auto"}},[i("div",{staticStyle:{padding:"35px",width:"21cm",height:"auto",margin:"auto","font-family":"'Calibri', sans-serif","font-size":"14px"},attrs:{id:"cetakan"}},[i("div",[i("table",[i("tr",[i("td",{staticStyle:{"text-align":"center",after:"float: left",width:"30%","padding-top":"2px","border-right":"1px solid","border-left":"1px solid","border-top":"1px solid","border-bottom":"1px solid"}},[i("img",{staticStyle:{width:"188px"},attrs:{src:e("b514")}})]),i("td",{staticStyle:{"text-align":"center","font-size":"15px","font-family":"'Calibri', sans-serif",after:"float: right",width:"70%","border-right":"1px solid","border-left":"1px solid","border-top":"1px solid","border-bottom":"1px solid"}},[i("div",[t._v("Jl. Bung Tomo No. 49 RT. 11 Telp/Fax . 0541 260521, Samarinda Seberang,")]),i("div",[t._v("Email : hrga@trinityauto.id")])])]),i("tr",[i("td",{staticStyle:{"text-align":"center","font-size":"18px","font-weight":"bold","font-family":"'Calibri', sans-serif","padding-left":"10px","padding-right":"10px",after:"float: left",width:"30%","border-right":"1px solid","border-left":"1px solid","border-top":"1px solid","border-bottom":"1px solid"}},[i("label",[t._v("SURAT PERMOHONAN IZIN CUTI")])]),i("td",{staticStyle:{after:"float: left",width:"70%","border-right":"1px solid","border-left":"1px solid","border-top":"1px solid","border-bottom":"1px solid"}},[i("table",{staticStyle:{"font-size":"14px","font-family":"'Calibri', sans-serif"}},[i("tr",{staticStyle:{height:"20px"}},[i("td",{staticStyle:{"padding-left":"8px",after:"float: left",width:"40%","border-right":"1px solid","border-left":"none","border-top":"none","border-bottom":"1px solid"}},[i("label",[t._v("No. Dokumen")])]),i("td",{staticStyle:{"padding-left":"8px",after:"float: right",width:"60%","border-right":"none","border-left":"1px solid","border-top":"none","border-bottom":"1px solid"}},[i("label",[t._v("FORMULIR HRD.12")])])]),i("tr",[i("td",{staticStyle:{"padding-left":"8px",after:"float: left",width:"40%","border-right":"1px solid","border-left":"none","border-top":"1px solid","border-bottom":"none"}},[i("label",[t._v("Tanggal Dibuat")])]),i("td",{staticStyle:{"padding-left":"8px",after:"float: right",width:"60%","border-right":"none","border-left":"1px solid","border-top":"1px solid","border-bottom":"none"}},[i("label",[t._v("01 Maret 2016")])])]),i("tr",[i("td",{staticStyle:{"padding-left":"8px",after:"float: left",width:"40%","border-right":"1px solid","border-left":"none","border-top":"1px solid","border-bottom":"none"}},[i("label",[t._v("Revisi")])]),i("td",{staticStyle:{"padding-left":"8px",after:"float: right",width:"60%","border-right":"none","border-left":"1px solid","border-top":"1px solid","border-bottom":"none"}},[i("label",[t._v("1")])])]),i("tr",[i("td",{staticStyle:{"padding-left":"8px",after:"float: left",width:"40%","border-right":"1px solid","border-left":"none","border-top":"1px solid","border-bottom":"none"}},[i("label",[t._v("Halaman")])]),i("td",{staticStyle:{"padding-left":"8px",after:"float: right",width:"60%","border-right":"none","border-left":"1px solid","border-top":"1px solid","border-bottom":"none"}},[i("label",[t._v("1-1")])])])])])])])]),i("div",{staticClass:"ml-3 mr-3"},[i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticClass:"col-4 d-flex flex-row",domProps:{textContent:t._s("No : "+t.perusahaan+"/"+t.kode+"/"+t.tahun+"/"+t.no)}}),i("label",{staticClass:" col-8 d-flex flex-row-reverse",domProps:{textContent:t._s("Samarinda, "+t.DibuatTgl)}})])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",[t._v("Sesuai kepentingannya, dengan ini diberikan izin cuti ("),i("strong",{staticStyle:{"font-style":"italic"}},[t._v("-TAHUNAN, -BERSALIN ")]),t._v(")* kepada karyawan/(ti) :")])])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"9"}},[i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Nama")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("label",{staticStyle:{width:"69%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.karyawan.Nama:"")}})])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("NRK")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("label",{staticStyle:{width:"69%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.karyawan.NRK:"")}})])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Awal Kerja")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("label",{staticStyle:{width:"69%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.karyawan.TglMasuk:"")}})])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Jabatan")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("label",{staticStyle:{width:"69%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.karyawan.jabatan.NamaJabatan:"")}})])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Keperluan Alasan")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("label",{staticStyle:{width:"69%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.AlasanCuti:"")}})])],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Mulai Tanggal")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"21%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.TanggalMulai:"")}}),i("label",{staticStyle:{width:"7%"}},[t._v("s/d")]),i("label",{staticStyle:{width:"21%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.TanggalSelesai:"")}})])],1)],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Jumlah Cuti Diambil")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"6%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.JumlahCuti:"")}}),i("label",{staticStyle:{width:"22%"}},[t._v("Sisa Hak Cuti")]),i("label",{staticStyle:{width:"6%"},domProps:{textContent:t._s(0!=t.datacuti.length?t.datacuti.karyawan.Cuti:"")}})])],1)],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",{staticStyle:{width:"29%"}},[t._v("Kembali bekerja tanggal")]),i("label",{staticStyle:{width:"2%"}},[t._v(":")]),i("label",{staticStyle:{width:"69%"}})])],1)]),i("v-col",{attrs:{cols:"3"}},[i("div",{staticStyle:{width:"152px",height:"152px",margin:"auto","margin-top":"10px"}},[i("figure",{directives:[{name:"show",rawName:"v-show",value:this.datacuti.approvalcuti.length,expression:"this.datacuti.approvalcuti.length"}],staticClass:"qrcode"},[i("qrcode",{attrs:{value:"Tertanda "+t.datacuti,tag:"svg",options:{errorCorrectionLevel:"Q",width:150}}}),i("img",{staticClass:"qrcode__image",attrs:{src:e("ca85"),alt:"Barcode"}})],1)])])],1)],1),i("div",[i("v-row",{attrs:{"no-gutters":""}},[i("label",[t._v("Demikian surat permohonan izin cuti ini kami berikan agar dapat dipergunakan sebagai mana mestinya.")])])],1)]),i("div",{staticClass:"ma-3 text-center"},[i("table",[i("tr",[i("td",{staticStyle:{width:"25%"}},[t._v("Dibuat Oleh :")]),i("td",[t._v("Diperiksa Oleh :")]),i("td",{staticStyle:{width:"25%"}},[t._v("Disetujui Oleh :")])])]),i("table",[i("tr",[i("th",{staticStyle:{width:"20%"}},[t._v("Reski Widhianto")]),i("th",{staticStyle:{width:"20%"}},[t._v("Rudy Tjan")]),i("th",{staticStyle:{width:"20%"}},[t._v("Alfian Malik")]),i("th",{staticStyle:{width:"20%"}},[t._v("Herdaru Purwianto")])])]),i("table",[i("tr",[i("td",{staticStyle:{width:"20%"}},[t._v("Pemohon")]),i("td",{staticStyle:{width:"20%"}},[t._v("Head Dept")]),i("td",{staticStyle:{width:"20%"}},[t._v("HR")]),i("td",{staticStyle:{width:"20%"}},[t._v("Opr Div Head")])])])])])])],1)],1)],1)],1)},r=[],o=(e("a15b"),e("1276"),e("ac1f"),e("fb6a"),e("bf19"),e("0dcc")),l={data:function(){return{perusahaan:this.$route.params.perusahaan,kode:this.$route.params.kode,tahun:this.$route.params.tahun,no:this.$route.params.no,DialogLihatSuratCuti:!1,DibuatTgl:"",dialoglistcuti:!1,dialog_verifikasi_kontrak:!1,mobile:null,datacuti:{NoCuti:"",karyawan:{Nama:"",jabatan:{NamaJabatan:""}},approvalcuti:[]},detailcuti2:[],ShowValidasiKontrak:!1,MasaKontrak:[],today:(new Date).toJSON().slice(0,10).split("-").join("-"),windowSize:{x:0,y:0},dialog:!1,token:localStorage.getItem("token")}},mounted:function(){this.getcuti()},methods:{getcuti:function(){var t=this,a=JSON.parse(localStorage.getItem("user"));o["a"].post("/cutilist/?token="+this.token,{KodeKaryawan:a.KodeKaryawan}).then((function(a){t.datacuti=a.data}),(function(t){console.log(t)}))}}},d=l,s=(e("517b"),e("2877")),n=e("6544"),c=e.n(n),u=e("8336"),b=e("b0af"),p=e("99d9"),h=e("62ad"),f=e("a523"),g=e("ce7e"),v=e("0fd9"),w=e("8dd9"),y=e("2fa4"),x=e("2a7f"),m=Object(s["a"])(d,i,r,!1,null,null,null);a["default"]=m.exports;c()(m,{VBtn:u["a"],VCard:b["a"],VCardActions:p["a"],VCardText:p["c"],VCol:h["a"],VContainer:f["a"],VDivider:g["a"],VRow:v["a"],VSheet:w["a"],VSpacer:y["a"],VToolbarTitle:x["b"]})},e408:function(t,a,e){},e8f2:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("498a"),e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("a15b");var i=e("2b0e");function r(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var i=e.props,r=e.data,o=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var l=r.attrs;if(l){r.attrs={};var d=Object.keys(l).filter((function(t){if("slot"===t)return!1;var a=l[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));d.length&&(r.staticClass+=" ".concat(d.join(" ")))}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),a(i.tag,r,o)}})}}}]);
//# sourceMappingURL=chunk-2a4aef39.cf47522e.js.map