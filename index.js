const heading = React.createElement('h1', {
    id: 'heading',
    className: 'text-center'
},"hello world")
const heading2 = React.createElement('h2', {
    id: 'heading2',
    style: {
        color:'red'
    }
},"hello world2")

const container = React.createElement('div', {
    id: 'container'
},[heading, heading2])

 const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container)