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
const weapon_gxt=[["WEAP00","WEAP01"],["WEAP02","WEAP03","KNIFE","BASEBAT","WEAP04","WEAP05","KATANA","CHAINSA"],["STWE001","STWE002","STWE003"],["STWE004","STWE005","STWE006"],["STWE011","UZI","STWE008"],["STWE009","STWE010"],["sniper","rifle"],["FLAMET","ROCKET","ROCKHS","MINIGU"],["GRENADE","WEAP11","WEAP12","WEAP25"],["WEAP13","WEAP14","WEAP15"],["WEAP07","WEAP06","WEAP09","WEAP10"],["WEAP16","WEAP17","WEAP18"],["detonatr"]];





const weapons = {
"Hand":[0, 1],		
"Melee":[2, 3, 4, 5, 6, 7, 8, 9],	
"WEAP19":[22, 23, 24],		
"GUN2":[25, 26, 27],	
"SMGS":[28, 29, 32],	
"AR":[30, 31],			
"Rifles":[33, 34],			
"Heavy":[35, 36, 37, 38],		
"Thrown":[16, 17, 18,39],		
"Special 1":[41, 42, 43],		
"Gifts":[10, 11, 12, 14, 15],	
"Special 2":[44, 45, 46],		
"WEAP40": [40]		
};
const vehicle_gxt={"400":{"GXT":"LANDSTK"},"401":{"GXT":"BRAVURA"},"402":{"GXT":"BUFFALO"},"403":{"GXT":"LINERUN"},"404":{"GXT":"PEREN"},"405":{"GXT":"SENTINL"},"406":{"GXT":"DUMPER"},"407":{"GXT":"FIRETRK"},"408":{"GXT":"TRASHM"},"409":{"GXT":"STRETCH"},"410":{"GXT":"MANANA"},"411":{"GXT":"INFERNU"},"412":{"GXT":"VOODOO"},"413":{"GXT":"PONY"},"414":{"GXT":"MULE"},"415":{"GXT":"CHEETAH"},"416":{"GXT":"AMBULAN"},"417":{"GXT":"LEVIATH"},"418":{"GXT":"MOONBM"},"419":{"GXT":"ESPERAN"},"420":{"GXT":"TAXI"},"421":{"GXT":"WASHING"},"422":{"GXT":"BOBCAT"},"423":{"GXT":"WHOOPEE"},"424":{"GXT":"BFINJC"},"425":{"GXT":"HUNTER"},"426":{"GXT":"PREMIER"},"427":{"GXT":"ENFORCR"},"428":{"GXT":"SECURI"},"429":{"GXT":"BANSHEE"},"430":{"GXT":"PREDATR"},"431":{"GXT":"BUS"},"432":{"GXT":"RHINO"},"433":{"GXT":"BARRCKS"},"434":{"GXT":"HOTKNIF"},"435":{"GXT":"ARTICT1"},"436":{"GXT":"PREVION"},"437":{"GXT":"COACH"},"438":{"GXT":"CABBIE"},"439":{"GXT":"STALION"},"440":{"GXT":"RUMPO"},"441":{"GXT":"RCBANDT"},"442":{"GXT":"ROMERO"},"443":{"GXT":"PACKER"},"444":{"GXT":"MONSTER"},"445":{"GXT":"ADMIRAL"},"446":{"GXT":"SQUALO"},"447":{"GXT":"SEASPAR"},"448":{"GXT":"PIZZABO"},"449":{"GXT":"TRAM"},"450":{"GXT":"ARTICT2"},"451":{"GXT":"TURISMO"},"452":{"GXT":"SPEEDER"},"453":{"GXT":"REEFER"},"454":{"GXT":"TROPIC"},"455":{"GXT":"FLATBED"},"456":{"GXT":"YANKEE"},"457":{"GXT":"CADDY"},"458":{"GXT":"SOLAIR"},"459":{"GXT":"TOPFUN"},"460":{"GXT":"SKIMMER"},"461":{"GXT":"PCJ600"},"462":{"GXT":"FAGGIO"},"463":{"GXT":"FREEWAY"},"464":{"GXT":"RCBARON"},"465":{"GXT":"RCRAIDE"},"466":{"GXT":"GLENDAL"},"467":{"GXT":"OCEANIC"},"468":{"GXT":"SANCHEZ"},"469":{"GXT":"SPARROW"},"470":{"GXT":"PATRIOT"},"471":{"GXT":"QUAD"},"472":{"GXT":"COASTG"},"473":{"GXT":"DINGHY"},"474":{"GXT":"HERMES"},"475":{"GXT":"SABRE"},"476":{"GXT":"RUSTLER"},"477":{"GXT":"ZR350"},"478":{"GXT":"WALTON"},"479":{"GXT":"REGINA"},"480":{"GXT":"COMET"},"481":{"GXT":"BMX"},"482":{"GXT":"BURRITO"},"483":{"GXT":"CAMPER"},"484":{"GXT":"MARQUIS"},"485":{"GXT":"BAGGAGE"},"486":{"GXT":"DOZER"},"487":{"GXT":"MAVERIC"},"488":{"GXT":"SANMAV"},"489":{"GXT":"RANCHER"},"490":{"GXT":"FBIRANC"},"491":{"GXT":"VIRGO"},"492":{"GXT":"GREENWO"},"493":{"GXT":"JETMAX"},"494":{"GXT":"HOTRING"},"495":{"GXT":"SANDKIN"},"496":{"GXT":"BLISTAC"},"497":{"GXT":"POLMAV"},"498":{"GXT":"BOXVILL"},"499":{"GXT":"BENSON"},"500":{"GXT":"MESAA"},"501":{"GXT":"RCGOBLI"},"502":{"GXT":"HOTRINA"},"503":{"GXT":"HOTRINB"},"504":{"GXT":"BLOODRA"},"505":{"GXT":"RANCHER"},"506":{"GXT":"SUPERGT"},"507":{"GXT":"ELEGANT"},"508":{"GXT":"JOURNEY"},"509":{"GXT":"BIKE"},"510":{"GXT":"MTBIKE"},"511":{"GXT":"BEAGLE"},"512":{"GXT":"CROPDST"},"513":{"GXT":"STUNT"},"514":{"GXT":"PETROL"},"515":{"GXT":"RDTRAIN"},"516":{"GXT":"NEBULA"},"517":{"GXT":"MAJESTC"},"518":{"GXT":"BUCCANE"},"519":{"GXT":"SHAMAL"},"520":{"GXT":"HYDRA"},"521":{"GXT":"FCR900"},"522":{"GXT":"NRG500"},"523":{"GXT":"HPV1000"},"524":{"GXT":"CEMENT"},"525":{"GXT":"TOWTRUK"},"526":{"GXT":"FORTUNE"},"527":{"GXT":"CADRONA"},"528":{"GXT":"FBITRUK"},"529":{"GXT":"WILLARD"},"530":{"GXT":"FORKLFT"},"531":{"GXT":"TRACTOR"},"532":{"GXT":"COMBINE"},"533":{"GXT":"FELTZER"},"534":{"GXT":"REMING"},"535":{"GXT":"SLAMVAN"},"536":{"GXT":"BLADE"},"537":{"GXT":"FREIGHT"},"538":{"GXT":"STREAK"},"539":{"GXT":"VORTEX"},"540":{"GXT":"VINCENT"},"541":{"GXT":"BULLET"},"542":{"GXT":"CLOVER"},"543":{"GXT":"SADLER"},"544":{"GXT":"FIRELA"},"545":{"GXT":"HUSTLER"},"546":{"GXT":"INTRUDR"},"547":{"GXT":"PRIMO"},"548":{"GXT":"CARGOBB"},"549":{"GXT":"TAMPA"},"550":{"GXT":"SUNRISE"},"551":{"GXT":"MERIT"},"552":{"GXT":"UTILITY"},"553":{"GXT":"NEVADA"},"554":{"GXT":"YOSEMIT"},"555":{"GXT":"WINDSOR"},"556":{"GXT":"MONSTA"},"557":{"GXT":"MONSTB"},"558":{"GXT":"URANUS"},"559":{"GXT":"JESTER"},"560":{"GXT":"SULTAN"},"561":{"GXT":"STRATUM"},"562":{"GXT":"ELEGY"},"563":{"GXT":"RAINDNC"},"564":{"GXT":"RCTIGER"},"565":{"GXT":"FLASH"},"566":{"GXT":"TAHOMA"},"567":{"GXT":"SAVANNA"},"568":{"GXT":"BANDITO"},"569":{"GXT":"FRFLAT"},"570":{"GXT":"STREAKC"},"571":{"GXT":"KART"},"572":{"GXT":"MOWER"},"573":{"GXT":"DUNE"},"574":{"GXT":"SWEEPER"},"575":{"GXT":"BROADWY"},"576":{"GXT":"TORNADO"},"577":{"GXT":"AT400"},"578":{"GXT":"DFT30"},"579":{"GXT":"HUNTLEY"},"580":{"GXT":"STAFFRD"},"581":{"GXT":"BF400"},"582":{"GXT":"NEWSVAN"},"583":{"GXT":"TUG"},"584":{"GXT":"PETROTR"},"585":{"GXT":"EMPEROR"},"586":{"GXT":"WAYFARE"},"587":{"GXT":"EUROS"},"588":{"GXT":"HOTDOG"},"589":{"GXT":"CLUB"},"590":{"GXT":"FRBOX"},"591":{"GXT":"ARTICT3"},"592":{"GXT":"ANDROM"},"593":{"GXT":"DODO"},"594":{"GXT":"RCCAM"},"595":{"GXT":"LAUNCH"},"596":{"GXT":"POLICAR"},"597":{"GXT":"POLICAR"},"598":{"GXT":"POLICAR"},"599":{"GXT":"RANGER"},"600":{"GXT":"PICADOR"},"601":{"GXT":"SWATVAN"},"602":{"GXT":"ALPHA"},"603":{"GXT":"PHOENIX"},"604":{"GXT":"GLENSHI"},"605":{"GXT":"SADLSHI"},"606":{"GXT":"BAGBOXA"},"607":{"GXT":"BAGBOXB"},"608":{"GXT":"TUGSTAI"},"609":{"GXT":"BOXBURG"},"610":{"GXT":"FARMTR1"},"611":{"GXT":"UTILTR1"}};
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


