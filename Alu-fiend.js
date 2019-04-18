/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	(sub)race
	Effect:		This is the syntax for adding a new (sub)race to the sheet.
				Note that you will need to define a race using this syntax once for every sub-race (i.e. there is a separate entry for High Elf, Wood Elf, and Dark Elf)
				You will use this for a race that doesn't have a subrace, like Dragonborn and also for a subrace of a race, like Hill Dwarf and Mountain Dwarf.
				You do not make a separate entry for the parent of a subrace. So there is no Dwarf or Elf entry!
				For races that have variants, like the human, you can define a variant using the RaceSubList. Any variant defined like that will only be selectable through the "Racial Options" button
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "Alu-fiend.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SourceList["thrall-of-malcanthet"] = {
	name: "Thrall of Malcanthet",
	abbreviation: "Thrl",
	group: "Reddit/r/UnearthedArcana u/impersonater",
	url: "https://drive.google.com/file/d/1eQvuAQ8lqenWY8BDW8Y-4OM6vXRil6cQ/view",
	date : "2018/01/26"
};
RaceList["alu-fiend"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*alu)(?=.*-fiend).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something catlike/i

	name : "Alu-fiend", //required; the name to use for the race

	sortname : "Alu-fiend", //optional; this is the name used to fill the drop-down boxes. If you don't include this, the 'name' will used instead

	source : ["HB", 5], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	plural : "Alu-fiends", //required; the name to use for the race when the plural form is used

	size : 3, //required;  the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)

	speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"

		// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)

		walk : { spd : 30, enc : 20 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.

		fly : { spd : "walk", enc : 0 }, // instead of a number/modifier, you can also set the attribute to "walk". This makes the speed mode assume the walking speed // Using an underscore as the first character means the value is only added if the value would be non-zero
	},

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	languageProfs : ["Common", "Abyssal", "Infernal"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

	vision : [["Darkvision", 60]], //optional; An array of arrays that each have a length of 2; This adds the first value of each array to the Senses field. The second value is the range in feet. If no range is needed, put a 0 there. You can also add a modifier like "+30" or "*2" to have the appropriate calculation done with the range of sense

	age : " only semblance of age is how their mortal parentage reaches maturity in which the aging process stops, thus an alu-fiend offspring from a human would look 18-24 forever.", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	improvements : "Alu-fiend: +2 Charisma, +1 to any;", //required; the text that is displayed when listing all the ability score improvements

	scores : [0, 0, 0, 0, 0, 2], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]

	trait : "Alu-fiend (+2 Charisma, +1 to any)\nBat Wings:\n   I have small, useable wings on your back. If they are not encoumbered with armor or clothing, I can hover above the ground or fly, horizontally or downward only, at a distance equal to your speed. I must end my turn on the ground or fall, given that my wings are not strong enough to hold you aloft for extended periods of time.\n\nShapechanger:\nUpon maturation of age, I may choose a humanoid form of Small or Medium size. I may, as an action, polymorph into this form or back again as though you used the change appearance feature of the alter self spell. My new form cannot possess wings, and thus I lose my bat wings feature while transformed. This transformation is indefinite, but I revert to my alu-fiend form if I die. At 4th level, and every 2 levels afterwards, I gain an additional form to transform into.\n\nCharm:\nI know the Friends cantrip. At 3rd level, I can cast Charm Person once before I must finish a long rest to do so again. At 5th level, I may also cast Vampiric Touch once before I must finish a long rest to do so again. Charisma is the spellcasting ability for these spells.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).

	features : { //optional; the racial features. Each works the same way, so only a couple of example are given. You can add as many as you want. If the race has no level-dependent or limited features, you can just delete the whole feature entry all together

		"friends" : { //note the use of lower case characters

			name : "Friends", //required; the name of the racial feature
			minlevel : 1, //required; the level at which the feature is gained

			tooltip : " (Charm)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"

			action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field

			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Charm (level 1)",
				spells : ["friends"],
				selection : ["friends"],
				atwill : true,
			},
		},

		"charm person" : { //note the use of lower case characters

			name : "Charm Person", //required; the name of the racial feature
			minlevel : 3, //required; the level at which the feature is gained

			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level

			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level

			tooltip : " (Charm)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"

			action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field

			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Charm (Level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true,
			},
		},

		"vampiric touch" : { //note the use of lower case characters

			name : "Vampiric Touch", //required; the name of the racial feature
			minlevel : 5, //required; the level at which the feature is gained

			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level

			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level

			tooltip : " (Charm)", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"

			action : ["action", ""], //optional; adds the name of the feature to the action list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field

			spellcastingBonus : { //optional; works just like the "spellcastingBonus" object defined above
				name : "Charm (Level 5)",
				spells : ["vampiric touch"],
				selection : ["vampiric touch"],
				oncelr : true,
			},
		},
	}

};
