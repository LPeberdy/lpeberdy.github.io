// this code selects a tag to put our code in
const container = document.querySelector('section')

// this sets the parameters for the code
const params = {
  width: 500,
  height: 500,
}

// this starts a new instance of Two.js, and calls it 'two', applies the parameters and then puts the 'two' in our container
const two = new Two(params)
two.appendTo(container)

// this adds a shape to our instance of Two.js (which we've called 'two'), gives it dimensions, applies a colour , removes the stroke and rotates it
const shape = two.makeRectangle(250, 250, 100, 100)
shape.fill = '#8851ee'
shape.noStroke()
shape.rotation = Math.PI * 0.25

// this animates our instance of Two.js ('two') by listening for an event and then executing a function when the event occurs
// 'shape.rotation +=' is the same as 'shape.rotation + shape.rotation ='  
two.bind('update', function () {
  shape.rotation += 0.5
})

two.play()