const vehicle_catogory={"bikes":{"BF-400":{"ID":581},"Bike":{"ID":509},"BMX":{"ID":481},"Faggio":{"ID":462},"FCR-900":{"ID":521},"Freeway":{"ID":463},"Mountain Bike":{"ID":510},"NRG-500":{"ID":522},"PCJ-600":{"ID":461},"Pizzaboy":{"ID":448},"Sanchez":{"ID":468},"Wayfarer":{"ID":586}},"2-Door":{"Alpha":{"ID":602},"Blista Compact":{"ID":496},"Bravura":{"ID":401},"Buccaneer":{"ID":518},"Cadrona":{"ID":527},"Club":{"ID":589},"Esperanto":{"ID":419},"Euros":{"ID":587},"Feltzer":{"ID":533},"Fortune":{"ID":526},"Hermes":{"ID":474},"Hustler":{"ID":545},"Majestic":{"ID":517},"Manana":{"ID":410},"Picador":{"ID":600},"Previon":{"ID":436},"Stallion":{"ID":439},"Tampa":{"ID":549},"Virgo":{"ID":491}},"4-Door":{"Admiral":{"ID":445},"Damaged Glendale":{"ID":604},"Elegant":{"ID":507},"Emperor":{"ID":585},"Glendale":{"ID":466},"Greenwood":{"ID":492},"Intruder":{"ID":546},"Merit":{"ID":551},"Nebula":{"ID":516},"Oceanic":{"ID":467},"Premier":{"ID":426},"Primo":{"ID":547},"Sentinel":{"ID":405},"Stafford":{"ID":580},"Stretch":{"ID":409},"Sunrise":{"ID":550},"Tahoma":{"ID":566},"Vincent":{"ID":540},"Washington":{"ID":421},"Willard":{"ID":529}},"Civil service":{"Baggage":{"ID":485},"Bus":{"ID":431},"Cabbie":{"ID":438},"Coach":{"ID":437},"Sweeper":{"ID":574},"Taxi":{"ID":420},"Towtruck":{"ID":525},"Trashmaster":{"ID":408},"Utility Van":{"ID":552}},"Government vehicles":{"Ambulance":{"ID":416},"Barracks":{"ID":433},"Enforcer":{"ID":427},"FBI Rancher":{"ID":490},"FBI Truck":{"ID":528},"Fire Truck":{"ID":407},"Fire Truck2":{"ID":544},"HPV1000":{"ID":523},"Patriot":{"ID":470},"Police LS":{"ID":596},"Police LV":{"ID":598},"Police Ranger":{"ID":599},"Police SF":{"ID":597},"Rhino":{"ID":432},"S.W.A.T.":{"ID":601},"Securicar":{"ID":428}},"Heavy & Utility trucks":{"Benson":{"ID":499},"Boxville Mission":{"ID":609},"Boxville":{"ID":498},"Cement Truck":{"ID":524},"Combine Harvester":{"ID":532},"DFT-30":{"ID":578},"Dozer":{"ID":486},"Dumper":{"ID":406},"Dune":{"ID":573},"Flatbed":{"ID":455},"Hotdog":{"ID":588},"Linerunner":{"ID":403},"Mr. Whoopee":{"ID":423},"Mule":{"ID":414},"Packer":{"ID":443},"Roadtrain":{"ID":515},"Tanker":{"ID":514},"Tractor":{"ID":531},"Yankee":{"ID":456}},"Light trucks & Vans":{"Berkley's RC Van":{"ID":459},"Bobcat":{"ID":422},"Burrito":{"ID":482},"Damaged Sadler":{"ID":605},"Forklift":{"ID":530},"Moonbeam":{"ID":418},"Mower":{"ID":572},"News Van":{"ID":582},"Pony":{"ID":413},"Rumpo":{"ID":440},"Sadler":{"ID":543},"Tug":{"ID":583},"Walton":{"ID":478},"Yosemite":{"ID":554}},"SUVs & Wagons":{"Huntley":{"ID":579},"Landstalker":{"ID":400},"Perennial":{"ID":404},"Rancher":{"ID":489},"Rancher Lure":{"ID":505},"Regina":{"ID":479},"Romero":{"ID":442},"Solair":{"ID":458}},"Lowriders":{"Blade":{"ID":536},"Broadway":{"ID":575},"Remington":{"ID":534},"Savanna":{"ID":567},"Slamvan":{"ID":535},"Tornado":{"ID":576},"Voodoo":{"ID":412}},"Muscle cars":{"Buffalo":{"ID":402},"Clover":{"ID":542},"Phoenix":{"ID":603},"Sabre":{"ID":475}},"Street racers":{"Banshee":{"ID":429},"Bullet":{"ID":541},"Cheetah":{"ID":415},"Comet":{"ID":480},"Elegy":{"ID":562},"Flash":{"ID":565},"Hotknife":{"ID":434},"Hotring Racer":{"ID":494},"Hotring Racer 2":{"ID":502},"Hotring Racer 3":{"ID":503},"Infernus":{"ID":411},"Jester":{"ID":559},"Stratum":{"ID":561},"Sultan":{"ID":560},"Super GT":{"ID":506},"Turismo":{"ID":451},"Uranus":{"ID":558},"Windsor":{"ID":555},"ZR-350":{"ID":477}},"Planes":{"Andromada":{"ID":592},"AT-400":{"ID":577},"Beagle":{"ID":511},"Cropduster":{"ID":512},"Dodo":{"ID":593},"Hydra":{"ID":520},"Nevada":{"ID":553},"Rustler":{"ID":476},"Shamal":{"ID":519},"Skimmer":{"ID":460},"Stuntplane":{"ID":513}},"Helicopters":{"Cargobob":{"ID":548},"Hunter":{"ID":425},"Leviathan":{"ID":417},"Maverick":{"ID":487},"News Chopper":{"ID":488},"Police Maverick":{"ID":497},"Raindance":{"ID":563},"Seasparrow":{"ID":447},"Sparrow":{"ID":469}},"Boats":{"Coastguard":{"ID":472},"Dinghy":{"ID":473},"Jetmax":{"ID":493},"Launch":{"ID":595},"Marquis":{"ID":484},"Predator":{"ID":430},"Reefer":{"ID":453},"Speeder":{"ID":452},"Squalo":{"ID":446},"Tropic":{"ID":454}}}
const stats={"perfect-body":[22,23,24,25],"Fat":21, "stamina":22,"Muscle":23, "gun_skills":[69,70,71,72,73,74,75,76,77,78,79], "respect":68};
const weather=generate_gxt_list("DEBW",18);
weather[18]=["WEATH16",18];
weather[19]=["DEBW18",19];


