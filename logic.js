let select1 = document.getElementById('select1')

let select2 = document.getElementById('select2')

let links= document.querySelectorAll('h3')
const container = document.querySelector('#container')
const displayArea = document.querySelector('#displayArea')
const openTab=(tab)=>{
    for(link of links)
    {
        link.classList.remove('active')
    }
    if(tab==='area')
    {
        container.classList.add('hide')
        displayArea.classList.remove('hide')
        document.getElementById('link2').classList.add('active')
        displayCountries(select1.value,select2.value)
    }
    else if(tab==='population'){
        container.classList.remove('hide')
        displayArea.classList.add('hide')
        document.getElementById('link1').classList.add('active')
        displayCountries(select1.value,select2.value)
    }
    else
        return false
}


let count = 0
const countriesAPI = 'https://restcountries.com/v2/all'
const displayCountries = (TB,num)=>{
    fetch(countriesAPI)
.then(response=>response.json())
.then(data=>{
    console.log(TB,num)
    let sortedList
    if(TB==='Top')
    {
        sortedList = data.sort((a,b)=>b.population-a.population)
    }
    else
    {
        sortedList = data.sort((a,b)=>a.population-b.population)
    }
    let top10
    switch(num)
    {
        case 10:
            top10 = sortedList.slice(0,10)
            break
        case 20:
            top10 = sortedList.slice(0,20)
            break
        case 30:
            top10 = sortedList.slice(0,30)
            break
            
        case 40:
            top10 = sortedList.slice(0,40)
            break
        case 50:
            top10 = sortedList.slice(0,50)
            break
        default:
            top10 = sortedList.slice(0,10)
            break

    }

    for(country of top10)
    {
        
        const content = document.createElement('div')
        content.style.display = 'flex'
        content.style.marginBottom = '5px'
        content.style.padding = '3px'
        content.style.backgroundColor = 'lightgray'
        content.style.justifyContent = 'center'
        const sn = document.createElement('span')
        sn.style.padding= '5px'
        sn.style.margin = '10px'
        sn.style.width = '8%'
        const Name = document.createElement('p')
        Name.style.width = '30%'
        Name.style.padding = '5px'
        Name.style.margin = '10px'
        Name.style.fontSize = '18px'
        const index = document.createElement('div')
        const indicater = document.createElement('p')
        
        container.style.width = '100%'
        index.style.width = '40%'
        index.style.padding = '5px'
        index.style.display ='flex'
        
        index.style.alignItems = 'center'
        indicater.style.height = '80%'
        const value = document.createElement('h4')
        value.style.fontSize = '14px'
        value.style.width = '20%'
            count++
            value.textContent = country.population
            Name.textContent = country.name
            sn.textContent = count
            container.appendChild(content)
            content.appendChild(sn)
            content.appendChild(Name)
            content.appendChild(index)
            indicater.style.width = `${((country.population/7000000000)*100)*3}%`
            indicater.style.float = 'left'
            indicater.style.backgroundColor = 'orange'
            index.appendChild(indicater)
            content.appendChild(value)
            
    }

    count2 =0
    let sortedAreas
    if(TB==='Top')
    {
        sortedAreas = data.sort((a,b)=>b.area-a.area)
    }
    else
    {
        sortedAreas = data.sort((a,b)=>a.area-b.area)
    }
    switch(num)
    {
        case 10:
            top10Area = sortedAreas.slice(0,10)
            break
        case 20:
            top10Area = sortedAreas.slice(0,20)
            break
        case 30:
            top10Area = sortedAreas.slice(0,30)
            break
            
        case 40:
            top10Area = sortedAreas.slice(0,40)
            break
        case 50:
            top10Area = sortedAreas.slice(0,50)
            break
        default:
            top10Area = sortedAreas.slice(0,10)
            break

    }
    
    for(element of top10Area)
    {
        const content = document.createElement('div')
        content.style.display = 'flex'
        content.style.marginBottom = '5px'
        content.style.padding = '3px'
        content.style.backgroundColor = 'lightgray'
        content.style.justifyContent = 'center'
        const sn = document.createElement('span')
        sn.style.padding= '5px'
        sn.style.margin = '10px'
        sn.style.width = '8%'
        const Name = document.createElement('p')
        Name.style.width = '30%'
        Name.style.padding = '5px'
        Name.style.margin = '10px'
        Name.style.fontSize = '18px'
        const index = document.createElement('div')
        const indicater = document.createElement('p')
        
        container.style.width = '100%'
        index.style.width = '40%'
        index.style.padding = '5px'
        index.style.display ='flex'
        
        index.style.alignItems = 'center'
        indicater.style.height = '80%'
        const value = document.createElement('h4')
        value.style.fontSize = '14px'
        value.style.width = '20%'
            count2++
            value.textContent = element.area
            Name.textContent = element.name
            sn.textContent = count2
            displayArea.appendChild(content)
            content.appendChild(sn)
            content.appendChild(Name)
            content.appendChild(index)
            indicater.style.width = `${((element.area/149000000)*100)*3}%`
            indicater.style.float = 'left'
            indicater.style.backgroundColor = 'orange'
            index.appendChild(indicater)
            content.appendChild(value)
    }
})
.catch(alert('Some error occured'))
}

