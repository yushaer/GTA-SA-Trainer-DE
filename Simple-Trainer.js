/*
	Scripted by Yushae Raza
	Free to use/redistribute but mention me in the credits.
	
	Only tested in 14388 build.
	
	Usage:
		press f4 to access the  trainer menu
		press f3 to access the vehicle spawner
		press up/down arrow key to cycle through each option
		press enter to select 
*/
/// <reference path=".config/sa.d.ts" />


const Trainer_Key = 115;
const Spawner_Key=114;
const Shortcut_key=17;
const VK_UP=38;
const VK_DOWN=40;

//data
const weapon_gxt=[["WEAP00","WEAP01"],["WEAP02","WEAP03","KNIFE","BASEBAT","WEAP04","WEAP05","KATANA","CHAINSA"],["STWE001","STWE002","STWE003"],["STWE004","STWE005","STWE006"],["STWE011","UZI","STWE008"],["STWE009","STWE010"],["sniper","rifle"],["FLAMET","ROCKET","ROCKHS","MINIGU"],["GRENADE","WEAP11","WEAP12","WEAP25"],["WEAP13","WEAP14","WEAP15"],["WEAP07","WEAP06","WEAP09","WEAP10"],["WEAP16","WEAP17","WEAP18"],["detonatr"]];
const weapons = {
"hand":[0, 1],		
"melee":[2, 3, 4, 5, 6, 7, 8, 9],	
"pistols":[22, 23, 24],		
"shot":[25, 26, 27],	
"smg":[28, 29, 32],	
"ar":[30, 31],			
"srifle":[33, 34],			
"heavy":[37, 35, 36, 38],		
"thrown":[16, 17, 18,39],		
"special1":[41, 42, 43],		
"gift":[10, 11, 12, 14, 15],	
"special2":[44, 45, 46],		
"dtn": [40]		
};
const vehicle_gxt={"400":{"GXT":"LANDSTK"},"401":{"GXT":"BRAVURA"},"402":{"GXT":"BUFFALO"},"403":{"GXT":"LINERUN"},"404":{"GXT":"PEREN"},"405":{"GXT":"SENTINL"},"406":{"GXT":"DUMPER"},"407":{"GXT":"FIRETRK"},"408":{"GXT":"TRASHM"},"409":{"GXT":"STRETCH"},"410":{"GXT":"MANANA"},"411":{"GXT":"INFERNU"},"412":{"GXT":"VOODOO"},"413":{"GXT":"PONY"},"414":{"GXT":"MULE"},"415":{"GXT":"CHEETAH"},"416":{"GXT":"AMBULAN"},"417":{"GXT":"LEVIATH"},"418":{"GXT":"MOONBM"},"419":{"GXT":"ESPERAN"},"420":{"GXT":"TAXI"},"421":{"GXT":"WASHING"},"422":{"GXT":"BOBCAT"},"423":{"GXT":"WHOOPEE"},"424":{"GXT":"BFINJC"},"425":{"GXT":"HUNTER"},"426":{"GXT":"PREMIER"},"427":{"GXT":"ENFORCR"},"428":{"GXT":"SECURI"},"429":{"GXT":"BANSHEE"},"430":{"GXT":"PREDATR"},"431":{"GXT":"BUS"},"432":{"GXT":"RHINO"},"433":{"GXT":"BARRCKS"},"434":{"GXT":"HOTKNIF"},"435":{"GXT":"ARTICT1"},"436":{"GXT":"PREVION"},"437":{"GXT":"COACH"},"438":{"GXT":"CABBIE"},"439":{"GXT":"STALION"},"440":{"GXT":"RUMPO"},"441":{"GXT":"RCBANDT"},"442":{"GXT":"ROMERO"},"443":{"GXT":"PACKER"},"444":{"GXT":"MONSTER"},"445":{"GXT":"ADMIRAL"},"446":{"GXT":"SQUALO"},"447":{"GXT":"SEASPAR"},"448":{"GXT":"PIZZABO"},"449":{"GXT":"TRAM"},"450":{"GXT":"ARTICT2"},"451":{"GXT":"TURISMO"},"452":{"GXT":"SPEEDER"},"453":{"GXT":"REEFER"},"454":{"GXT":"TROPIC"},"455":{"GXT":"FLATBED"},"456":{"GXT":"YANKEE"},"457":{"GXT":"CADDY"},"458":{"GXT":"SOLAIR"},"459":{"GXT":"TOPFUN"},"460":{"GXT":"SKIMMER"},"461":{"GXT":"PCJ600"},"462":{"GXT":"FAGGIO"},"463":{"GXT":"FREEWAY"},"464":{"GXT":"RCBARON"},"465":{"GXT":"RCRAIDE"},"466":{"GXT":"GLENDAL"},"467":{"GXT":"OCEANIC"},"468":{"GXT":"SANCHEZ"},"469":{"GXT":"SPARROW"},"470":{"GXT":"PATRIOT"},"471":{"GXT":"QUAD"},"472":{"GXT":"COASTG"},"473":{"GXT":"DINGHY"},"474":{"GXT":"HERMES"},"475":{"GXT":"SABRE"},"476":{"GXT":"RUSTLER"},"477":{"GXT":"ZR350"},"478":{"GXT":"WALTON"},"479":{"GXT":"REGINA"},"480":{"GXT":"COMET"},"481":{"GXT":"BMX"},"482":{"GXT":"BURRITO"},"483":{"GXT":"CAMPER"},"484":{"GXT":"MARQUIS"},"485":{"GXT":"BAGGAGE"},"486":{"GXT":"DOZER"},"487":{"GXT":"MAVERIC"},"488":{"GXT":"SANMAV"},"489":{"GXT":"RANCHER"},"490":{"GXT":"FBIRANC"},"491":{"GXT":"VIRGO"},"492":{"GXT":"GREENWO"},"493":{"GXT":"JETMAX"},"494":{"GXT":"HOTRING"},"495":{"GXT":"SANDKIN"},"496":{"GXT":"BLISTAC"},"497":{"GXT":"POLMAV"},"498":{"GXT":"BOXVILL"},"499":{"GXT":"BENSON"},"500":{"GXT":"MESAA"},"501":{"GXT":"RCGOBLI"},"502":{"GXT":"HOTRINA"},"503":{"GXT":"HOTRINB"},"504":{"GXT":"BLOODRA"},"505":{"GXT":"RANCHER"},"506":{"GXT":"SUPERGT"},"507":{"GXT":"ELEGANT"},"508":{"GXT":"JOURNEY"},"509":{"GXT":"BIKE"},"510":{"GXT":"MTBIKE"},"511":{"GXT":"BEAGLE"},"512":{"GXT":"CROPDST"},"513":{"GXT":"STUNT"},"514":{"GXT":"PETROL"},"515":{"GXT":"RDTRAIN"},"516":{"GXT":"NEBULA"},"517":{"GXT":"MAJESTC"},"518":{"GXT":"BUCCANE"},"519":{"GXT":"SHAMAL"},"520":{"GXT":"hydra"},"521":{"GXT":"FCR900"},"522":{"GXT":"NRG500"},"523":{"GXT":"HPV1000"},"524":{"GXT":"CEMENT"},"525":{"GXT":"TOWTRUK"},"526":{"GXT":"FORTUNE"},"527":{"GXT":"CADRONA"},"528":{"GXT":"FBITRUK"},"529":{"GXT":"WILLARD"},"530":{"GXT":"FORKLFT"},"531":{"GXT":"TRACTOR"},"532":{"GXT":"COMBINE"},"533":{"GXT":"FELTZER"},"534":{"GXT":"REMING"},"535":{"GXT":"SLAMVAN"},"536":{"GXT":"BLADE"},"537":{"GXT":"FREIGHT"},"538":{"GXT":"STREAK"},"539":{"GXT":"VORTEX"},"540":{"GXT":"VINCENT"},"541":{"GXT":"BULLET"},"542":{"GXT":"CLOVER"},"543":{"GXT":"SADLER"},"544":{"GXT":"FIRELA"},"545":{"GXT":"HUSTLER"},"546":{"GXT":"INTRUDR"},"547":{"GXT":"PRIMO"},"548":{"GXT":"CARGOBB"},"549":{"GXT":"TAMPA"},"550":{"GXT":"SUNRISE"},"551":{"GXT":"MERIT"},"552":{"GXT":"UTILITY"},"553":{"GXT":"NEVADA"},"554":{"GXT":"YOSEMIT"},"555":{"GXT":"WINDSOR"},"556":{"GXT":"MONSTA"},"557":{"GXT":"MONSTB"},"558":{"GXT":"URANUS"},"559":{"GXT":"JESTER"},"560":{"GXT":"SULTAN"},"561":{"GXT":"STRATUM"},"562":{"GXT":"ELEGY"},"563":{"GXT":"RAINDNC"},"564":{"GXT":"RCTIGER"},"565":{"GXT":"FLASH"},"566":{"GXT":"TAHOMA"},"567":{"GXT":"SAVANNA"},"568":{"GXT":"BANDITO"},"569":{"GXT":"FRFLAT"},"570":{"GXT":"STREAKC"},"571":{"GXT":"KART"},"572":{"GXT":"MOWER"},"573":{"GXT":"DUNE"},"574":{"GXT":"SWEEPER"},"575":{"GXT":"BROADWY"},"576":{"GXT":"TORNADO"},"577":{"GXT":"AT400"},"578":{"GXT":"DFT30"},"579":{"GXT":"HUNTLEY"},"580":{"GXT":"STAFFRD"},"581":{"GXT":"BF400"},"582":{"GXT":"NEWSVAN"},"583":{"GXT":"TUG"},"584":{"GXT":"PETROTR"},"585":{"GXT":"EMPEROR"},"586":{"GXT":"WAYFARE"},"587":{"GXT":"EUROS"},"588":{"GXT":"HOTDOG"},"589":{"GXT":"CLUB"},"590":{"GXT":"FRBOX"},"591":{"GXT":"ARTICT3"},"592":{"GXT":"ANDROM"},"593":{"GXT":"DODO"},"594":{"GXT":"RCCAM"},"595":{"GXT":"LAUNCH"},"596":{"GXT":"POLICAR"},"597":{"GXT":"POLICAR"},"598":{"GXT":"POLICAR"},"599":{"GXT":"RANGER"},"600":{"GXT":"PICADOR"},"601":{"GXT":"SWATVAN"},"602":{"GXT":"ALPHA"},"603":{"GXT":"PHOENIX"},"604":{"GXT":"GLENSHI"},"605":{"GXT":"SADLSHI"},"606":{"GXT":"BAGBOXA"},"607":{"GXT":"BAGBOXB"},"608":{"GXT":"TUGSTAI"},"609":{"GXT":"BOXBURG"},"610":{"GXT":"FARMTR1"},"611":{"GXT":"UTILTR1"}};
const colors={

		"black":0,
		"white":1,
		"blue":2,
		"red":3,
		"dark blue":4,
		"purple":5,
		"yellow":6,
		"bright blue":7,
		"light blue grey":8,
		"light":9,
		"blue2":10,
		"grey":11,
		"jasper":12,
		"pewter":13,
		"frost":14,
		"silver":15,
		"rio":16,
		"beige":19,
		"steel":22,
		"shadow":25,
		"harbour":28,
		"burgundy":30,
		"red-mica":31,
		"darkgreen":37,
		"biston":40,
		"desert":43,
	"green":44,
	"diamond":39,
	"ivory":46,
	"woodrose":55,
	"crystal":56,
	"yellow2":61,
	"pastel":65,
	"oxford":68,
	"grey2":72,
	"blue3":65


};