const times =[["+1hour",1],["-1hour",-1]];
var  memoryaddress={
	"1":{
		"waypoint":{"x":0x5292AF8,"y":0x5292AFC},
	},
	"2":{
		"waypoint":{"x":0x52A1978,"y":0x52A197C}

	}

	

	
}
const player_cheats=[["God",godmode,false],["teleport to waypoint",teleport_to_waypoint,false],["Money",giveMoney,false],["Armour",full_armour,false],["Remove Wanted",remove_wanted,false],["No Pigs",toggle_police,false],["GTASA_PublicEnemy_DESC",fully_wanted,false],["FES_WEA",weapon_selector,true],["Ammo",ammo,false],["Perfect CJ",perfect_cj,false]]
const trainer=[["player",generate_player_menu,true],["Vehicle",generate_vehicle_menu,true],["Vehicle Spawner",vehicle_spawner,true],["Weather",generate_weather_menu,true],["Time",generate_time_menu,true]]
const vehicle_menu=[["God",vehicle_godmode,false],["repair",repair_vehicle,false],["nitro",add_nitro,false], ["hydrolics",add_hydrolics,false],["p-color",generate_color_menu,true],["s-color",generate_color_menu,true]]
const teleport_menu=[["marker",teleport_to_waypoint,false]]
//variables
const vehicle_state=0;

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
	weapon_catagory:null

};
var world_cheats_var={
	lockdown:false,
	riot:false,
	menu_state:0

}


