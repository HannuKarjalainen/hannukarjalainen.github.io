'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
".git/config": "2e4e782c846425ab4ef373b23c6dab31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d30dbfe01c2e75d77564f6652986560a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b294c48f5ff57510c4084e86461f6fc",
".git/logs/refs/heads/main": "5c4930dbd196e75ac2d04fe504a639dc",
".git/logs/refs/heads/master": "ef181f64dfe6f2ee61678cee48d9028b",
".git/logs/refs/remotes/origin/main": "9a78cc4a3eab4997b3e8be221d436087",
".git/logs/refs/remotes/origin/master": "664ead3290da377aaba5afd016105279",
".git/objects/01/5f0041e973f07ee0aa7e29dfe0c61642600cc6": "d878a78d3509a69df4d88cd570c58c3d",
".git/objects/04/7f165ba54eb64c61286be485196a92a748d1c0": "38115e7eca619f880b5773fef9e9b63a",
".git/objects/05/2444ae11675edc238381c3f75b9a74e77e4c7f": "453f8cf204a9d299018d68415f50bc91",
".git/objects/05/2dc70988413712833c33fead2aeb5996ffaf59": "3c1103f90a7a46a1f09642f6594a2312",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/07dae7f14b97d45495a0b8bd6b38f3bfe12c3b": "4be68aa309b54752f30c7fd1166b3022",
".git/objects/09/477a96be28718541dd2514c55467e9a503b778": "d09a638e6361cb50c648d48d32c95660",
".git/objects/09/e823569699b0bc12f567b1f1bf0f1781082737": "8fd8f7bf80e09621f7c32e004632b827",
".git/objects/0a/5d5fe830bc2604bf1d8f31ec1a52a5839517f2": "2d98040ff5f2368255d87dd25a859f68",
".git/objects/0b/a3796c951845074500b7c8c45d057955397073": "ae4d6e149199c75f3b229fd667cd5d54",
".git/objects/0d/c99d2944b0e0027b0727061e7eb9e1744052b6": "0cf793bc29107041c22fb505b8d8bc3b",
".git/objects/0f/1979596b903653e065b971270459ab2c5d73b0": "5e021e0b3c2ea40b428d65df6aa85ddf",
".git/objects/11/5ff1b8d89f89326a5a30de367fa77a160f2cda": "dc8422f15f825e6319f72addd658c81f",
".git/objects/13/f1557c3da449ec1ecc797d3264627ed89c4dc2": "74e9666f6819ab8a8b3dfe31ab7de822",
".git/objects/18/1092eff1abc1fb211150766740fd5a737cd243": "eb91ecf719935a9d992098d76507b67a",
".git/objects/19/d308322338ffc53e146a33de937aa3cff1fbce": "1700948213c479ea4ec25d64cd6786b7",
".git/objects/1e/18407fdfe5da1c195582e819b8659a82b4a224": "5be78c5d317cb23046fc5f0df41d8a7d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5e247b343e23b2d61e9f71db14d3cc7db9078d": "80a5b08bf25475f5bbb8922fd69b6ef9",
".git/objects/24/42c36708df1ef5d0a9733cdf11ef69563d0ca5": "02262a307171cf26b4b0d5aa3c42f84e",
".git/objects/25/006beffdc8f2d856c75ec5ba5d74c95b5e8adc": "e980ca3882a9591940588ae78d9b8a6f",
".git/objects/26/47ed787edc12b0c44d3346ec27d8a11d5bf06e": "deb66232384d9114319e21dff8ace5e1",
".git/objects/26/d8f6e2c8fa5a719a25973a3bdd5e34cc2ad41e": "447da3a7f0cc927a5ec20638114c937b",
".git/objects/27/a266da2432512d9c99cfaeca0fbd121ae2ede0": "a0f8e87cc27492747d57c163d56fe1f1",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/5d8b38990150ae40716d665553f6d7bf9929f7": "950a51f194229224ff93510bc84e06dc",
".git/objects/2b/ddbfab3e4b7bd68201a7e562fa5bc2024ba024": "33bceb0228d16bb80c0b26dd0f55712d",
".git/objects/2d/738f60bb739b2c4c3b91ca126907f89e0b820e": "af4685ec9433f8499b605b8d70c574fd",
".git/objects/30/01124c122714628cafbc6c81d6b0e6c22ec95f": "7708bed507b30f1a6fe6b289789376e1",
".git/objects/31/5a423b2a4a57c8081e6c816dde489243f46d69": "fa51a89f49db08dd0ed3ba8a440e8a57",
".git/objects/34/81887f1607391156cbce289978c4b776cbaff3": "ba630f971de65b3b8365c1c2b898af0a",
".git/objects/34/9df20608d57f33d73924793c72cb492da104e7": "656d55d91ed8d461c486c7820413a364",
".git/objects/38/2b1fa727801e056974ebe6d9d5863902aa2536": "dc09dd95253e5f2d1bfb16a985f67d05",
".git/objects/3a/5b80650c98fb88dcc0fc2c33814818cf05f49e": "c5b8b0bea3706db2f622e914f2570b2e",
".git/objects/3e/20b74766364e8f8646ea8dfbc99e26eaf35043": "391045ba0ae598088dec00e430caca26",
".git/objects/3e/4b31db723f6d5d84d63268a9b01b1005a830d7": "700ae229199343df092b5634a6bbaee0",
".git/objects/3e/793310bc0d74754d9b62c8083ae7d6797c4b8f": "30556ddfc0182f493e0723dd95f5a6f2",
".git/objects/43/f89489b321344239d7c05a4a62fc7661ccce02": "665ee0389efea10c7f25f51c9bcacc85",
".git/objects/46/2fc581446d2de25c66a6b9478ebb5080559582": "bf91a9082ed421ab8807d3b614e59f7f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e1a183412add55d1fc84a6515ad70865ca8e31": "829bff179c2d692f96577609f1d22c2f",
".git/objects/4a/0d8649b3d7a33178c7cb5b77322b624678303c": "ec4cad7dd63d9742dc8334669e138d43",
".git/objects/4b/362188bdebc2325f53efe1c9f85d36ecb67de7": "966ae246b41caeb4f8059d2ca2fe2f20",
".git/objects/4d/184f636810edbe4178ff1adafae727af473599": "f6c3155313c589a225c715a456842c7b",
".git/objects/51/74a774a96abbc7ca92a216b713ed380015c316": "abee4092ea288d8c21e6613ec1d90d51",
".git/objects/54/529248b8146a599e484286468da2867247350e": "53c80ffaea7c00f2c4ff1c449b2541fd",
".git/objects/5b/1276457209c3e4cd2e18cb56630ca29f4a3ade": "617cbd2d37b30a75908b906786073bf3",
".git/objects/5f/2ae9dc70f24dce6292a7598cd3136b35c89547": "f0848b2d109ffedb329e21cac1d6503c",
".git/objects/5f/a3ca69c7fbbf4f630918b9f8c5f77458598cd3": "263dc4e3023707b6a7a13995f2892bd3",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/93f12938898dd538e9307275a005e4958c2fab": "6073d1a29f6ea7b4c7110f84887005e2",
".git/objects/65/f550e7d7e34f5d9df7b268838256187e2fe6d9": "83d1925e062528fd70d5727da7021214",
".git/objects/69/13a889290c7c2b5f8a428e94be8c573e3a385f": "e19b8e7a026d6790f4832a37841e2ea3",
".git/objects/6b/f9000e53b625cccf681c4798b1a6fbd2b9f64e": "2fed6b75366e6353fcfc1efeb9f0ea3c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/3062baa7d8f18014f321b5cf306861a439fe46": "30b9b795920708e577c3e03203d91ea7",
".git/objects/81/0c7ef1f756a62a447ec2ffb5a6f3c34b422612": "f0805e1fee26e2ed3c0ec48ab10f0241",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/84/dcf8cb34ee591f00528fb9113584ba48528059": "38e1a1c17a869f9761e47c99f2498110",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/8dbfdb459165bd6deb483307d54a4a90ab417c": "3ea183080333f3d84895084dd9d32517",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/22734326cb5c6887dd6fc7a7cb44b40f6d3b48": "6926268119ea2807273918582b30c879",
".git/objects/95/20641616a16d175865d107364abd1922c77d44": "3413b1edddfb241a2c90fd7e4830e339",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/00439485c80c5a52ed4f4139bf6a8e878764e8": "d006aabc96965c9966bee27f92e71831",
".git/objects/9d/523bc996d95bf3ab4884aea082fe778a7553cf": "cc45a15ee840c55c91d8052ef622f21e",
".git/objects/9d/ac2855581999b84d3817841a99831c5d991230": "551bb0729f6ea615c66812807cb03f5e",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a2/563d8a51ff73263539c1605f5c1388e3c3d183": "f6d65962d5a701f029e0a8a587459993",
".git/objects/a3/ccc9bb0f4a7f0c4b1189d6519ebdad9c40253a": "9317c264d9cf8d378772a06a9677be77",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a5/2a1afdf89133e9068fc12e752fa96552a7f1b9": "27a182beedb42ef68504f7ec8c931e96",
".git/objects/a6/e1963958e7fd98f63e39e6ad7b8bb41f399f74": "5590bd7abfd2b9f3add9937a763389ec",
".git/objects/aa/8d6e545c2b25b7c0e33a9c9c0cafafc368be17": "a551f9d410ed2db11e29ab438db8d4de",
".git/objects/ac/daef82af20529efe789f732cfb552c0946946a": "bc997646a6cdf24d6cbffabdebaeda9d",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/87efab135a011b0680fb25fe753dc8e4cf964e": "fe863c2f8580555a1de26b2c5f004420",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6e2f4b29f5fb7c5849441c3e985157bfb2ca32": "871e81663197c726ba230252fe8e4e75",
".git/objects/b1/7942af55a374a678fb0d8cff7fdc4430832306": "41471c643842a90978bae9d4dd476b56",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/c77026d482043bfc8e601fce86e8cd698c1c35": "2743aa821f7f61fac144527fc508e499",
".git/objects/b4/1e89600fc47bb4488cf9a64cfd2aa431561c28": "789f12e929768aa5a7d46803f773852c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c43eb9b88707dca6a24620f680a18fcaac4e63": "b3a14256d4d20bee65a4c80496428646",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/78a4d5063a8191c8698c122f809a8319b7c098": "6c006c5aeccb6c8a83c437c1070807b6",
".git/objects/bc/41b7ac1a48ae9baf761360e31c2f404a501291": "02d3d4edd92cdacc13fec28be3b50215",
".git/objects/bf/fee51ba20606a6471fc3f2380c89f8372a975a": "1915cb50b000d30975605ed8c4f5f47f",
".git/objects/c2/015857adf2a2b8171eaaae344056cb70fff65f": "1f6d86ff04d914ac072b1cd582d73e5b",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/364048449abc3e65a026c55ed3ca4aa1c2e213": "e37a89f77d69e2654fdccf975fa58a46",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/e6099b7f4594dab7d892d4c08020b465757070": "9ae92c26dfc98d315f360b2ff479857e",
".git/objects/ca/2cd74e2969b190b5fc54bf4b9ac36d6faedea4": "aa67ec19ba831098ac1fd0982ab1fe70",
".git/objects/cc/916506b4ca6b4c1c2e3e32d0be93e2374f4eb5": "ed3f4952db9e5bef38b5ed50b0208b7a",
".git/objects/cc/e89e9b1060a0ceb46f57211485937297544967": "59591ff14c7355c513d0189cdd9eaadb",
".git/objects/d3/979920278136367404c45819f0a445934ad8ff": "37c3785b788c0df7fa4cfa6ab44d4158",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e3972aab0481de3fb69635ef01fc2d96edef62": "016aded366643b6e0a29af42dec05340",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d413ec528cf23f608eeb9734107ab8b4ca20c9": "ed5477d8fd1349582fcf419ca813cd68",
".git/objects/d9/d5729e3648cab63f891c7d4ffef65d31092c46": "147f7b27855222bd98f8bca1f290f31e",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/df/164cdc7ad553c1a067e7d602ff77dee4592c45": "85987e530ec50ff4d16a61a5abda577b",
".git/objects/e2/eb8074a973c09af2d562e357eb2babbc713648": "991da20fd7519a8323ed87be5cb2edcc",
".git/objects/e3/d1b2af4cba008d679d097318716a8ad2322ec9": "e32f89fdf6486140a38792fbe2d32abb",
".git/objects/e5/17a10bb816b7c315d238775e52f88597695a50": "5643bbe63293be87364f21714ad02ac5",
".git/objects/e6/777abdff03c26d76222b05fbaa3614e608aa21": "672ce6ca0f84ee9df49ca862c61865cf",
".git/objects/e7/e5025f41e06820a0969245da77d4022d44cd42": "6e1c992d62035136db8ebdee49286ef4",
".git/objects/e9/cc8d6ecfd8084ca41117c3ea24fbfae516acb4": "de4793c38bb4b7143337bac13aed0a7d",
".git/objects/ea/104f3164bbea24148f41b26247fc32eaf4ee22": "5f613fa132b18da7b8cbf2d32d938911",
".git/objects/ea/388308166e7aed4d7ff9fd40abf8781e5beb71": "51230f9020fd27602e188ebf9d790f37",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/bf5a2120253547443af0e9fc5eb09bf4b7e5bf": "f266382b9f5d6879cfc8a0aa48c88151",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/900fefbf196bbd51c91bbc261b5fb19c702557": "0dc29e9cce0f2678579fa09e4283f1e6",
".git/objects/f3/61fc3b1a1444c69a4d2a3e1526d541956313b3": "f5293ba8d2761c4f73045d2ed4708c81",
".git/objects/f3/bcb3193dc1a69c0195dfeb6597f19264e68341": "2c4dd286ef3911239b8554d25116765a",
".git/objects/f9/c51feb828aeb83e0c5a2ed12b40504989b84c2": "68c9ce355cfe90988100f3d4466f28fc",
".git/objects/fa/9d299b51bf77af56b25fec702ef6364bf2b940": "18f348f534e025443826890343e03043",
".git/objects/fb/03a4bf41c60d6c203cb087d1adab2101bd9204": "627d546ff0fe9d8dc030df340a458466",
".git/objects/fd/0165919273787bc069a63d67f6353c2a992842": "f31b8f8425dababa68d56ecfcba5dd8f",
".git/objects/fd/abe36981ea5db7f6f68002a5f83ac0d8c7251f": "4ff36833b48ffd0977e105986a35d8e5",
".git/objects/fe/773c590ccf9c9f9d46a7e49f8a1dea0f414206": "a88f52bf1e13f70ce47d0ef0db357e01",
".git/objects/ff/8ccb6efe0a01e378d8acd4d97fdb8f9f3bfe30": "fdf40cf8d579934e6340a938f7ed6160",
".git/ORIG_HEAD": "ec97958fa29808ae042cf85938a66586",
".git/refs/heads/main": "d208e413c760cf75f74d16d3947f68f4",
".git/refs/heads/master": "ec97958fa29808ae042cf85938a66586",
".git/refs/remotes/origin/main": "d208e413c760cf75f74d16d3947f68f4",
".git/refs/remotes/origin/master": "ec97958fa29808ae042cf85938a66586",
"app-ads.txt": "5e7179616d449cb8697123c31dd8f8c0",
"assets/AssetManifest.bin": "2d09d17343cfededf0bca1aa9c6fae46",
"assets/AssetManifest.bin.json": "97923f8ddecd14b32aef89266ec21a04",
"assets/AssetManifest.json": "33c336434d39e2a88d2b4635056ccdf7",
"assets/assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/c.png": "5c5d0d00e5b867bcca03793b9c881bbd",
"assets/assets/cpp.png": "39163233a6025d4e973e052356ce7c34",
"assets/assets/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/expo.png": "b095a40778bd1be1f4689bfc2f5a1416",
"assets/assets/flutter.png": "98fb41d92eeb4dd3682054fb9e2276f6",
"assets/assets/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/Google_Play.png": "3568ab2a2af3bbaf93c8ce84a420b599",
"assets/assets/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/assets/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/java.png": "438a059ab04c6f8e625a8fab6fd4646c",
"assets/assets/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/kotlin.png": "fd41902a3f080cf5674c3cd7a7426eb3",
"assets/assets/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/nodejs.png": "0ef2736a49e172ecf04f1e068520358a",
"assets/assets/OxHorse.png": "2caf8366db7aee8a8a1e5d128ddbdbcc",
"assets/assets/postgre.png": "03972188006c92cc224ffbcbaa7ea260",
"assets/assets/projects/placeholder.jpg": "62c27f9a19e1e897333936d0ae2829ce",
"assets/assets/projects/placeholder2.jpg": "3079bce45eeda1f9bc1e87d6727a056f",
"assets/assets/projects/placeholder3.jpg": "a5adb5590a7beebe43e4fc29553d8d58",
"assets/assets/projects/placeholder4.jpg": "299b05f5a46d960911aca64a84e16d05",
"assets/assets/projects/placeholder5.jpg": "fa4be02ebd206a36863061264ea3f7e5",
"assets/assets/projects/placeholder6.jpg": "edcd618cf0934e52e5deb383ef2adafc",
"assets/assets/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/reactnative.png": "077f92e561c356a99072a3814402e3e3",
"assets/assets/sql.png": "0b9623f2c737b12d6e838c70238786de",
"assets/assets/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9429359b297c6803061f9a02a931743a",
"assets/NOTICES": "7a856ee46ad56e11dfeca14473caebc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c9b59e0d10a137e67188d6aa733a2eef",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbdfc3aea58475af742ea4441b7cc848",
"/": "fbdfc3aea58475af742ea4441b7cc848",
"main.dart.js": "3ff25a0fd2f3f070b2604248cff190be",
"manifest.json": "83fb2b9ff5bde0c7eb656c32597d3ec5",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
