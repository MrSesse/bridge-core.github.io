(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Re0":function(t,a,s){"use strict";var e={name:"Card",props:{to:String,image:[String,Object],title:String,excerpt:String,date:String,tags:Array,author:Object}},i=s("KHd+"),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"h-full w-full bg-ui-sidebar rounded overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"},[s("g-link",{attrs:{to:t.to}},[s("g-image",{staticClass:"w-full",attrs:{src:t.image,alt:"Image of "+t.title}}),s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.title))]),s("AuthorTag",{attrs:{author:t.author,card:!0}}),s("p",{staticClass:"text-base mt-4"},[t._v("\n\t\t\t\t\t"+t._s(t.excerpt)+"\n\t\t\t\t")])],1)],1),s("div",{staticClass:"px-6 pt-4 pb-2"},t._l(t.tags,(function(a){return s("g-link",{key:a.id,staticClass:"inline-block bg-ui-background rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1",attrs:{to:a.path}},[t._v("\n\t\t\t\t#"+t._s(a.title)+"\n\t\t\t")])})),1)],1)])}),[],!1,null,null,null);a.a=r.exports},"2qYH":function(t,a,s){"use strict";s.r(a);var e={components:{Card:s("2Re0").a},computed:{tag:function(){return this.$page.tag}}},i=s("KHd+"),r=null,l=Object(i.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{showSidebars:!1}},[a("div",{staticClass:"mt-12 mx-12"},[a("h1",[this._v("#"+this._s(this.tag.title))]),a("div",{staticClass:"mt-12 -mx-2 flex flex-wrap"},this._l(this.tag.belongsTo.edges,(function(t){var s=t.node,e=s.id,i=s.image,r=s.path,l=s.title,n=s.excerpt,o=s.tags,u=s.author;return a("Card",{key:e,staticClass:"w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4",attrs:{to:r,image:i,title:l,excerpt:n,tags:o,author:u}})})),1)])])}),[],!1,null,null,null);"function"==typeof r&&r(l);a.default=l.exports}}]);