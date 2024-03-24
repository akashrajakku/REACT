/* Step 3:
hum render function bnaenge*/

function customRender(reactElement, Container){
    /*
    const domElement= document.createElement(reactElement.type)
    // document.createElement(type) , creates a html tag , in above case it created <a></a>

    domElement.innerHTML= reactElement.children

    domElement.setAttribute('href', reactElement.props.href)

    domElement.setAttribute('target', reactElement.props.target)


    Container.appendChild(domElement)

    Above code works fine but it has some problem as if we have more number of attribute we will specifically have to write set attribute for all attributes  
    */

    const domElement= document.createElement(reactElement.type)

    domElement.innerHTML= reactElement.children

    // using for loops for solving above problem
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendChild(domElement)
}





/*
Step 2: humne us html tag ko define kiya jise render krana hai  
This element hold the html that we wish to render*/

const reactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to go to Google'
}







/*
Step 1: humne root naam ki html div ko select kiya */
const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)