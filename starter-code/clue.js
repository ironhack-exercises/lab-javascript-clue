//---- Characters ----
function Character(firstName, lastName, colorCharacter, descr, age, image, occupation) {
  this.firstName = firstName
  this.lastName = lastName
  this.colorCharacter = colorCharacter
  this.descr = descr
  this.age = age
  this.image = image
  this.occupation = occupation
}

var mrGreen = new Character('Jacob', 'Green', 'green', 'He has a lot of connections', 34, 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 'Entrepreneur')
var drOrchid = new Character('Doctor', 'Orchid', 'white', 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 26, 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'Scientist')
var profPlum = new Character('Victor', 'Plum', 'purple', 'Billionare video game designer', 22, 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'Designer')
var missScarlet = new Character('Kasandra', 'Scarlet', 'red', 'She is an A-list movie star with a dark past,', 31, 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 'Actor')
var mrsPeacock = new Character('Eleanor', 'Peacock', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity', 36, 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'Socialité')
var mrMustard = new Character('Jack', 'Mustard', 'yellow', 'He is a former football player who tries to get by on his former glory', 62, 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 'Retired Football player')

var suspects = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]

//---- Weapons ----
function Weapon(name, weight) {
  this.name = name
  this.weight = weight
}

var rope = new Weapon('rope', 10)
var knife = new Weapon('knife', 8)
var candlestick = new Weapon('candlestick', 2)
var dumbbell = new Weapon('dumbbell', 30)
var poison = new Weapon('poison', 2)
var axe = new Weapon('axe', 15)
var bat = new Weapon('bat', 13)
var trophy = new Weapon('trophy', 25)
var pistol = new Weapon('pistol', 20)

var weapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]

//---- Rooms ----
var rooms = ['Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library',
  'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room',
  'Observatory', 'Theater', 'Guest House', 'Patio'
]

//---- Functions ----
function random_selector(array) {
  var randomIndex = Math.floor(Math.random() * (array.length - 1))
  return array[randomIndex]
}

function pick_mistery() {
  var suspect = random_selector(suspects)
  var weapon = random_selector(weapons)
  var room = random_selector(rooms)

  var misteryEnvelope = [suspect, weapon, room]
  return misteryEnvelope
}

function reveal_mistery(mistery) {
  console.log('Suspect: ' + mistery[0].firstName + ' ' + mistery[0].lastName + '\nWeapon: ' + mistery[1].name + '\nRoom: ' + mistery[2])
}

var mistery_envelope = pick_mistery()
reveal_mistery(mistery_envelope)
