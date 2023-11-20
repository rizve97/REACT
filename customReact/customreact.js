function customRender(reactEle, container)
{
    // const domEle = document.createElement
    // (reactEle.type)
   
    // domEle.innerHTML = reactElement.children
    // domEle.setAttribute('href', reactElement.props.href)
    // domEle.setAttribute('target', reactElement.props.target)

    // container.appendChild(domEle)

        const domEle = document.createElement(reactEle.type)
        domEle.innerHTML = reactElement.children
        for (const prop in reactElement.props) {
            if(prop === 'children') continue;
            domEle.setAttribute(prop, reactElement.props[prop])
           
        }
        container.appendChild(domEle)

}


const reactElement = {
    types : 'a',
    props : {
        href: 'http//:google.com',
        target : '_blank'
    },
     
    children : 'click here to visit the site'
}

const container = document.querySelector('#root')

customRender(reactElement, container)