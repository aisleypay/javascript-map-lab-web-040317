const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];


const sortedRobots = robots.map( (autobot) => {

  function alliances(autobot) {
    if (knownDecepticons.includes(autobot.name)) {
      return 'decepticon'
    } else {
      return 'autobot'
    }
  }

  return Object.assign({}, autobot, {
    'name': autobot.name,
    'alliance': alliances(autobot)
  })
})

const coloredZebraStripes = zebraStripes.map( (stripe, index) => {
  if (index % 2 == 0) {
    return Object.assign({}, stripe, {
      width: stripe.width,
      color: 'black'
    })
  } else {
    return Object.assign({}, stripe, {
      width: stripe.width,
      color: 'white'
    })
  }
})

// Create a new variable called coloredZebraStripes;
// The value of this variable is the mapped zebraStripes array;
// Return each stripe object with the stripe filled in with either a 'black' or 'white' string.
// A stripe is black when the stripe's index is even, and it's white if a stripe's index is odd.
// (Hint: the callback we pass to .map() takes more than one parameter)
// The original objects in the zebraStripes array must not be modified, so be sure to use Object.assign()