const vehicle_mods={"400":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"401":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1146,"type":"X-Flow"},{"ID":1147,"type":"Alien"},{"ID":1158,"type":"X-Flow"},{"ID":1162,"type":"Alien"},{"ID":1163,"type":"X-Flow"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"402":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"403":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"404":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1002,"type":"Drag"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"405":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1001,"type":"Win"},{"ID":1014,"type":"Champ"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"406":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"407":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"408":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"409":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"410":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"411":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"412":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"413":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"414":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"415":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"416":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"417":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"418":{"exh":[{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"Spoiler":[{"ID":1002,"type":"Drag"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"419":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"420":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"421":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1014,"type":"Champ"},{"ID":1016,"type":"Worx"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"422":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"423":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"424":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"425":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"426":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"427":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"428":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"429":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"430":{},"431":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"432":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"433":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"434":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"436":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"},{"ID":1022,"type":"Small"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"437":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"438":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"439":{"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"440":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"441":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"442":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"443":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"444":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"445":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"446":{},"447":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"448":{},"449":{},"451":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"452":{},"453":{},"454":{},"455":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"456":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"457":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"458":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"459":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"460":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"461":{},"462":{},"463":{},"464":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"465":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"466":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"467":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"468":{"Stereo":[{"ID":1086,"type":"Stereo"}]},"469":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"470":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"471":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"472":{},"473":{},"474":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"475":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"476":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"478":{"exh":[{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"},{"ID":1022,"type":"Small"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"},{"ID":1012,"type":"Worx Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"479":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"480":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"481":{},"482":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"483":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"484":{},"485":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"486":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"487":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"488":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"489":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1002,"type":"Drag"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"490":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"491":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1003,"type":"Alpha"},{"ID":1014,"type":"Champ"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"492":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"493":{},"494":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"495":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"496":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1002,"type":"Drag"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1011,"type":"Race Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"497":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"498":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"499":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"500":{"exh":[{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"501":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"502":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"503":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"504":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"505":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"506":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"507":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"508":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"509":{},"510":{},"511":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"512":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"513":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"514":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"515":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"516":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1002,"type":"Drag"},{"ID":1015,"type":"Race"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"517":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1002,"type":"Drag"},{"ID":1003,"type":"Alpha"},{"ID":1016,"type":"Worx"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"518":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"519":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"520":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"521":{},"522":{},"523":{},"524":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"525":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"526":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"527":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1014,"type":"Champ"},{"ID":1015,"type":"Race"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"528":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"529":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1011,"type":"Race Scoop"},{"ID":1012,"type":"Worx Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"530":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"531":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"532":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"533":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"534":{"bulb1":[{"ID":1100,"type":"Chrome Grill"}],"bulb2":[{"ID":1123,"type":"Bullbar Chrome Bars"},{"ID":1125,"type":"Bullbar Chrome Lights"}],"exh":[{"ID":1126,"type":"Chrome Exhaust"},{"ID":1127,"type":"Slamin Exhaust"}],"frontb":[{"ID":1179,"type":"Chrome"},{"ID":1185,"type":"Slamin"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1178,"type":"Slamin"},{"ID":1180,"type":"Chrome"}],"sideS":[{"ID":1101,"type":"Left `Chrome Flames` Sideskirt"},{"ID":1106,"type":"Right `Chrome Arches`"},{"ID":1122,"type":"Right `Chrome Flames` Sideskirt"},{"ID":1124,"type":"Left `Chrome Arches` Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"535":{"exh":[{"ID":1113,"type":"Chrome"},{"ID":1114,"type":"Slamin"}],"bulb3":[{"ID":1115,"type":"Chrome"},{"ID":1116,"type":"Slamin"}],"frontb":[{"ID":1117,"type":"Chrome"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"bulp4":[{"ID":1109,"type":"Chrome"},{"ID":1110,"type":"Slamin"}],"sideS":[{"ID":1118,"type":"Right `Chrome Trim` Sideskirt"},{"ID":1119,"type":"Right `Wheelcovers` Sideskirt"},{"ID":1120,"type":"Left `Chrome Trim` Sideskirt"},{"ID":1121,"type":"Left `Wheelcovers` Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"536":{"exh":[{"ID":1104,"type":"Chrome"},{"ID":1105,"type":"Slamin"}],"frontb":[{"ID":1181,"type":"Slamin"},{"ID":1182,"type":"Chrome"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1183,"type":"Slamin"},{"ID":1184,"type":"Chrome"}],"Roof":[{"ID":1103,"type":"Covertible"},{"ID":1128,"type":"Vinyl Hardtop"}],"sideS":[{"ID":1107,"type":"Left `Chrome Strip` Sideskirt"},{"ID":1108,"type":"Right `Chrome Strip` Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"537":{},"538":{},"539":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"540":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"541":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"542":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hood":[{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Spoiler":[{"ID":1014,"type":"Champ"},{"ID":1015,"type":"Race"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"543":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"544":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"545":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"546":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1002,"type":"Drag"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"547":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1003,"type":"Alpha"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"548":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"549":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1011,"type":"Race Scoop"},{"ID":1012,"type":"Worx Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"550":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1003,"type":"Alpha"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"551":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"Spoiler":[{"ID":1002,"type":"Drag"},{"ID":1003,"type":"Alpha"},{"ID":1016,"type":"Worx"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"552":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"553":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"554":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"555":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"556":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"557":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"558":{"exh":[{"ID":1089,"type":"X-Flow"},{"ID":1092,"type":"Alien"}],"frontb":[{"ID":1165,"type":"X-Flow"},{"ID":1166,"type":"Alien"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1167,"type":"X-Flow"},{"ID":1168,"type":"Alien"}],"Roof":[{"ID":1088,"type":"Alien"},{"ID":1091,"type":"X-Flow"}],"sideS":[{"ID":1090,"type":"Right Alien Sideskirt"},{"ID":1093,"type":"Right X-Flow Sideskirt"},{"ID":1094,"type":"Left Alien Sideskirt"},{"ID":1095,"type":"Right X-Flow Sideskirt"}],"Spoiler":[{"ID":1163,"type":"X-Flow"},{"ID":1164,"type":"Alien"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"559":{"exh":[{"ID":1065,"type":"Alien"},{"ID":1066,"type":"X-Flow"}],"frontb":[{"ID":1160,"type":"Alien"},{"ID":1173,"type":"X-Flow"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1159,"type":"Alien"},{"ID":1161,"type":"X-Flow"}],"Roof":[{"ID":1067,"type":"Alien"},{"ID":1068,"type":"X-Flow"}],"sideS":[{"ID":1069,"type":"Right Alien Sideskirt"},{"ID":1070,"type":"Right X-Flow Sideskirt"},{"ID":1071,"type":"Left Alien Sideskirt"},{"ID":1072,"type":"Left X-Flow Sideskirt"}],"Spoiler":[{"ID":1158,"type":"X-Flow"},{"ID":1162,"type":"Alien"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"560":{"exh":[{"ID":1028,"type":"Alien"},{"ID":1029,"type":"X-Flow"}],"frontb":[{"ID":1169,"type":"Alien"},{"ID":1170,"type":"X-Flow"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1140,"type":"X-Flow"},{"ID":1141,"type":"Alien"}],"Roof":[{"ID":1032,"type":"Alien Roof Vent"},{"ID":1033,"type":"X-Flow Roof Vent"}],"sideS":[{"ID":1026,"type":"Right Alien Sideskirt"},{"ID":1027,"type":"Left Alien Sideskirt"},{"ID":1030,"type":"Left X-Flow Sideskirt"},{"ID":1031,"type":"Right X-Flow Sideskirt"}],"Spoiler":[{"ID":1138,"type":"Alien"},{"ID":1139,"type":"X-Flow"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"561":{"exh":[{"ID":1059,"type":"X-Flow"},{"ID":1064,"type":"Alien"}],"frontb":[{"ID":1155,"type":"Alien"},{"ID":1157,"type":"X-Flow"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1154,"type":"Alien"},{"ID":1156,"type":"X-Flow"}],"Roof":[{"ID":1055,"type":"Alien"},{"ID":1061,"type":"X-Flow"}],"sideS":[{"ID":1026,"type":"Right Alien Sideskirt"},{"ID":1027,"type":"Left Alien Sideskirt"},{"ID":1030,"type":"Left X-Flow Sideskirt"},{"ID":1031,"type":"Right X-Flow Sideskirt"},{"ID":1056,"type":"Right Alien Sideskirt"},{"ID":1057,"type":"Right X-Flow Sideskirt"},{"ID":1062,"type":"Left Alien Sideskirt"},{"ID":1063,"type":"Left X-Flow Sideskirt"}],"Spoiler":[{"ID":1058,"type":"Alien"},{"ID":1060,"type":"X-Flow"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"562":{"exh":[{"ID":1034,"type":"Alien"},{"ID":1037,"type":"X-Flow"}],"frontb":[{"ID":1171,"type":"Alien"},{"ID":1172,"type":"X-Flow"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1148,"type":"X-Flow"},{"ID":1149,"type":"Alien"}],"Roof":[{"ID":1035,"type":"X-Flow Roof Vent"},{"ID":1038,"type":"Alien Roof Vent"}],"sideS":[{"ID":1036,"type":"Right Alien Sideskirt"},{"ID":1039,"type":"Left X-Flow Sideskirt"},{"ID":1040,"type":"Left Alien Sideskirt"},{"ID":1041,"type":"Right X-Flow Sideskirt"}],"Spoiler":[{"ID":1146,"type":"X-Flow"},{"ID":1147,"type":"Alien"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"563":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"564":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"565":{"exh":[{"ID":1045,"type":"X-Flow"},{"ID":1046,"type":"Alien"}],"frontb":[{"ID":1152,"type":"X-Flow"},{"ID":1153,"type":"Alien"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1150,"type":"Alien"},{"ID":1151,"type":"X-Flow"}],"Roof":[{"ID":1053,"type":"X-Flow"},{"ID":1054,"type":"Alien"}],"sideS":[{"ID":1047,"type":"Right Alien Sideskirt"},{"ID":1048,"type":"Right X-Flow Sideskirt"},{"ID":1051,"type":"Left Alien Sideskirt"},{"ID":1052,"type":"Left X-Flow Sideskirt"}],"Spoiler":[{"ID":1049,"type":"Alien"},{"ID":1050,"type":"X-Flow"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"566":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"567":{"exh":[{"ID":1129,"type":"Chrome"},{"ID":1132,"type":"Slamin"}],"frontb":[{"ID":1188,"type":"Slamin"},{"ID":1189,"type":"Chrome"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1186,"type":"Slamin"},{"ID":1187,"type":"Chrome"}],"Roof":[{"ID":1130,"type":"Hardtop"},{"ID":1131,"type":"Softtop"}],"sideS":[{"ID":1102,"type":"Left `Chrome Strip` Sideskirt"},{"ID":1133,"type":"Right `Chrome Strip` Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"568":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"569":{},"570":{},"571":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"572":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"573":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"574":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"575":{"exh":[{"ID":1043,"type":"Slamin"},{"ID":1044,"type":"Chrome"}],"frontb":[{"ID":1174,"type":"Chrome"},{"ID":1176,"type":"Chrome"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1175,"type":"Slamin"},{"ID":1177,"type":"Slamin"}],"sideS":[{"ID":1099,"type":"Left Chrome Sideskirt"},{"ID":1042,"type":"Right Chrome Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"576":{"exh":[{"ID":1135,"type":"Slamin"},{"ID":1136,"type":"Chrome"}],"frontb":[{"ID":1190,"type":"Slamin"},{"ID":1191,"type":"Chrome"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"rearb":[{"ID":1192,"type":"Chrome"},{"ID":1193,"type":"Slamin"}],"sideS":[{"ID":1137,"type":"Left `Chrome Strip` Sideskirt"},{"ID":1134,"type":"Right `Chrome Strip` Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"579":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"580":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1020,"type":"Large"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"581":{},"582":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"583":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"585":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"},{"ID":1021,"type":"Medium"},{"ID":1022,"type":"Small"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1002,"type":"Drag"},{"ID":1003,"type":"Alpha"},{"ID":1014,"type":"Champ"},{"ID":1015,"type":"Race"},{"ID":1016,"type":"Worx"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"586":{},"587":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"588":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"589":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"},{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1000,"type":"Pro"},{"ID":1016,"type":"Worx"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"590":{},"591":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"592":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"593":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"594":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"595":{},"596":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"597":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"598":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"599":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"600":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1020,"type":"Large"},{"ID":1022,"type":"Small"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1013,"type":"Round Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Vents":[{"ID":1004,"type":"Champ Scoop"},{"ID":1005,"type":"Fury Scoop"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"601":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"602":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"603":{"exh":[{"ID":1018,"type":"Upswept"},{"ID":1019,"type":"Twin"},{"ID":1020,"type":"Large"}],"hood":[{"ID":1142,"type":"Left Oval Hoods"},{"ID":1143,"type":"Right Oval Hoods"},{"ID":1144,"type":"Left Square Hoods"},{"ID":1145,"type":"Right Square Hoods"}],"hydrau":[{"ID":1087,"type":"hydrau"}],"lmps":[{"ID":1024,"type":"Square Fog"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Roof":[{"ID":1006,"type":"Roof Scoop"}],"sideS":[{"ID":1007,"type":"Right Sideskirt"},{"ID":1017,"type":"Left Sideskirt"}],"Spoiler":[{"ID":1001,"type":"Win"},{"ID":1023,"type":"Fury"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"604":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"605":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"606":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"607":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"608":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"609":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"610":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]},"611":{"hydrau":[{"ID":1087,"type":"hydrau"}],"Nitro":[{"ID":1008,"type":"5 times"},{"ID":1009,"type":"2 times"},{"ID":1010,"type":"10 times"}],"Stereo":[{"ID":1086,"type":"Stereo"}],"Wheels":[{"ID":1025,"type":"Offroad"},{"ID":1073,"type":"Shadow"},{"ID":1074,"type":"Mega"},{"ID":1075,"type":"Rimshine"},{"ID":1076,"type":"Wires"},{"ID":1077,"type":"Classic"},{"ID":1078,"type":"Twist"},{"ID":1079,"type":"Cutter"},{"ID":1080,"type":"Switch"},{"ID":1081,"type":"Grove"},{"ID":1082,"type":"Import"},{"ID":1083,"type":"Dollar"},{"ID":1084,"type":"Trance"},{"ID":1085,"type":"Atomic"},{"ID":1096,"type":"Ahab"},{"ID":1097,"type":"Virtual"},{"ID":1098,"type":"Access"}]}}
const vehicle_catogory={"bikes":{"BF-400":{"ID":581},"Bike":{"ID":509},"BMX":{"ID":481},"Faggio":{"ID":462},"FCR-900":{"ID":521},"Freeway":{"ID":463},"Mountain Bike":{"ID":510},"NRG-500":{"ID":522},"PCJ-600":{"ID":461},"Pizzaboy":{"ID":448},"Sanchez":{"ID":468},"Wayfarer":{"ID":586}},"2-Door":{"Alpha":{"ID":602},"Blista Compact":{"ID":496},"Bravura":{"ID":401},"Buccaneer":{"ID":518},"Cadrona":{"ID":527},"Club":{"ID":589},"Esperanto":{"ID":419},"Euros":{"ID":587},"Feltzer":{"ID":533},"Fortune":{"ID":526},"Hermes":{"ID":474},"Hustler":{"ID":545},"Majestic":{"ID":517},"Manana":{"ID":410},"Picador":{"ID":600},"Previon":{"ID":436},"Stallion":{"ID":439},"Tampa":{"ID":549},"Virgo":{"ID":491}},"4-Door":{"Admiral":{"ID":445},"Damaged Glendale":{"ID":604},"Elegant":{"ID":507},"Emperor":{"ID":585},"Glendale":{"ID":466},"Greenwood":{"ID":492},"Intruder":{"ID":546},"Merit":{"ID":551},"Nebula":{"ID":516},"Oceanic":{"ID":467},"Premier":{"ID":426},"Primo":{"ID":547},"Sentinel":{"ID":405},"Stafford":{"ID":580},"Stretch":{"ID":409},"Sunrise":{"ID":550},"Tahoma":{"ID":566},"Vincent":{"ID":540},"Washington":{"ID":421},"Willard":{"ID":529}},"Civil":{"Baggage":{"ID":485},"Bus":{"ID":431},"Cabbie":{"ID":438},"Coach":{"ID":437},"Sweeper":{"ID":574},"Taxi":{"ID":420},"Towtruck":{"ID":525},"Trashmaster":{"ID":408},"Utility Van":{"ID":552}},"Government":{"Ambulance":{"ID":416},"Barracks":{"ID":433},"Enforcer":{"ID":427},"FBI Rancher":{"ID":490},"FBI Truck":{"ID":528},"Fire Truck":{"ID":407},"Fire Truck2":{"ID":544},"HPV1000":{"ID":523},"Patriot":{"ID":470},"Police LS":{"ID":596},"Police LV":{"ID":598},"Police Ranger":{"ID":599},"Police SF":{"ID":597},"Rhino":{"ID":432},"S.W.A.T.":{"ID":601},"Securicar":{"ID":428}},"Heavy":{"Benson":{"ID":499},"Boxville Mission":{"ID":609},"Boxville":{"ID":498},"Cement Truck":{"ID":524},"Combine Harvester":{"ID":532},"DFT-30":{"ID":578},"Dozer":{"ID":486},"Dumper":{"ID":406},"Dune":{"ID":573},"Flatbed":{"ID":455},"Hotdog":{"ID":588},"Linerunner":{"ID":403},"Mr. Whoopee":{"ID":423},"Mule":{"ID":414},"Packer":{"ID":443},"Roadtrain":{"ID":515},"Tanker":{"ID":514},"Tractor":{"ID":531},"Yankee":{"ID":456}},"Light":{"Berkley's RC Van":{"ID":459},"Bobcat":{"ID":422},"Burrito":{"ID":482},"Damaged Sadler":{"ID":605},"Forklift":{"ID":530},"Moonbeam":{"ID":418},"Mower":{"ID":572},"News Van":{"ID":582},"Pony":{"ID":413},"Rumpo":{"ID":440},"Sadler":{"ID":543},"Tug":{"ID":583},"Walton":{"ID":478},"Yosemite":{"ID":554}},"SUVs":{"Huntley":{"ID":579},"Landstalker":{"ID":400},"Perennial":{"ID":404},"Rancher":{"ID":489},"Rancher Lure":{"ID":505},"Regina":{"ID":479},"Romero":{"ID":442},"Solair":{"ID":458}},"Low":{"Blade":{"ID":536},"Broadway":{"ID":575},"Remington":{"ID":534},"Savanna":{"ID":567},"Slamvan":{"ID":535},"Tornado":{"ID":576},"Voodoo":{"ID":412}},"Muscle":{"Buffalo":{"ID":402},"Clover":{"ID":542},"Phoenix":{"ID":603},"Sabre":{"ID":475}},"Street":{"Banshee":{"ID":429},"Bullet":{"ID":541},"Cheetah":{"ID":415},"Comet":{"ID":480},"Elegy":{"ID":562},"Flash":{"ID":565},"Hotknife":{"ID":434},"Hotring Racer":{"ID":494},"Hotring Racer 2":{"ID":502},"Hotring Racer 3":{"ID":503},"Infernus":{"ID":411},"Jester":{"ID":559},"Stratum":{"ID":561},"Sultan":{"ID":560},"Super GT":{"ID":506},"Turismo":{"ID":451},"Uranus":{"ID":558},"Windsor":{"ID":555},"ZR-350":{"ID":477}},"Planes":{"Andromada":{"ID":592},"AT-400":{"ID":577},"Beagle":{"ID":511},"Cropduster":{"ID":512},"Dodo":{"ID":593},"hydrau":{"ID":520},"Nevada":{"ID":553},"Rustler":{"ID":476},"Shamal":{"ID":519},"Skimmer":{"ID":460},"Stuntplane":{"ID":513}},"Heli":{"Cargobob":{"ID":548},"Hunter":{"ID":425},"Leviathan":{"ID":417},"Maverick":{"ID":487},"News Chopper":{"ID":488},"Police Maverick":{"ID":497},"Raindance":{"ID":563},"Seasparrow":{"ID":447},"Sparrow":{"ID":469}},"Boats":{"Coastguard":{"ID":472},"Dinghy":{"ID":473},"Jetmax":{"ID":493},"Launch":{"ID":595},"Marquis":{"ID":484},"Predator":{"ID":430},"Reefer":{"ID":453},"Speeder":{"ID":452},"Squalo":{"ID":446},"Tropic":{"ID":454}}}
const stats={"perfect-body":[22,23,24,25],"Fat":21, "stamina":22,"Muscle":23, "gun_skills":[69,70,71,72,73,74,75,76,77,78,79], "respect":68};
var  weather=generate_gxt_list("DEBW",18);
weather[18]=["WEATH16",18];
weather[19]=["DEBW18",19];

//menus 
const times =[["+1hour",1],["-1hour",-1]];
var player_cheats=[["God",godmode,false],["isp",sprint,false],["money",giveMoney,false],["farmour",full_armour,false],["remwtl",remove_wanted,false],["pigs",toggle_police,false],["6want",fully_wanted,false],["weap_s",weapon_selector,true],["ammo",ammo,false],["pcj",perfect_cj,false]]
var trainer=[["plyr",generate_player_menu,true],["vehicl",generate_vehicle_menu,true],["vspawn",vehicle_spawner,true],["wrld",generate_world_menu,true],["weath",generate_weather_menu,true],["time",generate_time_menu,true]]
var vehicle_menu=[["God",vehicle_godmode,false],["repair",repair_vehicle,false],["vmods",generate_vehicle_mods_menu,true],["nitro",add_nitro,false], ["hydro",add_hydrolics,false],["pcolor",generate_color_menu,true],["scolor",generate_color_menu,true]]
var world_menu=[["Covid-Lockdown" ,lockdown,false],["riot",riot,false]]


var world_cheats_var={
	lockdown:false,
	riot:false,
	menu_state:0

}

var vehicle_submenu={
	mainmenu:0,
	primaryColour:1,
	secondaryColour:2,
	vehiclemods:{
		catagory:3,
		selection:4
	}
}

var player = new Player(0);
var index = 0;
var current_vehicle = false;
var spawner_active=false;
var state=0;
var selected_car;
var player_cheats_var={
	enable_god:false,
	never_wanted:false,
	menu_state:0,
	weapon_catagory:null,
	infinite_sprint:false

};
var vehicle_cheat_var={
	state:0,
	god:false,
	mod_catagory:null
}




var trainer_active=false;
var spawner_state=0;

 
function generate_vehicle_mods_menu(){

	if(check_if_in_vehicle(player)){
		var car =player.getChar().getCarIsUsing();
		var model= car.getModel();
		var mods = vehicle_mods[model];
		var type=Object.keys(mods);
		if(type.length>0){

			vehicle_cheat_var.state=3;
	
		Widget.CreateShopMenu("vmods");
		for(var i =0;i<type.length;i++){
		 
		
			
			Widget.AddShopItem(type[i],0);
			
		}
		}
		


	}
}

function sprint(player){
	player_cheats_var.infinite_sprint=!player_cheats_var.infinite_sprint;
	player.setNeverGetsTired(player_cheats_var.infinite_sprint)
}
function lockdown(){
	world_cheats_var.lockdown=!world_cheats_var.lockdown;
	if(world_cheats_var.lockdown){
		World.SetCarDensityMultiplier(0.000001);
		World.SetPedDensityMultiplier(0.000001);
	}
	else{
		World.SetCarDensityMultiplier(1);
		World.SetPedDensityMultiplier(1);
	}
}
function riot(){
	world_cheats_var.riot=!world_cheats_var.riot;
	if(world_cheats_var.riot){
		world_cheats_var.lockdown=false;
		World.SetCarDensityMultiplier(1000);
		World.SetPedDensityMultiplier(10000000);
		

	}
	else{
		World.SetCarDensityMultiplier(1);
		World.SetPedDensityMultiplier(1);
	}
	World.SetLaRiots(world_cheats_var.riot)
}


function check_if_in_vehicle(player){
	var char=player.getChar();
	if(	char.isInAnyCar() || char.isInAnyHeli()||char.isInAnyPlane()|| char.isInAnyBoat() ){
		return true;
	}
	else{
		return false;
	}
}
function toggle_police(player){
	
	player_cheats_var.never_wanted=!player_cheats_var.never_wanted;
	player.getChar().setWantedByPolice(!player_cheats_var.never_wanted);
	FxtStore.insert("polc-en",player_cheats_var.never_wanted?"Police disabled":"Police enabled")
	Text.PrintHelp("polc-en")
	
	
	player.setIgnorePolice(player_cheats_var.never_wanted)
	Game.SetMaxWantedLevel(0);


}
function add_hydrolics(player){
	if(check_if_in_vehicle(player)){
		var car = player.getChar().getCarIsUsing();
		car.setHydraulics(true);


	};



};
function add_nitro(player){
	if(check_if_in_vehicle(player)){
		var car = player.getChar().getCarIsUsing();
		car.giveNonPlayerNitro();


	};

};
function repair_vehicle(player){
	if(check_if_in_vehicle(player)){
		var car = player.getChar().getCarIsUsing();

		
		car.fix();
		car.changeColor(94,94);

	};

	
}
function vehicle_godmode(player){
	var Char= player.getChar();
	if(check_if_in_vehicle(player) ){
		vehicle_cheat_var.god=!vehicle_cheat_var.god;
		log(" player is in car");
		Char.getCarIsUsing().setProofs(vehicle_cheat_var.god,vehicle_cheat_var.god,vehicle_cheat_var.god,vehicle_cheat_var.god,vehicle_cheat_var.god);
		vehicle_cheat_var.god? Text.PrintHelp("God mode enabled"):Text.PrintHelp("God mode disabled")
		// char.getCarIsUsing().giveNonPlayerNitro();
		// var car =char.getCarIsUsing()
		// car.changeColor(83,10)
		// Blip.AddForCar(char.getCarIsUsing())
		
	}

	else{
		log("no car");
	}
}

function perfect_cj(player){
	var body = stats["perfect-body"];
	for(var i=0;i<body.length;i++){
		Stat.RegisterInt(body[i],1000);
	}
	var gun_skill=stats.gun_skills;
	for(var i=0;i<gun_skill.length;i++ ){
		Stat.RegisterFloat(gun_skill[i],3000);
	}
	Stat.RegisterInt(stats.respect,3000);
	Stat.RegisterInt(25,10);
	player.buildModel();
}
function godmode(player){
	 
	// read
	
	player_cheats_var.enable_god=!player_cheats_var.enable_god;
	Text.PrintHelp("g_"+ player_cheats_var.enable_god);

}
function ammo(player){
	var Char =player.getChar();
	var type = Char.getWeaponInSlot(3);

	
	for(var i=1;i<12;i++){
		//var weapon=char.getWeaponInSlot(i)
		log("type " + Char.getWeaponInSlot(i).weaponType);
		Char.addAmmo(Char.getWeaponInSlot(i).weaponType,3000);

		
	}
	Text.PrintHelp("Ammo Added");

	
        
}
function giveMoney(player){
//	Text.Print("+$1000",500, 1)
	player.addScore(1000);
	//loadModel(30495)
 


}
function fully_wanted(player){
	if(!player_cheats_var.never_wanted){
		Game.SetMaxWantedLevel(6);
		player.alterWantedLevelNoDrop(6);

	}
	
}
function remove_wanted(player){

	player.clearWantedLevel();
}
function full_armour(player){
	Text.Print("armour", 500, 1);
	player.getChar().addArmor(100);
}
function generate_gxt_list(keyword,length){
	var list=[];
	for(var i =0;i<=length;i++){
		var gxt= keyword+ i;
		list.push([gxt,i]);
	}
	return list;
}

function weapon_selector(player){
	player_cheats_var.menu_state=1;
	Widget.CreateShopMenu("weap_s");
	var catagory=Object.keys(weapons);

	for( var i =0;i<catagory.length;i++){
			Widget.AddShopItem(catagory[i],0);
	}
	

		
	
		
}



function pause(){
	//Hud.DisplayRadar(false);
   // Camera.SetBehindPlayer();
    player.setControl(0);
}
function generate_color_menu(){
	Widget.CreateShopMenu("vcolor");
	var color_names=Object.keys( colors);
	for(var i =0;i<color_names.length;i++){

		FxtStore.insert("col" +i ,color_names[i])
		Widget.AddShopItem("col"+i,0 );
	}

}
function generate_player_menu(){
	log("sandstorm",weather[18][0])
	state=2;
	Widget.CreateShopMenu("plyr");
	for(var i=0;i<player_cheats.length;i++){
		if(i==0){
		
				var text = "g_"+player_cheats_var.enable_god;
				Widget.AddShopItem(text,0);
		
			
		}
		else{
			Widget.AddShopItem(player_cheats[i][0],0);
		}
	}
}
function generate_world_menu(){
	
	state=6;
	Widget.CreateShopMenu("wrld");
	for(var i=0;i<world_menu.length;i++){
		var text = world_menu[i][0]
		if(i==0){

			var text = "loc_"+world_cheats_var.lockdown
		
			Widget.AddShopItem(text,0);
		}
		else{
			var text ="ri"+ world_cheats_var.riot;
			
			Widget.AddShopItem(text,0);
		}
	
		
		
	}
}
function generate_vehicle_menu(player){
	if(check_if_in_vehicle(player)){
		state=5;
		var car =player.getChar().getCarIsUsing();
		var model_id =car.getModel();
		var name = vehicle_gxt[model_id]["GXT"];
		log(name);
	
	 
	
		
		
		Widget.CreateShopMenu(name);
		for(var i =0;i<vehicle_menu.length;i++){
			if(i==0){
			
				
					
					var text ="g_"+vehicle_cheat_var.god;
					Widget.AddShopItem(text,0);
				
			}
			else{
				Widget.AddShopItem(vehicle_menu[i][0],0);
			}

		}
	}
	else{
		state=0;
		generate_trainer_menu();
	}
}
function generate_time_menu(){
	state=4;
	Widget.CreateShopMenu("Time");
	for(var i=0;i<times.length;i++){
		Widget.AddShopItem(times[i][0],0);
	}
}

function generate_weather_menu(){

	

	 
	state=3;
	Widget.CreateShopMenu("Weather");
	for(var i=0;i<weather.length;i++){
		Widget.AddShopItem(weather[i][0],0);
	}
}
function unpause(){
	// Hud.DisplayRadar(true);
	// 		Camera.RestoreJumpcut();
			player.setControl(1);
}
function generate_menu(){
	Widget.CreateShopMenu("vspawn");

	for(var i =0;i<Object.keys(vehicle_catogory).length;i++){
	Widget.AddShopItem(Object.keys(vehicle_catogory)[i],0);
	}
}
function generate_trainer_menu(){
	
	//Memory.Write(test,4,1,false,false)
	
	
	Text.PrintHelp("sml")
	Widget.CreateShopMenu("smpl");
	
	for( var i =0; i<trainer.length;i++){
		
		
			Widget.AddShopItem(trainer[i][0],0);
		

	}

}
function change_time(hour){

	var current_time =Clock.GetTimeOfDay();
	Clock.SetTimeOfDay(current_time.hours+hour,0);
}
function vehicle_spawner(){
	state=1;
	spawner_state=0;
	index=0;
	if(state==1){
		pause();
		generate_menu();
		
	}	
	wait(200);

}
//weather 
function change_weather(){
	if(Widget.IsReleased(55)){
		state=0;
		generate_trainer_menu();

	}
	if(Widget.IsReleased(56)){
		var idx = parseInt(Widget.GetValue(146));	

		
		
	
	
		Weather.ForceNow(weather[idx][1]);

		
		
		generate_weather_menu();

		
	//	wait(200)

	}
}
function world(){
	if(Widget.IsReleased(55)){
		state=0;
		generate_trainer_menu();

	}
	if(Widget.IsReleased(56)){
		var idx = parseInt(Widget.GetValue(146));	

		
		
	
	
		world_menu[idx][1]();

		
		
		generate_world_menu();

		
	

	}
}
//time 
function time(){
	if(Widget.IsReleased(55)){
		state=0;
		generate_trainer_menu();

	}
	if(Widget.IsReleased(56)){
		var idx = parseInt(Widget.GetValue(146));	

		
		
	
	
		change_time(times[idx][1]);
		
		
		generate_time_menu();

		
	//	wait(200)

	}
}
//player cheats
function player_cheat(){
	
	if(Widget.IsReleased(55)){


		if(player_cheats_var.menu_state==2){
			player_cheats_var.menu_state=1
			weapon_selector(player);


		}
		else if (player_cheats_var.menu_state==1){
			player_cheats_var.menu_state=0;
			generate_player_menu();

		}
		
		else{
			state=0;
		generate_trainer_menu();
		}
		

	}
	if(Widget.IsReleased(56)){

		
		
		var idx = parseInt(Widget.GetValue(146));	
		if(player_cheats_var.menu_state==1){
			player_cheats_var.weapon_catagory=Object.keys(weapons)[idx];
			var weapon = weapons[player_cheats_var.weapon_catagory];
			Widget.CreateShopMenu(player_cheats_var.weapon_catagory)
			for(var i =0;i<weapon_gxt[idx].length;i++){
				var name=weapon_gxt[idx][i]

				Widget.AddShopItem(name,0)

			}
			player_cheats_var.menu_state=2;




	


		}
		else if (player_cheats_var.menu_state==2){
			var type = weapons[player_cheats_var.weapon_catagory][idx];
		
			loadModel(Weapon.GetModel(type));
		player.getChar().giveWeapon(type,100);
		}
		else{
			if(player_cheats[idx][2]){
				player_cheats[idx][1](player);
	
	
			}
	
			else{
				
				player_cheats[idx][1](player);
				generate_player_menu();
	
			}

		}

	}
}
function vehicle_mod(){
	if(Widget.IsReleased(55)){
		if(vehicle_cheat_var.state==4){
			vehicle_cheat_var.state=3;
			generate_vehicle_mods_menu()
		}
		else if(vehicle_cheat_var.state==3){
			vehicle_cheat_var.state=0;
			generate_vehicle_menu(player);
		}
	}
	else if(Widget.IsReleased(56)){
		var idx = parseInt(Widget.GetValue(146));
		var model =player.getChar().getCarIsUsing().getModel();
		if(vehicle_cheat_var.state==3){
			
			vehicle_cheat_var.mod_catagory=Object.keys(vehicle_mods[model])[idx];
			log("mod " + vehicle_cheat_var.mod_catagory)
			Widget.CreateShopMenu(vehicle_cheat_var.mod_catagory);
			var mod_avalable=vehicle_mods[model][vehicle_cheat_var.mod_catagory]
			for(var i=0;i<mod_avalable.length;i++){ 
				FxtStore.insert(mod_avalable[i].type.trim().slice(0,6)+i,mod_avalable[i].type)
				Widget.AddShopItem(mod_avalable[i].type.trim().slice(0,6)+i,0)
			}
			vehicle_cheat_var.state=4;
		}
		else if (vehicle_cheat_var.state==4){
			var model_id=vehicle_mods[model][vehicle_cheat_var.mod_catagory][idx].ID;
			loadModel(model_id);
			player.getChar().getCarIsUsing().addMod(model_id);
			

		}
		
		
	}

}
function vehicle_cheat(){
	 if(vehicle_cheat_var.state>=3){
		vehicle_mod();
	}
	else if(Widget.IsReleased(55)){
		if(vehicle_cheat_var.state==1|| vehicle_cheat_var.state==2|| vehicle_cheat_var.state==3){
			vehicle_cheat_var.state=0;
			generate_vehicle_menu(player);

		}
		else if(vehicle_cheat_var.state!=4){
			state=0;
			vehicle_cheat_var.state=0;
			generate_trainer_menu();

		}
		
	}
	
	else{
		if(Widget.IsReleased(56)){
			var idx = parseInt(Widget.GetValue(146));	
	
				
				if(vehicle_cheat_var.state==1){
					var key = Object.keys(colors)[idx];
					log(key)
					var car = player.getChar().getCarIsUsing()
					var color = car.getColors();
					 car.changeColor(colors[key],color.secondaryColour);
				}
				else if(vehicle_cheat_var.state==2){
					var key = Object.keys(colors)[idx];
					var car = player.getChar().getCarIsUsing();
					var color = car.getColors();
					 car.changeColor(color.primaryColour,colors[key]);
	
				}
				else{
					if(vehicle_menu[idx][2]){
						if(vehicle_menu[idx][0]=="pcolor"){
							
						vehicle_cheat_var.state=1;
	
						}
						else if(vehicle_menu[idx][0]=="scolor"){
							
						vehicle_cheat_var.state=2;
						}
	
						vehicle_menu[idx][1]();
	
					}
					else{
						vehicle_menu[idx][1](player);
						generate_vehicle_menu(player);
					}
				}
		}
	}
	
}
var offset =5;
//main menu
function cheat_menu(){

		if(Widget.IsReleased(55)){
			log("back")
			trainer_active=false;
			unpause();
			Widget.Delete(146);

		}
		if(Widget.IsReleased(56)){
			var idx = parseInt(Widget.GetValue(146));	
			if(trainer[idx][2]){
			
		
				trainer[idx][1](player);

			}
			else{
				state=0;
			
				trainer[idx][1](player);
				generate_trainer_menu();

			}
		//	wait(200)

		}
		
	
	
}
//vehicle spawner
function spawner(){
	
	 if(Widget.IsReleased(56)){
		 if(spawner_state==0 ){
			var idx = parseInt(Widget.GetValue(146));

			//log("value " + idx)
			selected_car =vehicle_catogory[Object.keys(vehicle_catogory)[idx]];
			var submenu_title= Object.keys(vehicle_catogory)[idx];
			Widget.CreateShopMenu(submenu_title);
			for(var i =0;i<Object.keys(selected_car).length;i++){
				var id =selected_car[Object.keys(selected_car)[i]]["ID"].toString();
				var gxt_name = vehicle_gxt[id]["GXT"];
				Widget.AddShopItem(gxt_name,0);

			}
			spawner_state=1;

		 }
		 else{
			var idx = parseInt(Widget.GetValue(146));
			var id =selected_car[Object.keys(selected_car)[idx]]["ID"];
			FxtStore.insert(Object.keys(selected_car)[idx],"Spawned " + Object.keys(selected_car)[idx])
			Text.PrintHelp(Object.keys(selected_car)[idx])
        
            loadModel(id);
            var pos = player.getChar().getOffsetInWorldCoords(0, 8, 1); // spawn 8 meters in front of the player
            current_vehicle = Car.Create(id, pos.x, pos.y, pos.z);
            player.getChar().warpIntoCar(current_vehicle);
            current_vehicle.markAsNoLongerNeeded();
            current_vehicle.lockDoors(1); // force doors to be unlocked, some police/fbi/swat vehicles may spawn locked otherwise
            Streaming.MarkModelAsNoLongerNeeded(id);
			Camera.Restore();
			Camera.RestoreJumpcut();
			Camera.SetBehindPlayer();
            trainer_active=false;
			spawner_state=0;
            state=0;
			unpause();
			Widget.Delete(146);

		 }
		 
		
	 }
	 if(Widget.IsReleased(55)){
		log("back");
		if(spawner_state==0){
			trainer_active=true;
			state=0;
			generate_trainer_menu();
			
		}
		else{
			spawner_state=0;
			generate_menu();

		
		}
	
		
	}
 
}
//Credit Shuubaru
function loadModel(ModelID) {
	Streaming.RequestModel(ModelID);
	while (!Streaming.HasModelLoaded(ModelID)) {
		wait(250);
	}
}
function loadModel2() {
	Streaming.LoadAllModelsNow()
	
}
//main loop
while (true) {
	wait(0);

	
	if (Pad.IsKeyPressed(Trainer_Key)){
		while(Pad.IsKeyPressed(Trainer_Key)){
			wait(0)
		}

		//vehicle_godmode();
		trainer_active=!trainer_active;
		 
		
		
		 index=0;
		 state=0;
		 spawner_state=0;
		 vehicle_cheat_var.state=0;
		if(trainer_active){
			
			
		
			pause();
			wait(250);
			generate_trainer_menu();
		}
		else{
			unpause();
			Widget.Delete(146);
		
		}

		//Text.ClearHelp();
		//wait(200);
	//	fully_wanted(player)
	}
	 

	if(player.isPlaying()){
		var debug= Widget.GetValue(146);
	
		if(trainer_active){

			switch(state){
				case 1:
					 spawner();
					 break;
				case 2:
					player_cheat();
					break;
				case 3:
					change_weather();
					break;
				case 4:
					time();
					break;
				case 5:
					vehicle_cheat();
					break;
				case 6:
					world();
					break;
				default:
					cheat_menu();
					break;
			}		
		}
		
		player.getChar().setProofs(player_cheats_var.enable_god,player_cheats_var.enable_god,player_cheats_var.enable_god,player_cheats_var.enable_god,player_cheats_var.enable_god);


	}

	
	
}
