if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"1552412e7296c05f02cb8c9eceeb62c2"},{url:"/404/index.html",revision:"1552412e7296c05f02cb8c9eceeb62c2"},{url:"/advanced-mining/index.html",revision:"b98d436165c163de91f52d615bbcba7e"},{url:"/assets/css/0.styles.cf3a2087.css",revision:"f36a68621126facc32c72afec06a6891"},{url:"/assets/data/404/index.json",revision:"018fe930ae4e88477be52a3bf8f47bbb"},{url:"/assets/data/advanced-mining/index.json",revision:"566a07bbf362a24a4944a6ac64094f5d"},{url:"/assets/data/author/7dev7urandom/index.json",revision:"c48f88a9f7c39101ab17899377c9e348"},{url:"/assets/data/author/enderzombi102/index.json",revision:"3a3a2d6787bda49295228debd2676beb"},{url:"/assets/data/author/gamemode-one/index.json",revision:"0c05dbb2668470712ea9746f121694e2"},{url:"/assets/data/author/joelant05/index.json",revision:"f909560e17cf04d85da3eed38435d053"},{url:"/assets/data/author/montudor/index.json",revision:"c70cbc6b81de16cff2812082b45bb980"},{url:"/assets/data/author/solveddev/index.json",revision:"f86b6badd056e76ad15259def897fa99"},{url:"/assets/data/created-plugins/2/index.json",revision:"990d545ef1b1081b50adc5b8f1ab4b20"},{url:"/assets/data/created-plugins/3/index.json",revision:"369a8bfa3f22f2d6daf048bc1018b6d2"},{url:"/assets/data/created-plugins/index.json",revision:"1ebc8c35c40ac0e95d49b72614cc9976"},{url:"/assets/data/creations/index.json",revision:"205d592a742d4afda4fadfbabbad0571"},{url:"/assets/data/editor-docs/faq/index.json",revision:"70891c88750c2e8ba5bf01a6cd5d9c72"},{url:"/assets/data/editor-docs/features/index.json",revision:"2ef4f8d571e924b787864f0e4013cd48"},{url:"/assets/data/editor-docs/getting-started/index.json",revision:"ead66e108d76752cadfd58bb4d8f6f9f"},{url:"/assets/data/editor-docs/index.json",revision:"895db08d0d5ae45c7e4d2e0076cc683a"},{url:"/assets/data/editor-docs/other/molang/index.json",revision:"cced9ea069cab70ec85f23fb9b5e46b0"},{url:"/assets/data/index.json",revision:"ad553e4a949a03945e028891282a2e7e"},{url:"/assets/data/pac-man/index.json",revision:"ce85374f248eebe76f4026a0b465257c"},{url:"/assets/data/plugin-docs/auto-completions/dynamic-references/index.json",revision:"fdc910436a81124621bb89a3627c4086"},{url:"/assets/data/plugin-docs/auto-completions/index.json",revision:"ee7204410ff40194ec97ae977c85d8fb"},{url:"/assets/data/plugin-docs/custom-commands/index.json",revision:"5a874469626844742e1362f2ee1d1b3c"},{url:"/assets/data/plugin-docs/custom-components/index.json",revision:"01c6438498efde9a782d877645c4463e"},{url:"/assets/data/plugin-docs/index.json",revision:"cee10900b34913949ef9b410681bd953"},{url:"/assets/data/plugin-docs/json/file-definitions/index.json",revision:"6144b9a95ce42a997f757d244e00eedb"},{url:"/assets/data/plugin-docs/json/lightning-cache/index.json",revision:"89576115c8c2f01f7aa26f892dea3fd1"},{url:"/assets/data/plugin-docs/json/presets/index.json",revision:"fd7084a75b1222031db2b57f68032239"},{url:"/assets/data/plugin-docs/json/snippets/index.json",revision:"3d892921daced4d9c6f5988d7504ca44"},{url:"/assets/data/plugin-docs/json/themes/index.json",revision:"82286bc3db9a44bcfc1639fcb1111dbf"},{url:"/assets/data/plugin-docs/modules/env/index.json",revision:"095899d5b574b77d73ba74f7c0e1d4c6"},{url:"/assets/data/plugin-docs/modules/fetch-definition/index.json",revision:"0e810ebca0536998ea3ba04501ee2f47"},{url:"/assets/data/plugin-docs/modules/footer/index.json",revision:"3405e0fd23b2573738920c86d8a4a63a"},{url:"/assets/data/plugin-docs/modules/fs/index.json",revision:"4dbfdff3a5ad27806db357d22733add0"},{url:"/assets/data/plugin-docs/modules/globals/index.json",revision:"1d0b659db5d4c13ba869fc67945afa82"},{url:"/assets/data/plugin-docs/modules/index.json",revision:"2e76123e9654311735b3fc1dc61ae835"},{url:"/assets/data/plugin-docs/modules/path/index.json",revision:"7eaa5995e5db5ff0a88f9cb59c38e885"},{url:"/assets/data/plugin-docs/modules/sidebar/index.json",revision:"1855a17971bac3c7eba008a4f215a6a9"},{url:"/assets/data/plugin-docs/modules/ui/index.json",revision:"3366885f0882c599452721052c8b5ee9"},{url:"/assets/data/plugin-docs/modules/utils/index.json",revision:"b20664066a31d9a32dd2afb7e5fcf016"},{url:"/assets/data/plugin-docs/modules/windows/index.json",revision:"9d33b192c0d923f11c251b0b17be0540"},{url:"/assets/data/plugin-docs/other/common-types/index.json",revision:"51b990c6c81de670ff502cb8c84d3cbb"},{url:"/assets/data/plugin-docs/other/default-file-types/index.json",revision:"39722a29ddcc43182aa2ddb999fbf0be"},{url:"/assets/data/plugin-docs/other/styles/index.json",revision:"76249913be1d4a45765f566299a42d76"},{url:"/assets/data/plugins/056b172d-77a8-40fc-9f34-226c163e330b/index.json",revision:"2b65fb57d2556201c49ba48faa8a8202"},{url:"/assets/data/plugins/44dc6685-4258-4eed-9f62-e0d0fdfd41e9/index.json",revision:"5327ace9a31fb174eb26f91e9064ff15"},{url:"/assets/data/plugins/47c1b5f9-a452-4ed1-8d00-a0427dd5168a/index.json",revision:"4ac5703d838184be534784cf45ee6013"},{url:"/assets/data/plugins/4d73da69-6df3-46bc-9486-a602373573db/index.json",revision:"854c9bacb3c0eadf80f2eb03de0c9b14"},{url:"/assets/data/plugins/6337c024-f603-11e9-802a-5aa538984bd8/index.json",revision:"ed6a7eab21be3a58657c031a5c71cc0d"},{url:"/assets/data/plugins/8497489b-3b80-45a6-94f3-65d8bd1188cd/index.json",revision:"ddc1bfb21a780791e6486a89a18cd287"},{url:"/assets/data/plugins/84b65ea3-b206-40fd-aaae-3f884b12b4f4/index.json",revision:"9b4c1229fefb205bdf9aa3cd98dd70fa"},{url:"/assets/data/plugins/87d418b3-e7ab-414e-9be1-13082c3cf46d/index.json",revision:"942cb0d14d280e2c8ba6164ae2e1e2cf"},{url:"/assets/data/plugins/89457173-109d-4dff-9f7e-f8f8875e307a/index.json",revision:"fa97e6a4823d12ad4e9d9d810c0b8717"},{url:"/assets/data/plugins/a0ad4844-ee48-4687-9da2-f1a47f3d1c3a/index.json",revision:"4b9888278f25fafb4af5f8664cbb3cbe"},{url:"/assets/data/plugins/ac340569-8df3-4409-ac9d-b855b183210b/index.json",revision:"155189241cc02d13f184da58461557ca"},{url:"/assets/data/plugins/bridge.ui.common_window/index.json",revision:"a39f1d97b99b2e9bdc42ec8abf254e56"},{url:"/assets/data/plugins/bridge.ui.confirm_window/index.json",revision:"485bdb20a2790a9719180da363b30f21"},{url:"/assets/data/plugins/caa0a585-d513-48cf-a803-c920055e2afe/index.json",revision:"79142067e17b93efb6cb2b8542bf5ffc"},{url:"/assets/data/plugins/d9419ae7-69ec-46d6-9080-a9ff48e6edab/index.json",revision:"8195588ee42bcbacb1d7bb8f7910b10d"},{url:"/assets/data/plugins/ea349bf3-628e-4c8f-924a-157a968cc320/index.json",revision:"278b5624066739787f9c9dab48c34a39"},{url:"/assets/data/plugins/ENDERZOMBI102.bridgePlugins.create-a-block/index.json",revision:"0d76d40e99a05fc10b31b0b30e575648"},{url:"/assets/data/plugins/f5cecd90-dda9-11ea-87d0-0242ac130003/index.json",revision:"cdcdc3db11c83f531a1ddabd65047b73"},{url:"/assets/data/plugins/f883bbc1-d81a-4373-8ec7-a11b81d9070a/index.json",revision:"fffab33bfb59cc32fbaa8ea5a1628b28"},{url:"/assets/data/plugins/JustSkitzo.bridgePlugins.create-an-item/index.json",revision:"9f72a93fd64f181860b2ee748840072a"},{url:"/assets/data/plugins/solved.features.dynamic_function/index.json",revision:"cf49202f078630bce7ebcc367d861bab"},{url:"/assets/data/plugins/solved.features.dynamic_json/index.json",revision:"0892fd5df6592030ced9c97d9f2311fb"},{url:"/assets/data/plugins/solved.utilities.bridge_plugin_creator/index.json",revision:"0b63339c9cd701a50190a1f61f7c1253"},{url:"/assets/data/plugins/solved.utilities.console/index.json",revision:"909d681b02fbcea3a96921c3ad5cc4be"},{url:"/assets/data/plugins/solved.utilities.crash_overview/index.json",revision:"73d46149727dbb0a1264f7dd76035eb2"},{url:"/assets/data/plugins/solved.utilities.file_search/index.json",revision:"5b315cbfa51316f33df7acbf8ff1055b"},{url:"/assets/data/tags/advanced/index.json",revision:"e90c76b37c8d521bc7355611b119e4c9"},{url:"/assets/data/tags/component/index.json",revision:"02853dddbd2f78982143268e6a38f348"},{url:"/assets/data/tags/curated/index.json",revision:"c0a448cdb21d3da990a9a02b91f13b92"},{url:"/assets/data/tags/economy/index.json",revision:"be7e0e9300c911cecaa173fb6a9ff814"},{url:"/assets/data/tags/minigame/index.json",revision:"745a3e62232742d5ec891d0115f87878"},{url:"/assets/data/tags/mining/index.json",revision:"811c27aa8d0723fce47457bcce8bd473"},{url:"/assets/data/tags/presets/index.json",revision:"39ab0873eb4538a7e2d3b043c862614d"},{url:"/assets/data/tags/snippet/index.json",revision:"a2bb0d1c0d07196f3d08e693db7065a0"},{url:"/assets/data/tags/theme/index.json",revision:"b2f0286bfc3e629dd196415f9c354657"},{url:"/assets/data/tags/utility/index.json",revision:"d3585723d2cff8e2e17a1e303e652b8a"},{url:"/assets/data/tags/v1-0-0/2/index.json",revision:"24a32534842b445a90d4b3b5778e0d4c"},{url:"/assets/data/tags/v1-0-0/index.json",revision:"c9987d0d8fcb7e0591cd3126a2ff53b5"},{url:"/assets/data/tags/v1-0-1/index.json",revision:"66517ec9aa0b62bbb307b8e5e8783db3"},{url:"/assets/data/tags/v1-1-0/index.json",revision:"f88fe06eecbf233bfbc6b7edf41f5e56"},{url:"/assets/data/tags/v1-1-1/index.json",revision:"861e71990de3b99ec0c0786b3e6abd20"},{url:"/assets/data/tags/v1-1-4/index.json",revision:"e6633dbd8f258e0a9d5d1d5c90b4b24a"},{url:"/assets/data/tags/v1-1-5/index.json",revision:"7209d5fa0af0a5a7e4709aee463790b1"},{url:"/assets/data/tags/v1-2-0/index.json",revision:"156d2287b85914d8a3695f8a18b496ed"},{url:"/assets/js/app.da6353ee.js",revision:"70dab4586bf75df70a4149c036e186bb"},{url:"/assets/js/page--src--pages--404-vue.3a657a54.js",revision:"4cd5a84ca939482233a23ea31ab8b0de"},{url:"/assets/js/page--src--pages--created-plugins-vue.634731be.js",revision:"4faa2183e3cfab5a049c13e7ca75da2c"},{url:"/assets/js/page--src--pages--creations-vue.a5aadf4f.js",revision:"e153fbda003dd873eb61a6eab562c2b9"},{url:"/assets/js/page--src--pages--index-vue.37514ceb.js",revision:"d8f12942568f1e873cf647c6ed09bec2"},{url:"/assets/js/page--src--templates--author-vue.5501ec50.js",revision:"8dba7f31a1579cb86ae11f4909238440"},{url:"/assets/js/page--src--templates--creation-vue.1308e0eb.js",revision:"c4bb1c9784c978d91ad578f0430b3661"},{url:"/assets/js/page--src--templates--markdown-page-vue.e555f253.js",revision:"01aea3638d223ef9fa34705925766d0a"},{url:"/assets/js/page--src--templates--plugin-vue.bf8eff1f.js",revision:"bf3c975ab3c84c0d369613466680ee07"},{url:"/assets/js/page--src--templates--tag-vue.a245f98e.js",revision:"7ee4ee6044838705b7f513f938a3aa03"},{url:"/assets/js/search.cf3c3241.js",revision:"96eb6adc35a427befcd71a1c74946b82"},{url:"/assets/static/faq_1.4833fd8.b5cd21168a425af93e27e684ca0d6f55.png",revision:"97b458f1fac075ac045ea7f727fe8fd9"},{url:"/assets/static/faq_1.82a2fbd.b5cd21168a425af93e27e684ca0d6f55.png",revision:"265f1e958576f2ef4a9bd90e5608713a"},{url:"/assets/static/faq_1.cbab2cf.b5cd21168a425af93e27e684ca0d6f55.png",revision:"916ec3e596f3410d74cb3c8c9b9fcd09"},{url:"/assets/static/favicon.ac8d93a.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"a72097143141ba7cebc09b34ee456feb"},{url:"/assets/static/favicon.b9532cc.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"814ace81e164119642545ea6fff550d4"},{url:"/assets/static/favicon.ce0531f.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"0aa61a5fe515860da05fa7739eecc641"},{url:"/assets/static/getting-started-1.4833fd8.a169e97caf7ed0dbb576ac84927c5654.png",revision:"fc7e3a11a588e8f76b139de70e973176"},{url:"/assets/static/getting-started-1.82a2fbd.a169e97caf7ed0dbb576ac84927c5654.png",revision:"d0a01890d709d0a72805e820f14462b2"},{url:"/assets/static/getting-started-1.cbab2cf.a169e97caf7ed0dbb576ac84927c5654.png",revision:"1ba0b45a0f174399e768de2c10df0b4f"},{url:"/assets/static/getting-started-10.4833fd8.82daf94f15845adb1646a54c924793f8.png",revision:"14814157ba776c5922320954a763cc8e"},{url:"/assets/static/getting-started-10.82a2fbd.82daf94f15845adb1646a54c924793f8.png",revision:"ab98598d4ba2592721d6d604bcb41bd7"},{url:"/assets/static/getting-started-10.cbab2cf.82daf94f15845adb1646a54c924793f8.png",revision:"82daf94f15845adb1646a54c924793f8"},{url:"/assets/static/getting-started-11.4833fd8.db3a0a18f8d4db9756159a368efe90da.png",revision:"8eda2803deed13b5eab3e3b9f3382161"},{url:"/assets/static/getting-started-11.82a2fbd.db3a0a18f8d4db9756159a368efe90da.png",revision:"503a4a9b6a85a06654653fd16c25acfc"},{url:"/assets/static/getting-started-11.cbab2cf.db3a0a18f8d4db9756159a368efe90da.png",revision:"0044f24179daa0dfa7b7a1a8d87c37bf"},{url:"/assets/static/getting-started-12.4833fd8.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1ed74d6243379e393a68dc9d89f44246"},{url:"/assets/static/getting-started-12.82a2fbd.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1321bb186053cd75d6ea9fa3fe4489c8"},{url:"/assets/static/getting-started-12.cbab2cf.03807ff21653d4d406f19b0a1e1490ab.png",revision:"ed046352e7a59f3a2b853d1d9a1374f9"},{url:"/assets/static/getting-started-13.4833fd8.5c7968afa0abcfccf6cc844367465067.png",revision:"5c7968afa0abcfccf6cc844367465067"},{url:"/assets/static/getting-started-13.82a2fbd.5c7968afa0abcfccf6cc844367465067.png",revision:"1eefe3d4ad737f4718073dc0ab38d58f"},{url:"/assets/static/getting-started-13.cbab2cf.5c7968afa0abcfccf6cc844367465067.png",revision:"282ef249bc0da65ac59bfa71cc674e46"},{url:"/assets/static/getting-started-14.4833fd8.73125189ffa662a78587a322da981df0.png",revision:"d7b51c2b9359588e55788dc5adc743ca"},{url:"/assets/static/getting-started-14.82a2fbd.73125189ffa662a78587a322da981df0.png",revision:"d619d790d50c6f9d5cd493a0b91348e8"},{url:"/assets/static/getting-started-14.cbab2cf.73125189ffa662a78587a322da981df0.png",revision:"c0d841047a050ff684aed49e60c93575"},{url:"/assets/static/getting-started-15.4833fd8.bf649fb35398df8340bbfd3670f0a86b.png",revision:"b7e3b9fb4eb54b33e47ccb17aefec95d"},{url:"/assets/static/getting-started-15.82a2fbd.bf649fb35398df8340bbfd3670f0a86b.png",revision:"31af712ea24e93b0c2f3c2fd3dc97ece"},{url:"/assets/static/getting-started-15.cbab2cf.bf649fb35398df8340bbfd3670f0a86b.png",revision:"0274dda921ae61ab95bfca15405b88fb"},{url:"/assets/static/getting-started-16.4833fd8.696ffaaa40e143e765b345789a75ffb9.png",revision:"63fd3c5d6ad344cda94428c89659d42d"},{url:"/assets/static/getting-started-16.82a2fbd.696ffaaa40e143e765b345789a75ffb9.png",revision:"54565f591d8a0789df90ebb6a4a8128b"},{url:"/assets/static/getting-started-16.cbab2cf.696ffaaa40e143e765b345789a75ffb9.png",revision:"c9f0ae5a8f302ffef65478725b14f086"},{url:"/assets/static/getting-started-17.4833fd8.44738d5eb7970905bd593362b04c6f74.png",revision:"b2e48098ddf4dbebaaf91482cbd27720"},{url:"/assets/static/getting-started-17.82a2fbd.44738d5eb7970905bd593362b04c6f74.png",revision:"0fea96b942e4b9ad5fd37aaf3fbb7ac2"},{url:"/assets/static/getting-started-17.cbab2cf.44738d5eb7970905bd593362b04c6f74.png",revision:"8080b8f949892a772e101a49ae5fe425"},{url:"/assets/static/getting-started-2.4833fd8.0313588be7a4ea8bce35c9175b9beff6.png",revision:"1da07e0f71da66c5099e3e86730071a6"},{url:"/assets/static/getting-started-2.82a2fbd.0313588be7a4ea8bce35c9175b9beff6.png",revision:"3200ebb39ff22d82334551b80e7e6d24"},{url:"/assets/static/getting-started-2.cbab2cf.0313588be7a4ea8bce35c9175b9beff6.png",revision:"70571c7bc68eec4f5f9d35dcf2d2d910"},{url:"/assets/static/getting-started-3.4833fd8.1f7f3033956969f2d73879c3636683c0.png",revision:"bd6ea82a00c9c8aa92df9a297b3c8c3c"},{url:"/assets/static/getting-started-3.82a2fbd.1f7f3033956969f2d73879c3636683c0.png",revision:"3f2f1402a6bf2c1c56de63643ecd0958"},{url:"/assets/static/getting-started-3.cbab2cf.1f7f3033956969f2d73879c3636683c0.png",revision:"f072d4c9a5f190320ccaec217581c0fe"},{url:"/assets/static/getting-started-4.4833fd8.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"9134e9eb497343e1042bac9c0702c10c"},{url:"/assets/static/getting-started-4.82a2fbd.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"48a40a73e4a0adee6cb3771e5b9c189d"},{url:"/assets/static/getting-started-4.cbab2cf.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"452afd88bf07652e26d4aae422db9f95"},{url:"/assets/static/getting-started-5.4833fd8.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"55b5486e140d593a6e151100fcfd54de"},{url:"/assets/static/getting-started-5.82a2fbd.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"b976c593aa74c4adbba1eebed5918ede"},{url:"/assets/static/getting-started-5.cbab2cf.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"36adcb2f59114914113929157cbbf436"},{url:"/assets/static/getting-started-6.4833fd8.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"f2180df8ce71b22504552afa3e5d6bf0"},{url:"/assets/static/getting-started-6.82a2fbd.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"3ae9b94c28932303a190c00da36160be"},{url:"/assets/static/getting-started-6.cbab2cf.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"28838175b7379e8b3f1a4083ece63ecd"},{url:"/assets/static/getting-started-7.4833fd8.12d7c440bcc9c15e246c549442e2d438.png",revision:"680a40633ef3c889afc1f7f7fe2f0331"},{url:"/assets/static/getting-started-7.82a2fbd.12d7c440bcc9c15e246c549442e2d438.png",revision:"d99bf7d61ced63315706c4e37fcebc22"},{url:"/assets/static/getting-started-7.cbab2cf.12d7c440bcc9c15e246c549442e2d438.png",revision:"a38d4b8d8ae2f12116c4184ca43fb03d"},{url:"/assets/static/getting-started-8.4833fd8.9398ec1bf2a300ec5ab845934d516359.png",revision:"0c76fea6efdea6ae2a51042446e43866"},{url:"/assets/static/getting-started-8.82a2fbd.9398ec1bf2a300ec5ab845934d516359.png",revision:"209e0ca72efaafc3191e797d98b3a3a4"},{url:"/assets/static/getting-started-8.cbab2cf.9398ec1bf2a300ec5ab845934d516359.png",revision:"9e398d68519f333d55b7b4a22076c521"},{url:"/assets/static/getting-started-9.4833fd8.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"f14590e40443084b931038a0fe373994"},{url:"/assets/static/getting-started-9.82a2fbd.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"8e27e8e8e9bb7c7499d57e550a78b499"},{url:"/assets/static/getting-started-9.cbab2cf.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"9d9ef4fd679c93e16e0b2619c8d40439"},{url:"/assets/static/icon.03a41a4.14b6279430a5e8ffcf50a17b6444e2bb.jpg",revision:"0d51b2111015f027311d1728306ae754"},{url:"/assets/static/icon.1b91758.18a6f12f3c5b833dc44f332f7e01bcd1.png",revision:"e5e6cd0a04617d86d4b7b129e13f7be9"},{url:"/assets/static/icon.1e38f94.4f43aa663a6b71aafee0052f3d97f04a.png",revision:"9983389c7e31af3ea915a2890c4fc75a"},{url:"/assets/static/icon.2ef5f76.541ceb744df4f9a2598327cb625ea7dd.jpg",revision:"81bc9e560fdd8ec9859351b098fb85c3"},{url:"/assets/static/icon.3df3210.18a6f12f3c5b833dc44f332f7e01bcd1.png",revision:"90f142becb786605c461238c64ba8805"},{url:"/assets/static/icon.566f69c.fd2c653f7592848b6e70464574b89035.jpg",revision:"85d5d75e5d57351264baf593dbc4339a"},{url:"/assets/static/icon.dc52710.a3356c160acfe3767fd0f28284067129.png",revision:"3c05eae17d11c97f8b327faf29d29686"},{url:"/assets/static/logo.1539b60.a5e261baa9961fe146ba3d259eacd132.png",revision:"5f61e3d6ddfefa2120976996791dc025"},{url:"/assets/static/logo.62d22cb.a5e261baa9961fe146ba3d259eacd132.png",revision:"c10d0cae06f0df213a55a60fa173fdcb"},{url:"/assets/static/logo.7b22250.a5e261baa9961fe146ba3d259eacd132.png",revision:"13b628b41565399bc98d83a8432b41e7"},{url:"/assets/static/logo.82a2fbd.a5e261baa9961fe146ba3d259eacd132.png",revision:"b0532c04dc892791494ec1ada9c258eb"},{url:"/assets/static/logo.cbab2cf.a5e261baa9961fe146ba3d259eacd132.png",revision:"f1a5354fa241c585797bcd1a539db95b"},{url:"/assets/static/logo.dc0cdc5.a5e261baa9961fe146ba3d259eacd132.png",revision:"c7ab07c5d8e2f51710e6150a3e17eb0f"},{url:"/assets/static/logo.f22e9f3.a5e261baa9961fe146ba3d259eacd132.png",revision:"36520c96d5b6eb7a6c909beddfaa51ef"},{url:"/assets/static/main.1b91758.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"a5fa01e812a0d093946220f7c86ab6c1"},{url:"/assets/static/main.1b91758.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"66c879b66c226450672d6bc3bf1f890b"},{url:"/assets/static/main.4250cd3.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"c16ef8fcafd1f7a2fb21f15be894700a"},{url:"/assets/static/main.4250cd3.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"fd7520edececb3ca1b2a79e12d984187"},{url:"/assets/static/touch-icon-120x120.png",revision:"1700e43bc7471e180aa1584fbe486e88"},{url:"/assets/static/touch-icon-128x128.png",revision:"25850408cd6bf099fc2255b9bca497d0"},{url:"/assets/static/touch-icon-144x144.png",revision:"9398355695d72868a27f743892e7e3e3"},{url:"/assets/static/touch-icon-152x152.png",revision:"1b83463e121efbc3dea4eb6cb8c9d88a"},{url:"/assets/static/touch-icon-16x16.png",revision:"041dc01dfb9c0f25ebf8f44c06391bd6"},{url:"/assets/static/touch-icon-180x180.png",revision:"c2031431c345fa94e5ff0ea02cf66c71"},{url:"/assets/static/touch-icon-192x192.png",revision:"e22c5bab58306977b8d400d9eff72796"},{url:"/assets/static/touch-icon-384x384.png",revision:"e8d5657279421b0221d87bfb9cac3013"},{url:"/assets/static/touch-icon-48x48.png",revision:"e69deff1e8970918c1188c45b333f2c8"},{url:"/assets/static/touch-icon-512x512.png",revision:"7685da60fcbdea37fa54a324ddabc498"},{url:"/assets/static/touch-icon-72x72.png",revision:"cd4f600463d136a96909be790b7f6370"},{url:"/assets/static/touch-icon-96x96.png",revision:"482528887fddfcfae136d6410770e84a"},{url:"/author/7dev7urandom/index.html",revision:"55567b8c303e6ec6c8275bcfe5160540"},{url:"/author/enderzombi102/index.html",revision:"55171b9be65d0f69f3620c2b3e2c9586"},{url:"/author/gamemode-one/index.html",revision:"04ebacff2cdf7c0f414445073e21dc1b"},{url:"/author/joelant05/index.html",revision:"136159e9189da1107c37c0c1ee3a2aa0"},{url:"/author/montudor/index.html",revision:"298021f8e056af53fc773fe7ed38be93"},{url:"/author/solveddev/index.html",revision:"b5fa6aa2a4cae9112086dee8b584599e"},{url:"/created-plugins/2/index.html",revision:"304ed6f72642ceece5cf628cd80212e0"},{url:"/created-plugins/3/index.html",revision:"765887d743c001fd5b2c452f0ac19f34"},{url:"/created-plugins/index.html",revision:"8670f2bab30db15f63f2510e3aae2af6"},{url:"/creations/index.html",revision:"704f5c0739da31115cc28cc590d18cf2"},{url:"/editor-docs/faq/index.html",revision:"222f0bdaedda432d5cba7cb2d82a72c1"},{url:"/editor-docs/features/index.html",revision:"491b64b3ee523a530dab8f9fda3d493a"},{url:"/editor-docs/getting-started/index.html",revision:"d28b832bad110400d78313ad222df848"},{url:"/editor-docs/index.html",revision:"87e02dcdca8fd857009c6628d04504ff"},{url:"/editor-docs/other/molang/index.html",revision:"1d29eb7187787db0fd98e54fc3c9c9e1"},{url:"/index.html",revision:"505e1e9a33addca1d67e328a7179c374"},{url:"/logo.png",revision:"a5e261baa9961fe146ba3d259eacd132"},{url:"/manifest.json",revision:"caae166894ac694a66597ded3a200888"},{url:"/pac-man/index.html",revision:"2aa79346d906f1397c21719ca6690ba3"},{url:"/plugin-docs/auto-completions/dynamic-references/index.html",revision:"a18eddce1daba2a6e30a88db8486224e"},{url:"/plugin-docs/auto-completions/index.html",revision:"0fdd338f7b55e4f4c572f02d8dec0173"},{url:"/plugin-docs/custom-commands/index.html",revision:"06f5d864cb21f1422953cee1399f2ea7"},{url:"/plugin-docs/custom-components/index.html",revision:"eda2879bea92528f58d02e9513e6cc4e"},{url:"/plugin-docs/index.html",revision:"7b4b306c5e98829f5a6423546fa5150f"},{url:"/plugin-docs/json/file-definitions/index.html",revision:"6f0840c53d8c2d220a0984823dc7a1e6"},{url:"/plugin-docs/json/lightning-cache/index.html",revision:"85a2d3316437cdd0e87b920d9bc276ce"},{url:"/plugin-docs/json/presets/index.html",revision:"6eb5a7602e61edbff15480afb3f82a19"},{url:"/plugin-docs/json/snippets/index.html",revision:"7e2fa50f051dfaa4596421c24cb1dddf"},{url:"/plugin-docs/json/themes/index.html",revision:"f4030c70db975e7fb73925cdf99a0307"},{url:"/plugin-docs/modules/env/index.html",revision:"76608d30b92ee5e34498b531c7348fe6"},{url:"/plugin-docs/modules/fetch-definition/index.html",revision:"11ead3b5eb024cf8c71433524dc58744"},{url:"/plugin-docs/modules/footer/index.html",revision:"507b74af413e32a646fff8819af632e5"},{url:"/plugin-docs/modules/fs/index.html",revision:"29bf6a08705ae78f78bdf4359f99ef70"},{url:"/plugin-docs/modules/globals/index.html",revision:"fdcd69df911f7e360b4a8601647843e4"},{url:"/plugin-docs/modules/index.html",revision:"01b0a860a57b656998847b9f50aec17a"},{url:"/plugin-docs/modules/path/index.html",revision:"27ccebaeddfe1a1f22e5d82bc39bc2d4"},{url:"/plugin-docs/modules/sidebar/index.html",revision:"474fb6a059b7e4f98400291f7e6474b7"},{url:"/plugin-docs/modules/ui/index.html",revision:"8457040da4d351994391e2ed8f6b1bd5"},{url:"/plugin-docs/modules/utils/index.html",revision:"5f221fe5706c1c495a96194f67604240"},{url:"/plugin-docs/modules/windows/index.html",revision:"789a4c280e4924d50f86c41de4202a99"},{url:"/plugin-docs/other/common-types/index.html",revision:"932d6f5066f1f60d2913edc87aafbe88"},{url:"/plugin-docs/other/default-file-types/index.html",revision:"c9a98b66193d44133deaae0b18461f33"},{url:"/plugin-docs/other/styles/index.html",revision:"52ccc304dc10f96bc40a3b3dc907e2e7"},{url:"/plugins/056b172d-77a8-40fc-9f34-226c163e330b/index.html",revision:"aad0bff7fd56ed521995529b9192ae2b"},{url:"/plugins/44dc6685-4258-4eed-9f62-e0d0fdfd41e9/index.html",revision:"d9cd0fe910d9f3ddb628aa95a6124a71"},{url:"/plugins/47c1b5f9-a452-4ed1-8d00-a0427dd5168a/index.html",revision:"bdae9b27c7950c696480f2b698683a18"},{url:"/plugins/4d73da69-6df3-46bc-9486-a602373573db/index.html",revision:"659d5967344be4747dca4a71d15d4c74"},{url:"/plugins/6337c024-f603-11e9-802a-5aa538984bd8/index.html",revision:"2e71576c46c3a4f2b776d462f41e6668"},{url:"/plugins/8497489b-3b80-45a6-94f3-65d8bd1188cd/index.html",revision:"cadb8386667c1cbd0f93c0229fd30578"},{url:"/plugins/84b65ea3-b206-40fd-aaae-3f884b12b4f4/index.html",revision:"2b54994010cbfd9dba70a12a7d20af79"},{url:"/plugins/87d418b3-e7ab-414e-9be1-13082c3cf46d/index.html",revision:"11f3aa35d316e9d9bbc3a9b4b4a1abcf"},{url:"/plugins/89457173-109d-4dff-9f7e-f8f8875e307a/index.html",revision:"1538a31f8b315d5dc5dee1d77e85dde1"},{url:"/plugins/a0ad4844-ee48-4687-9da2-f1a47f3d1c3a/index.html",revision:"49f27fe4ff9156bea11ed0c83e145b61"},{url:"/plugins/ac340569-8df3-4409-ac9d-b855b183210b/index.html",revision:"d8593aea2cd478eb7bbed2c630c23988"},{url:"/plugins/bridge.ui.common_window/index.html",revision:"674853f7cc11cfc5279d1c546d2361f1"},{url:"/plugins/bridge.ui.confirm_window/index.html",revision:"978f4884be16974b16a60577dcb0f2ed"},{url:"/plugins/caa0a585-d513-48cf-a803-c920055e2afe/index.html",revision:"b2053ac0dbb61ec30a3ce09b1aba9f73"},{url:"/plugins/d9419ae7-69ec-46d6-9080-a9ff48e6edab/index.html",revision:"59b8362a90a8c33072cc7666531f1379"},{url:"/plugins/ea349bf3-628e-4c8f-924a-157a968cc320/index.html",revision:"cbcd9c64aaceb576faad368635a3f298"},{url:"/plugins/ENDERZOMBI102.bridgePlugins.create-a-block/index.html",revision:"5c296a43d7c1e09a364b67c8722f4eb1"},{url:"/plugins/f5cecd90-dda9-11ea-87d0-0242ac130003/index.html",revision:"d88ae6c23a5e1ded4b5fef81adcb7b92"},{url:"/plugins/f883bbc1-d81a-4373-8ec7-a11b81d9070a/index.html",revision:"626c98719f8772be7c6fd73bf1e14279"},{url:"/plugins/JustSkitzo.bridgePlugins.create-an-item/index.html",revision:"775b6ada77d77dcf5f01057e31237c5f"},{url:"/plugins/solved.features.dynamic_function/index.html",revision:"10603cbf14fb9bcf5c15b3d7d6c15fd9"},{url:"/plugins/solved.features.dynamic_json/index.html",revision:"640945358dc20f51a1abcb2af8b7db07"},{url:"/plugins/solved.utilities.bridge_plugin_creator/index.html",revision:"a1ae9590e7eb681d14f35a89e865c0be"},{url:"/plugins/solved.utilities.console/index.html",revision:"612f4c2c01dbcb4976018556b64026e9"},{url:"/plugins/solved.utilities.crash_overview/index.html",revision:"891508b41d933ec2c8123438123069fa"},{url:"/plugins/solved.utilities.file_search/index.html",revision:"52da74001c951d95fec244483a066ba2"},{url:"/tags/advanced/index.html",revision:"bac3002f1683fb900ec16b32426732b0"},{url:"/tags/component/index.html",revision:"5ac09c3d33467bf9c8e5a223bcc29f65"},{url:"/tags/curated/index.html",revision:"cbf358b71ba0ac31f7fd045f5558ae03"},{url:"/tags/economy/index.html",revision:"9dfd0c582ffaac21f46063431fc8ffa6"},{url:"/tags/minigame/index.html",revision:"8607c7f222e8253ac427235db443b51a"},{url:"/tags/mining/index.html",revision:"7d66b3213aceb3a9c65b58796a4d6f5f"},{url:"/tags/presets/index.html",revision:"f2038a4857634a9152ae165c5ff93c9b"},{url:"/tags/snippet/index.html",revision:"cca0f7a45b77ae228217dc26df1bcb3b"},{url:"/tags/theme/index.html",revision:"06490e29bbe588b8b5c9dc3ff3d78663"},{url:"/tags/utility/index.html",revision:"461509f4cf068a077c9099d1e4a8d926"},{url:"/tags/v1-0-0/2/index.html",revision:"0ca04bdd062974bd0fd15b04e8bf78c7"},{url:"/tags/v1-0-0/index.html",revision:"5c326e3e7e06820a51daa0c0bd9a1116"},{url:"/tags/v1-0-1/index.html",revision:"6302cc2e00374fa959702e3d46bbaa43"},{url:"/tags/v1-1-0/index.html",revision:"7b24fe59a53ee18bbc4d537140fb9482"},{url:"/tags/v1-1-1/index.html",revision:"990891f1c5b51d19cf9607413664cd11"},{url:"/tags/v1-1-4/index.html",revision:"3f3cf7cdc598e97db6926a0e2200f483"},{url:"/tags/v1-1-5/index.html",revision:"84683feabaf2825a9c384e5383b8be90"},{url:"/tags/v1-2-0/index.html",revision:"aadf52a0d1b35ea97a8f47ec3241c0e9"},{url:"/touch-icon.png",revision:"e64600d215ff68c5afe9cc7d5bbdd179"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/plugin-docs/modules/windows",revision:"4925427da638547a9ab39dcd6d63aebc"},{url:"/plugin-docs/modules/ui",revision:"67fe44503a425cfa80527033e5021ec8"},{url:"/plugin-docs/modules/utils",revision:"6a2db9c16b3f169f99351e1729a36a48"},{url:"/plugin-docs/other/styles",revision:"163726e4c56d13d5b27d4278a57cfd26"},{url:"/plugin-docs/modules/sidebar",revision:"0e8d93117c9e35e73b42b5a4432caa45"},{url:"/plugin-docs/json/themes",revision:"2b7e139ef3e47dc7f6740c77943f1e0c"},{url:"/plugin-docs/json/snippets",revision:"efb27c100bfdd6f00be31af6257905f7"},{url:"/plugin-docs/modules/path",revision:"b882ae2c971c4b5184665f0c8cfb5c5d"},{url:"/plugin-docs/json/presets",revision:"8650b170cd42d8aa95857a16c7f2cab2"},{url:"/plugin-docs/json/lightning-cache",revision:"853ab9ad6d70afc4b7b2bc8a68187957"},{url:"/plugin-docs/other/default-file-types",revision:"8b8077ff13dd6efb45164852af650c52"},{url:"/plugin-docs/modules/fetch-definition",revision:"34f95dde3bd5ab5ceb0b2fd6b5f1c324"},{url:"/plugin-docs/modules/globals",revision:"396cacf477003770b17c87c10d5a017f"},{url:"/plugin-docs/modules/footer",revision:"b1996dd8c02f276e640bb9974abbfefd"},{url:"/plugin-docs/modules/fs",revision:"e08b0d555fec3924e45a345d21911bad"},{url:"/plugin-docs/other/common-types",revision:"1386bf69a1d192b57f869dcb3df5dd12"},{url:"/plugin-docs/modules/env",revision:"fb9dc48ca6a91c47b2247356655ce30a"},{url:"/editor-docs/other/molang",revision:"65a42e86a21a663a2b0ac28441164ec8"},{url:"/plugin-docs/json/file-definitions",revision:"4e7c2df49f8e995d3a9b71d5a4b4cc2d"},{url:"/plugin-docs/auto-completions/dynamic-references",revision:"99c76df544827f4bea7748e9af20cce6"},{url:"/tags/v1-0-0",revision:"ebf6644fce84f431d8bfcf27f07c1b2e"},{url:"/tags/v1-0-0/2",revision:"8a94ae2d1c47b5092b690afa49286838"},{url:"/tags/v1-0-1",revision:"32d5893eca09942910da13ae0be2c653"},{url:"/tags/v1-1-0",revision:"a89fffbc6e70f1a8616d6c693af810de"},{url:"/tags/v1-1-1",revision:"bad014755fe4d6d2acbdcc9a65151c0c"},{url:"/tags/v1-1-4",revision:"1666c54706fc96f3ec0d334c7800c31d"},{url:"/tags/v1-1-5",revision:"6760d25b2d48f44ab908eefd7b0bd4f6"},{url:"/tags/v1-2-0",revision:"34371c141e11b5c284727f6a02d4836d"},{url:"/tags/utility",revision:"b9bcd283643d8f5e5d5e5ff13fac998c"},{url:"/tags/theme",revision:"4a816ae63699e6d478379da166f09b3c"},{url:"/tags/snippet",revision:"443188ec870f0aa5e75f1949c15e6e63"},{url:"/tags/presets",revision:"70c053b297ea61b1001e91d3733a3dee"},{url:"/tags/minigame",revision:"e6706847134b36790938d0d956c552e1"},{url:"/tags/mining",revision:"9f207bded5b17dae80417bf03623c56f"},{url:"/tags/economy",revision:"aea0f3ea6bd2c107ba9c68419194ed01"},{url:"/tags/component",revision:"32ad3cfa39ee316f77415fd33ce8b3e3"},{url:"/tags/curated",revision:"c380857a493dff00af42e1332a324332"},{url:"/tags/advanced",revision:"c7cdf9145963d7cb605aee778e51f464"},{url:"/plugins/solved.features.dynamic_function",revision:"ac3a45f890dc026f2c72b9ec174514fe"},{url:"/plugins/solved.features.dynamic_json",revision:"3238312600fe6206a1fb94fe36ababc9"},{url:"/plugins/solved.utilities.bridge_plugin_creator",revision:"8fdfb81a71530a0ebe23cb122bc974c9"},{url:"/plugins/solved.utilities.console",revision:"94187fae94287c894c7bc473eb1de1dd"},{url:"/plugins/solved.utilities.crash_overview",revision:"6a2193cb2a846524f170bf2f09d31fab"},{url:"/plugins/solved.utilities.file_search",revision:"74ca46bd45d91e1cb22c6ea9f3a1bd43"},{url:"/plugin-docs/modules",revision:"f6401df87dd9ee89021a499fa93d5a8c"},{url:"/plugins/f5cecd90-dda9-11ea-87d0-0242ac130003",revision:"93abc65d9ddcb52de5b6fd52866d225a"},{url:"/plugins/f883bbc1-d81a-4373-8ec7-a11b81d9070a",revision:"33bf63db664d103d1d7c85f3e48a517f"},{url:"/plugins/ea349bf3-628e-4c8f-924a-157a968cc320",revision:"164584d7c441b5d64df08db54ec63ffb"},{url:"/plugins/d9419ae7-69ec-46d6-9080-a9ff48e6edab",revision:"32c2ad50a1742c6142db4d7954b77e8c"},{url:"/plugins/caa0a585-d513-48cf-a803-c920055e2afe",revision:"3ce9ad1c06ef3042a0195eed67a0882c"},{url:"/plugin-docs/custom-commands",revision:"abeecd5bfc3f5be0848befb43e48b8cd"},{url:"/plugin-docs/custom-components",revision:"d73003ea4237b9a931bf8f23b9b28c7f"},{url:"/plugins/a0ad4844-ee48-4687-9da2-f1a47f3d1c3a",revision:"472bf8e41f1d395cf80f4d6e6a227dc2"},{url:"/plugins/ac340569-8df3-4409-ac9d-b855b183210b",revision:"7a5ed08e20d899daefe7e2f9f23a06f7"},{url:"/author/solveddev",revision:"e3cfbfd7e54c231b25f820a717ecf704"},{url:"/plugin-docs/auto-completions",revision:"8c3c907019a4c79c2ade079e109dc930"},{url:"/plugins/bridge.ui.common_window",revision:"23b79de15f7e9a7b0e1d85e4970fd26d"},{url:"/plugins/bridge.ui.confirm_window",revision:"fdce2a1ac60d658b25ac7ddac4ad51a7"},{url:"/author/montudor",revision:"9ca300ff89325b8434c20d7dabc82180"},{url:"/editor-docs/getting-started",revision:"bfce7a6460c67cc3a183ee88b459d009"},{url:"/plugins/056b172d-77a8-40fc-9f34-226c163e330b",revision:"bd293711d3173f88f4fd881d5fbac8fb"},{url:"/plugins/44dc6685-4258-4eed-9f62-e0d0fdfd41e9",revision:"442e24044418f8ddc329545600b64934"},{url:"/plugins/47c1b5f9-a452-4ed1-8d00-a0427dd5168a",revision:"3ca1a9ba75e0694ba8b9cd44e95c2b38"},{url:"/plugins/4d73da69-6df3-46bc-9486-a602373573db",revision:"677e22d9708a3ea1ac38096248454689"},{url:"/plugins/6337c024-f603-11e9-802a-5aa538984bd8",revision:"80ad1dc6471b96d72f675505387cc7dd"},{url:"/plugins/8497489b-3b80-45a6-94f3-65d8bd1188cd",revision:"f908b0cd4e316ae2987b45d06214d646"},{url:"/plugins/84b65ea3-b206-40fd-aaae-3f884b12b4f4",revision:"df73a858286c3b2c8236b3eba8a17831"},{url:"/plugins/87d418b3-e7ab-414e-9be1-13082c3cf46d",revision:"e3f44a12af48fbb40e50f2ab30641ccb"},{url:"/plugins/89457173-109d-4dff-9f7e-f8f8875e307a",revision:"50fa44a73eac496bf915eb274708c720"},{url:"/editor-docs/faq",revision:"08e35c58f85a987e5fa8bb5935ad0040"},{url:"/editor-docs/features",revision:"ef361341eee61fdd0dfe3e3902748ac4"},{url:"/plugins/ENDERZOMBI102.bridgePlugins.create-a-block",revision:"6739936c36e3745a0f11f19ffe61cdd4"},{url:"/plugins/JustSkitzo.bridgePlugins.create-an-item",revision:"4fad7f44760525e8db530afc5a7a9a1e"},{url:"/author/joelant05",revision:"ddd600b5440a88125cce026676db17e3"},{url:"/author/gamemode-one",revision:"7947fcb557e0215df27bac8f9ccbc6c5"},{url:"/author/enderzombi102",revision:"8a2dca7ba2e9ef79ff2a4e56edab44cb"},{url:"/author/7dev7urandom",revision:"73eef6eec28008b481bf4e396135364c"},{url:"/created-plugins",revision:"1c8f3a7f8721d92f7ac1f5fed3fc88c7"},{url:"/created-plugins/2",revision:"fb1a5aaefd261a8200c8ab1ed5f8621b"},{url:"/created-plugins/3",revision:"2f541f2be28e1e988a43f2f632b60903"},{url:"/creations",revision:"a3f98ad857c7681fa05e6ed622b0bc9d"},{url:"/pac-man",revision:"69608d815529fc0c78ceab8ad94ae5f5"},{url:"/plugin-docs",revision:"c6288819b262d70980ab862394971d6a"},{url:"/editor-docs",revision:"d76c3a669edec636ae038a7c9bffdbf9"},{url:"/advanced-mining",revision:"dc8e30f749fcde52cb264cdffb61d6f0"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