var vehicle_god=false;
var trainer_active=false;
var spawner_state=0;



function teleport_to_waypoint(player){
	
	var cordinatex=Memory.ReadFloat(memoryaddress[2].waypoint.x, false, true);
	var cordinatey =Memory.ReadFloat(memoryaddress[2].waypoint.y,false,true)
	log("cordinates "+cordinatex +', ' +cordinatey)
	player.getChar().setCoordinates(cordinatex,cordinatey,-100)
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
	
	player.setIgnorePolice(player_cheats_var.never_wanted)

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
		vehicle_god=!vehicle_god;
		log(" player is in car");
		Char.getCarIsUsing().setProofs(vehicle_god,vehicle_god,vehicle_god,vehicle_god,vehicle_god);

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

}
function ammo(player){
	var Char =player.getChar();
	var type = Char.getWeaponInSlot(3);

	
	for(var i=1;i<12;i++){
		//var weapon=char.getWeaponInSlot(i)
		log("type " + Char.getWeaponInSlot(i).weaponType);
		Char.addAmmo(Char.getWeaponInSlot(i).weaponType,3000);

		
	}

	
        
}
function giveMoney(player){
//	Text.Print("+$1000",500, 1)
	player.addScore(1000);
}
function fully_wanted(player){
	
	player.alterWantedLevelNoDrop(6);

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
	Widget.CreateShopMenu("Weapons");
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
	Widget.CreateShopMenu("Colors");
	var color_names=Object.keys( colors);
	for(var i =0;i<color_names.length;i++){
		Widget.AddShopItem(color_names[i]);
	}

}
function generate_player_menu(){
	log("sandstorm",weather[18][0])
	state=2;
	Widget.CreateShopMenu("Player");
	for(var i=0;i<player_cheats.length;i++){
		if(i==0){
			if(player_cheats_var.enable_god){
				var text =player_cheats[i][0]+" on"
				Widget.AddShopItem(text,0);
			}
			else{
				var text =player_cheats[i][0]+" off";
				Widget.AddShopItem(text,0);
			}
		}
		else{
			Widget.AddShopItem(player_cheats[i][0],0);
		}
	}
}
function generate_vehicle_menu(player){
	if(check_if_in_vehicle(player)){
		state=5;
		var car =player.getChar().getCarIsUsing();
		var model_id =car.getModel();
		var name = vehicle_gxt[model_id]["GXT"];
		Widget.CreateShopMenu(name);
		for(var i =0;i<vehicle_menu.length;i++){
			if(i==0){
				if(vehicle_god){
					var text =vehicle_menu[i][0]+" on";
					Widget.AddShopItem(text,0);
				}
				else{
					var text =vehicle_menu[i][0]+" off";
					Widget.AddShopItem(text,0);
				}
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
	Widget.CreateShopMenu("Vehicle Spawner");

	for(var i =0;i<Object.keys(vehicle_catogory).length;i++){
	Widget.AddShopItem(Object.keys(vehicle_catogory)[i],0);
	}
}
function generate_trainer_menu(){
	
	//Memory.Write(test,4,1,false,false)

	
	
	Widget.CreateShopMenu("Simple Trainer");
	
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
function vehicle_cheat(){
	if(Widget.IsReleased(55)){
		if(vehicle_state==1|| vehicle_state==2){
			vehicle_state=0;
			generate_vehicle_menu(player);

		}
		else{
			state=0;
			vehicle_state=0;
			generate_trainer_menu();

		}
		
	}
	if(Widget.IsReleased(56)){
		var idx = parseInt(Widget.GetValue(146));	
			if(vehicle_state==1){
				var key = Object.keys(colors)[idx];
				var car = player.getChar().getCarIsUsing()
				var color = car.getColors();
				 car.changeColor(colors[key],color.secondaryColour);
			}
			else if(vehicle_state==2){
				var key = Object.keys(colors)[idx];
				var car = player.getChar().getCarIsUsing();
				var color = car.getColors();
				 car.changeColor(color.primaryColour,colors[key]);

			}
			else{
				if(vehicle_menu[idx][2]){
					if(vehicle_menu[idx][0]=="p-color"){
						
					vehicle_state=1;

					}
					else{
						
					vehicle_state=2;
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

        
            loadModel(id);
            var pos = player.getChar().getOffsetInWorldCoords(0, 8, 1); // spawn 8 meters in front of the player
            current_vehicle = Car.Create(id, pos.x, pos.y, pos.z);
            player.getChar().warpIntoCar(current_vehicle);
            current_vehicle.markAsNoLongerNeeded();
            current_vehicle.lockDoors(1); // force doors to be unlocked, some police/fbi/swat vehicles may spawn locked otherwise
            Streaming.MarkModelAsNoLongerNeeded(id);
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
//main loop
while (true) {
	wait(0);

	
	if (Pad.IsKeyPressed(Trainer_Key)){

		//vehicle_godmode();
		trainer_active=!trainer_active;
		
		 index=0;
		 state=0;
		 spawner_state=0;
		 vehicle_state=0;
		if(trainer_active){
			
			
		
			pause();
			wait(250);
			generate_trainer_menu();
		}
		else{
			unpause();
		
		}

		//Text.ClearHelp();
		wait(200);
	//	fully_wanted(player)
	}

	if(player.isPlaying()){
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
				default:
					cheat_menu();
					break;
			}		
		}
		
		player.getChar().setProofs(player_cheats_var.enable_god,player_cheats_var.enable_god,player_cheats_var.enable_god,player_cheats_var.enable_god,player_cheats_var.enable_god);


	}

	
	
}

